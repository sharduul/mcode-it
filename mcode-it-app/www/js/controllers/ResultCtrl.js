angular
	.module('mcodeit.controllers', [])
	.controller('ResultCtrl', ResultCtrl);

ResultCtrl.$inject = ['Common'];

function ResultCtrl(Common) {

	vm = this;
	vm.placeHolder = "OUTPUT will be displayed here";
	vm.output = Common.Output;
 
}


