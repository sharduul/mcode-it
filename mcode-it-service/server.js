
var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app); 


//app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000); // set the port number as environment variable
//app.set('port', 3000); // set the port number as environment variable

// routes ======================================================================
require('./app/routes.js')(app);


// var my_ip = '192.168.0.101';

// server.listen(8000, my_ip, function () {
//     console.log('Server started on http://' + my_ip + ':8000');
// });

server.listen(app.get('port'), function () {
    console.log(app.get('port'));
});

