angular
	.module('mcodeit.services')
	.factory('Code', Code);

Code.$inject = [];

function Code() {
  
	var service = {
		Run : Run
	};

	return service;


	function Run(codeText){

		console.log(codeText);

	}

}