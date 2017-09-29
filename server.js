var http = require('http');
var app = require('./config/express');

http
  .createServer(app)
  .listen(8080, function(){
    console.log('Serviço iniciado na porta 8080');
  });
