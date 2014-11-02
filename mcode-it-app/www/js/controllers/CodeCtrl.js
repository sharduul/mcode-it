angular
	.module('mcodeit.controllers', [])
	.controller('CodeCtrl', CodeCtrl);

CodeCtrl.$inject = ['Common', 'Code'];

function CodeCtrl(Common, Code) {

	vm = this;
	vm.codeText = '';
	vm.output = Common.Output;
	vm.Run = Run;


	//console.log(vm.codeText);


	Common.ActivateAce();

	function Run() {

		Code.Run(vm.codeText)
		.then(function(result){

			//console.log(result.data.output_text);
			vm.output = result.data.output_text;

		});
		
	}
 
}


