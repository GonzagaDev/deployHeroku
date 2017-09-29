var http = require('http');
var app = require('./config/express');

http
  .createServer(app)
  .listen(8081, function(){
    console.log('Serviço iniciado na porta 8081');
  });
