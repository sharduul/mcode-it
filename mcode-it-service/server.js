
var express = require('express'),
http = require('http'),
sharejs = require('share').server;
var app = express();
var server = http.createServer(app); 


//app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000); // set the port number as environment variable
//app.set('port', 3000); // set the port number as environment variable


var options = {db:{type:'none'}};
sharejs.attach(app, options);

app.use(express.static(__dirname + '/public'));

// routes ======================================================================
require('./app/routes.js')(app);


server.listen(app.get('port'), function () {
    console.log(app.get('port'));
});

