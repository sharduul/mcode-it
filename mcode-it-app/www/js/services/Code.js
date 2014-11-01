angular
	.module('mcodeit.services')
	.factory('Code', Code);

Code.$inject = ['$http'];

function Code($http) {
  
	var service = {
		Run : Run
	};

	return service;


	function Run(codeText){

		var responsePromise =  $http({
										url: "http://localhost:8000/api/run", 
										//url: "http://192.168.0.101:8000/api/run", 
										method: "GET",
										params: {codeText : codeText}
									 });

		responsePromise.success(function(data, status, headers, config) {
			console.log(data);
		});
		responsePromise.error(function(data, status, headers, config) {
			console.log("error");
		});

	}

}