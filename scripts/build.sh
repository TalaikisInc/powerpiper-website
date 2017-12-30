#!/bin/bash

PROJECT=$1
FOLDER=$2
FRONTEND_PORT=$3
API_PORT=8010
HOST=127.0.0.1

#############################################################
# INITIALS
#############################################################

sudo apt get update
sudo apt-get install xz-utils

#############################################################
# GO
#############################################################

cd ~
wget https://storage.googleapis.com/golang/go1.8.2.linux-amd64.tar.gz
sudo tar -C /usr/bin -xzf go1.8.2.linux-amd64.tar.gz
export PATH=$PATH:/usr/bin/go/bin
export GOROOT=/usr/bin/go
go get github.com/lib/pq
go get github.com/labstack/echo
go get github.com/labstack/echo/...
go get github.com/joho/godotenv
go get github.com/die-net/lrucache
go build

#############################################################
# CONFIGURE SERVICES
#############################################################

echo """description 'Go server Init'\nstart on runlevel [2345]\nstop on runlevel [!2345]\n\nrespawn\n\nexec /usr/bin/sudo -u www-data $FOLDER/scripts/api.sh $FOLDER >> $FOLDER/logs/api.log 2>&1""" >> nano /etc/init/$PROJECT.conf
# !!! admin server here!!!!

#############################################################
# NODE JS
#############################################################

wget https://nodejs.org/dist/v8.6.0/node-v8.6.0-linux-x64.tar.xz
sudo tar -C /usr/local --strip-components 1 -xJf node-v8.6.0-linux-x64.tar.xz
ls -l /usr/local/bin/node
ls -l /usr/local/bin/npm
cd $FOLDER/frontend
npm i
npm i -g pm2
export FRONTEND_PORT=$FRONTEND_PORT
pm2 start npm --name "node" -- start

#############################################################
# SERVICES
#############################################################

service $PROJECT restart
service admin$PROJECT restart

#############################################################
# SERVICE TESTS
#############################################################

timeout 1 bash -c 'cat < /dev/null > /dev/tcp/${HOST}/${API_PORT}'
if [ "$?" -ne 0 ]; then
    echo "Connection to 127.0.0.1 on API port $API_PORT failed, exiting."
    exit 1

timeout 1 bash -c 'cat < /dev/null > /dev/tcp/${HOST}/${FRONTEND_PORT}'
if [ "$?" -ne 0 ]; then
    echo "Connection to 127.0.0.1 on FRONTEND port $FRONTEND_PORT failed, exiting."
    exit 1

# test real end point domain connectivity + tls
# test admin uwsgi and end connectivity + tls
# stagging THEN
# deployment
# nginx conf (from no to ssl)
