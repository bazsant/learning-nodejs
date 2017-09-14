var fs = require('fs');

for (var i = 0; i < 5; i++) {
    var file = 'async-text' + i + '.txt';
    fs.writeFile(file, 'hello node js', function (err, out) {
       console.log(out) ;
    });
}