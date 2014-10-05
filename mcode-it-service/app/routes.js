

module.exports = function(app) {
	
	
	app.get('/now', function(request, response) {
	  var d = new Date();
	  response.send(200, 
	  	{date: "test 1",
	  		port: app.get('port')}); // (status code, response body)
	  

	});

};