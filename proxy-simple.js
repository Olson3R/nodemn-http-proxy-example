var httpProxy = require('http-proxy');

var options = {};
var proxyServer = httpProxy.createProxyServer({ target: 'http://127.0.0.1:9000' });

console.log('Listening on port 8000');
proxyServer.listen(8000);
