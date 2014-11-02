angular
	.module('mcodeit.controllers', [])
	.controller('CodeCtrl', CodeCtrl);

CodeCtrl.$inject = ['Common', 'Code', '$rootScope'];

function CodeCtrl(Common, Code, $rootScope) {

	var vm = this;
	vm.codeText = $rootScope.codeText;
	vm.output = Common.Output;
	vm.Run = Run;


	//Common.ActivateAce();

	function Run() {

		$rootScope.codeText = vm.codeText; // persist the code

		Code.Run(vm.codeText)
		.then(function(result){

			//console.log(result.data.output_text);
			vm.output = result.data.output_text;

		});
		
	}
 
}


