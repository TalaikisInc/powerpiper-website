#!/bin/bash

PROJECT=$1
FOLDER=$2
FRONTEND_PORT=$3
API_PORT=8010
HOST=127.0.0.1

#############################################################
# CONFIGURE SERVICES
#############################################################

echo """description 'Go server Init'\nstart on runlevel [2345]\nstop on runlevel [!2345]\n\nrespawn\n\nexec /usr/bin/sudo -u www-data $FOLDER/scripts/api.sh $FOLDER >> $FOLDER/logs/api.log 2>&1""" >> nano /etc/init/$PROJECT.conf
# !!! admin server here!!!!

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
