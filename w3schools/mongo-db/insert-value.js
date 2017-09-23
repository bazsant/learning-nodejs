var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if(err) throw err;

    var jsonInsert = { name: 'compania ia', address: 'rua sem numero, 0'};
    db.collection('customer').insertOne(jsonInsert, function (err, res) {
        if(err) throw err;
        console.log('inserido um cara aí hein');        
    })

    db.close();
})