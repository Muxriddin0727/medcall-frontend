#!/bin/bash

# Production
git checkout develop
git reset --hard
git pull origin develop

npm i yarn -g
yarn global add serve
yarn
# yarn run build
pm2 start yarn --name "Guardian_Care_React" --yarn run "start:prod"

# Development
# npm i yarn -g
# yarn
# pm2 start "yarn run start:dev" -name=GuardianCare-React