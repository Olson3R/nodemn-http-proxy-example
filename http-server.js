var http = require('http');

var httpServer = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('request successfully proxied!\n' + JSON.stringify(request.headers, true, 2));
  response.write('\nurl: ' + request.url);
  response.end();
});

console.log('Listening on port 9000');
httpServer.listen(9000);
