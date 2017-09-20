var express = require('express'),
    load = require('express-load'),
    path = require('path'),
    app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function() {
    console.log('proj no ar galera!');
});