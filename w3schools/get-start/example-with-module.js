var http = require('http');
var dt = require('./first-module');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write('a data de agora ehhhhh: ' + dt.myDateTime());
    res.end();
}).listen(3000);