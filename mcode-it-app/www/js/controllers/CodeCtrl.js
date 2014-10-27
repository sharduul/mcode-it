angular
	.module('mcodeit.controllers', [])
	.controller('CodeCtrl', CodeCtrl);

CodeCtrl.$inject = ['Common', 'Code'];

function CodeCtrl(Common, Code) {

	vm = this;
	//vm.code = "asdfasf";
	vm.Run = Run;


	Common.ActivateAce();

	function Run(codeText) {

		Code.Run(codeText);
		
	}
 
}


