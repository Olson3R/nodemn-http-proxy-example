var httpProxy = require('http-proxy');

var options = {};
var proxyServer = httpProxy.createProxyServer({ target: 'http://127.0.0.1:9000' });

proxyServer.on('proxyReq', function(proxyRequest, request, response, options) {
  // Modify the proxy request
  proxyRequest.setHeader('x-request-header', 'Request Woot!');
});

console.log('Listening on port 8000');
proxyServer.listen(8000);
