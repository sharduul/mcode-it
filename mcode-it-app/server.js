
var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app); 

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000); // set the port number as environment variable

// routes ======================================================================
require('./app/routes.js')(app);


server.listen(app.get('port'), function () {
    console.log('Server running at http://127.0.0.1:8000/');
});