var fs = require('fs');

var leituraAsync = function (arquivo) {
    console.log('leitura assinc');
    var inicio = new Date().getTime();

    fs.readFile(arquivo);

    var fim = new Date().getTime();
    console.log('bloqueio assinc:' + (fim - inicio) + 'ms');
};

module.exports = leituraAsync;