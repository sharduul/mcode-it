

module.exports = function(app) {
	
	
	app.get('/now', function(request, response) {
	  var d = new Date();
	  response.send(200, {date: d}); // (status code, response body)
	});

};