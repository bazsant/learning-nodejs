var fs = require('fs');

var myNumber;

function addOne() {
    fs.readFile('./callbacks-em-node/text.txt', function(err, fileContent) {
        myNumber = parseInt(fileContent);
        myNumber++;
    });
}

addOne();

console.log(myNumber);