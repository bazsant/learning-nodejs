var fs = require('fs');

fs.readFile('/index.html', function(err, arqu){
    if (err) {
        throw err;

        console.log(arqu);
    }
});

var arquivo = fs.readFileSync('/index.html');
console.log(arquivo);