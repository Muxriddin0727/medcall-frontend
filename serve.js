const serve = require('serve');

const server = serve(__dirname + '/build', {
    port: 5000, 
    single: true
  });