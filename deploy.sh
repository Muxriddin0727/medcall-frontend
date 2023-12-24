#!/bin/bash

# Production
git reset --hard

git pull origin develop

npm i yarn -g
yarn
yarn run build
pm2 start "npm run start:prod" --name=GuardianCare-React

 # Development
# npm i yarn -g
# yarn
# pm2 start "yarn run start:dev" -name=GuardianCare-React