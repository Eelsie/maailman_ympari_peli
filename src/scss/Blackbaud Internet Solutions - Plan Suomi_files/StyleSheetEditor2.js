/*jslint bitwise: false, browser: false, eqeqeq: false, onevar: false, passfail: false, undef: false, white: false, laxbreak: true */

var stylesTree;

function SSE_TreeInit(treeId) {
    // get a ref to the tree for later
    stylesTree = igtree_getTreeById(treeId);
 }


function class_GetSeletedRule(){
    //v6. cssClassName is now in node.tag

	if ( (!stylesTree) || (!stylesTree.getSelectedNode()) ){
		//alert('err 1: No Treeview or no current node');
		return;
	}

	var node = stylesTree.getSelectedNode();

	//make sure we have a tree node selected 
	if (node) {

	    var hiddenSelectedClass = document.getElementById(hdnSelectedClass);

	    var selectedClassName = node.getTag();
        
        if (selectedClassName) {

            hiddenSelectedClass.value = selectedClassName;

            var btnRefresh = document.getElementById(btnRefreshDisplay);

            btnRefresh.click();
        }
    }
}

function SSE_ClassSelect(treeId, nodeId, button) {
    class_GetSeletedRule();
}

// Handles resizing of Custom CSS text area height. Neccessary because position
// absolute top, bottom doesn't seem to work properly on text areas.

(function() {
    var $$ = $;
    function resizeStyleSheetEditor() {

        // ie hack to fix disappearing content. Continually updates the height of the page element to fill all of the window
        var h = $$("html").attr("offsetHeight");
        $$(".page").css("height", h + "px");

        // resize custom textarea
        var wrapper = $$(".StyleSheetEditorContentContainer");
        var editor = $$(".StyleSheetEditorCustom textarea");
        var offset = editor.offset().top - wrapper.offset().top;
        var margin = 10;
        h = (wrapper.height() - offset - margin);
        editor.height(h);
    }

    $$(function() {
        resizeStyleSheetEditor();
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(resizeStyleSheetEditor);
        $$(window).bind('resize', resizeStyleSheetEditor);
    });
})();
