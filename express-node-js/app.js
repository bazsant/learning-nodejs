var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('ola mundo');
});

var server = app.listen(3000, function() {
    console.log('server rodando!');
});