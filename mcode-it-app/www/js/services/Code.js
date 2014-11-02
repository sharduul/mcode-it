angular
	.module('mcodeit.services')
	.factory('Code', Code);

Code.$inject = ['$http', 'Common'];

function Code($http, Common) {

	var service = {
					Run : Run
				};

	return service;


	function Run(codeText_param, class_param){

		var responsePromise =  $http({
										url: "http://localhost:8000/api/run", 
										//url: "http://192.168.0.101:8000/api/run", 
										method: "GET",
										params: {
													codeText 	: codeText_param,
													className	: class_param
												}
									 });

		responsePromise.success(function(data, status, headers, config) {
			//console.log(data);
			Common.Output = data.output_text;
		});
		responsePromise.error(function(data, status, headers, config) {
			console.log("error");
		});

		return responsePromise;
	}

}