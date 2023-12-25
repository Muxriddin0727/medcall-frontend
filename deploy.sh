#!/bin/bash

# Production
git reset --hard
git pull origin develop
npm i yarn -g
yarn
yarn run build
pm2 start "C:\Users\abduv\Desktop\medcall-frontend\node_modules\serve" --name "Guardian_Care-React" -- -s build



 # Development
# npm i yarn -g
# yarn
# pm2 start "yarn run start:dev" -name=GuardianCare-React