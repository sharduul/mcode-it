angular
	.module('mcodeit.services', [])
	.factory('Common', Common);

Common.$inject = [];

function Common() {
  
	var service = {
		ActivateAce : ActivateAce,
		Output: ''
	};

	return service;


	function ActivateAce(){

		// // Hook up ACE editor to all textareas with data-editor attribute
	 //    $(function () {

	 //      //console.log("asdfdsdfasd");
	 //        $('textarea[data-editor]').each(function () {
	 //            var textarea = $(this);
	 
	 //            var mode = textarea.data('editor');
	 
	 //            var editDiv = $('<div>', {
	 //                position: 'absolute',
	 //                width: textarea.width(),
	 //                height: textarea.height(),
	 //                'class': textarea.attr('class')
	 //            }).insertBefore(textarea);
	 
	 //            textarea.css('visibility', 'hidden');
	 
	 //            var editor = ace.edit(editDiv[0]);
	 //            editor.renderer.setShowGutter(true);
	 //            editor.getSession().setValue(textarea.val());
	 //            //editor.getSession().setMode("ace/mode/java");
	 //            editor.getSession().setMode("ace/mode/" + mode);
	 //            //editor.setTheme("ace/theme/twilight");
	            
	 //            // copy back to textarea on form submit...
	 //            textarea.closest('form').submit(function () {
	 //                textarea.val(editor.getSession().getValue());
	 //            })
	 
	 //        });

	 //    });


	// var editor = ace.edit("editor");
 //    editor.setTheme("ace/theme/monokai");
 //    editor.getSession().setMode("ace/mode/javascript");

	}

}