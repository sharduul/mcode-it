angular
	.module('mcodeit.controllers', [])
	.controller('CodeCtrl', CodeCtrl);

CodeCtrl.$inject = ['Common', 'Code', '$rootScope'];

function CodeCtrl(Common, Code, $rootScope) {

	var vm = this;
	vm.codeText = $rootScope.codeText;
	vm.output = Common.Output;
	vm.Run = Run;
	vm.GetClass = GetClass;


	//Common.ActivateAce();

	function Run() {

		$rootScope.codeText = vm.codeText; // persist the code
		var program_class = vm.GetClass();

		Code.Run(vm.codeText, program_class)
		.then(function(result){
			//console.log(result.data.output_text);
			vm.output = result.data.output_text;
		});
		
	}


	function GetClass(){

		var codeLines = vm.codeText.split('\n');
		var line_split = [];

		angular.forEach(codeLines, function(line){

			// === 0 because to element 'asdapublic class asdf' - such cases
			if(line.toLowerCase().indexOf('public class ') === 0){
				//console.log(line.split('public class '));
				line_split = line.split('public class ');
			}
		});

		return line_split[1];
	}
 
}


