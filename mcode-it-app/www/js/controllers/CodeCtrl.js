angular
	.module('mcodeit.controllers', [])
	.controller('CodeCtrl', CodeCtrl);

CodeCtrl.$inject = ['Common'];

function CodeCtrl(Common) {

	Common.ActivateAce();
 
}


