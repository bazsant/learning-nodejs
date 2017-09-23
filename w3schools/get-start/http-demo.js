var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    var qry = url.parse(req.url, true).query;
    var txt = qry.year + ' ' + qry.month;
    res.write(txt);
    res.end();
}).listen(3000);