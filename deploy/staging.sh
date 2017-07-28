#!/bin/bash

# requires that node app.js be contained in a Procfile
# ./heroku-deploy.sh <NODE_ENV> <local_branch_to_push> <app_to_destroy_if_redeploy>

# validate minimal input
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Run with at least NODE_ENV and local_branch_to_push as arguments $1 and $2"
  exit 1
fi

# is this a redeploy?, if so destroy the current app
if [ -n "$3" ]; then
  # destroy the app
  heroku apps:destroy -a $3 --confirm $3
fi
# create new app
heroku create
# configure new app
heroku config:set NODE_ENV=$1
# push the app
git push heroku $2:develop --force
# wait for node start up, then open it
sleep 3
heroku open
