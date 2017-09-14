var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');
var arquivo = './node.exe';
var stream = fs.createWriteStream(arquivo);
var download = 'http://nodejs.org/dist/v6.11.3/node-v6.11.3-x64.msi';

http.get(download, function(response){
    console.log('fazendo download nodejs');
    
    response.on('data', function(data){
        stream.write(data);
    });

    response.on('end', function(){
        stream.end();
        console.log('down finalizado');
        leituraAsync(arquivo);
        leituraSync(arquivo);
    });
});