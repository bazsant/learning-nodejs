var fs = require('fs');

var leituraSync = function(arquivo){
    console.log('leitura sinc');
    var inicio = new Date().getTime();

    fs.readFileSync(arquivo);

    var fim = new Date().getTime();
    console.log('bloqueio sinc:' + (fim - inicio)+ 'ms');
};

module.exports = leituraSync;