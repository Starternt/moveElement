
$(".button").click(function () {
    var content;
    content = $(".but .button:first").detach();
    content.appendTo(".but");
});