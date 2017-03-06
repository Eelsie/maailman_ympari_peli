/*jslint bitwise: false, browser: false, eqeqeq: false, onevar: false, passfail: false, undef: false, white: false, laxbreak: true */

//=============================================================================
//
//  DialogHost.js
//		This file contains JavaScript functions to handle the client-side
//		functions of the dialogHost user control for wrapping user controls 
//		as modal dialogs
//
//=============================================================================
function openerModalDialogManagerIsUndefined() {
    var isUndefined = true;
    //Try/Catch for permission denied error on ModalDialogManager property across different domains
    try {
        if (typeof window.opener !== 'undefined' && typeof window.opener.ModalDialogManager !== 'undefined' && !window.opener.closed) {
            isUndefined = false;
        }
    }
    catch (e) {}

    return isUndefined;
}

function doLoad(bPostback) {
    try {
        //mca - 12/2007 added this try/catch to support nonmodal dialog for 
        //stylesheet editor - which can now (5.5) stay open while applying changes to 
        //css and then updating main browser window to see changes appied to site.
        //keep an eye on this code - if it does fail the try - the dialog args will not get 
        //passed in (this should not happen to modal dialogs since the opener must exist)
        //for nonmodals (css editor being the only one currently) the main window may change
        //or disappear causing opener to become null and/or causing Permission Denied errors in IE
        //stylesheet editor does not need dialog args so its ok - extending other dialogs into nonModal 
        //world may cause issues we'll have to code for (like closing the nonmodal if opener closes) - so heads up.
        if (!openerModalDialogManagerIsUndefined()) {
            window.dialogArguments = window.opener.ModalDialogManager.childsDialogArguments;
        } 
    }
    catch(e) {}

    if (window.OnDialogLoad) {
        window.OnDialogLoad(bPostback);
    }

}

var dialoHostWindowReturnValueSet = false;
function doOK() {

	var retObj = {};
	retObj.OK = true;

	if (window.OnDialogOK) {
	    retObj = window.OnDialogOK(retObj);
	}

    if (retObj !== undefined && !openerModalDialogManagerIsUndefined())
    {
        retObj.dialogArguments = window.opener.ModalDialogManager.childsDialogArguments;
    }
    dialoHostWindowReturnValueSet = true;

    if (!openerModalDialogManagerIsUndefined()) {
        window.opener.ModalDialogManager.onChildClosed(retObj);
    }
    window.close();
}

function doClose(cmd, inBBECModalWin) {

    //If we've already set the window's return value (such as in doOK above)
    //then lets not overwrite it
    if (dialoHostWindowReturnValueSet !== true) {
        var retObj = {};
        retObj.CMD = cmd;

        //JPB 02.25.2008 - Allow the window to respond to the 'save' event
        if (cmd == "SAVE" && window.OnDialogSave) {
            retObj = window.OnDialogSave(retObj);
        }

        if (!openerModalDialogManagerIsUndefined()) {
            retObj.dialogArguments = window.opener.ModalDialogManager.childsDialogArguments;
        }

    }
	if (inBBECModalWin) {
	    window.external.onModalClosed();
	} 
    else {
        if (!openerModalDialogManagerIsUndefined()) {
            window.opener.ModalDialogManager.onChildClosed(retObj);
        }
        window.close();
    }
}

function viewDialogSource(){
	var w=window.open();
	var s=w.document.createTextNode(document.documentElement.outerHTML);
	var p=w.document.createElement("pre");
	p.appendChild(s);
	w.document.body.appendChild(p);
	w.document.title = document.location.href;			
}


function myOnKeyDown(e){

    var evt = e || window.event;
    var src = evt.target || evt.srcElement;

    if (!$(src).is("textarea")) {
        if (evt && evt.keyCode === 13) {
            evt.preventDefault(); //prevent enter key from submitting form but let the event capture/bubble
        }
    }
}

document.onkeydown = myOnKeyDown;
