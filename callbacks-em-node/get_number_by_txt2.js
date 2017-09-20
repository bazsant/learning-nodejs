var fs = require('fs');

var myNumber;

function addOne(callback) {
    fs.readFile('./text.txt', function(err, data) {
        myNumber = parseInt(data);
        myNumber++;
        callback();
    });
}

function logMyNumber() {
    console.log(myNumber);
}

addOne(logMyNumber);