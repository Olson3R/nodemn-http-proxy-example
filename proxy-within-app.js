var http = require('http');
var httpProxy = require('http-proxy');

var options = {
  target: 'http://127.0.0.1:9000'
};
var proxyServer = httpProxy.createProxyServer();

var httpServer = http.createServer(function(request, response) {
  // Modify the request
  request.headers['x-request-header'] = 'Request Woot!';
  proxyServer.web(request, response, options);
});

console.log('Listening on port 8000');
httpServer.listen(8000);
