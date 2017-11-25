#!/bin/bash

PROJECT=powerpiper

export LD_LIBRARY_PATH=/usr/local/anaconda/lib:$LD_LIBRARY_PATH

cd /home/$PROJECT

chown -R www-data:www-data /home/$PROJECT

source /usr/local/anaconda/bin/activate $PROJECT && /usr/local/anaconda/envs/$PROJECT/bin/uwsgi --ini /home/$PROJECT/uwsgi/emperor.ini

source /usr/local/anaconda/bin/deactivate
