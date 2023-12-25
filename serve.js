const serve = require('./node_modules/serve');

const server = serve(__dirname + '/build', {
    port: 5000, 
    single: true
  });