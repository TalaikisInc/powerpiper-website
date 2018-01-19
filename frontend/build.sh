#!/bin/bash

echo $1
cd /home/powerpiper/frontend
npm install
npm run installdev
FRONTEND_PORT=$1 npm run build
