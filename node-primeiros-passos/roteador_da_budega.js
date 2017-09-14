var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content_Type': 'text/html'
    });

    var result = url.parse(request.url, true);

    switch (result.pathname) {
        case '/':
        case '/artigos':

            fs.readFile(__dirname + '/artigos.html', function (err, html) {
                if (err) throw err;
                response.end(html);
            });
            break;
        case '/contato':

            fs.readFile(__dirname + '/contato.html', function (err, html) {
                if (err) throw err;
                response.end(html);
            });
            break;
        default:

            fs.readFile(__dirname + '/erro.html', function (err, html) {
                if (err) throw err;
                response.end(html);
            });
            break;
    }

});

server.listen(3000, function () {
    console.log('rodando again');
})