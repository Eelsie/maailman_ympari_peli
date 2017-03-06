/*globals $addHandler */

var adminResizer = {};

adminResizer.load = function ()
{
    /*adminResizer.divPage = getElement("divPage");
    adminResizer.pagecntnt_divContentPane = getElement("pagecntnt_divContentPane");
    if (adminResizer.divPage && adminResizer.pagecntnt_divContentPane)
    {
        adminResizer.resize = function ()
        {
            adminResizer.width = document.documentElement.clientWidth;
            if (adminResizer.width < adminResizerVars.minWidth)
            {
                adminResizer.width = adminResizerVars.minWidth;
            }
            // A maxWidth of zero implies "No maximum"
            if (adminResizerVars.maxWidth && adminResizer.width > adminResizerVars.maxWidth)
            {
                adminResizer.width = adminResizerVars.maxWidth;
            }
            adminResizer.pagecntnt_divContentPane.style.width = adminResizer.width - 45 + "px";
        };
    
        adminResizer.divPage.style.width = "100%";
        adminResizer.resize();
        $addHandler(window, "resize", adminResizer.resize);
    }*/
};

$addHandler(window, "load", adminResizer.load);