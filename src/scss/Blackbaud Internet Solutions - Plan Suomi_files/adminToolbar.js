function adminToolbarButtonHandler() {

    $("a.BBAdminButtonLnk").live("mouseover", function () {
        $(this).find("span.BBAdminButtonHover").each(function (i) {
            if ($(this).css("display") !== "block") {
                $(this).css("display", "block");
            }
        });
    });
    $("a.BBAdminButtonLnk").live("mouseout", function () {
        $(this).find("span.BBAdminButtonHover").each(function (i) {
            if ($(this).css("display") !== "none") {
                $(this).css("display", "none");
            }
        });
    });
}

$(document).ready(function () {
    adminToolbarButtonHandler();
});