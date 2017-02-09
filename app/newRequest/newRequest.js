function backToLoginPage() {
    window.location = "../";
}

$.get("../app/include/nav-header.html", function (data) {
    $("#nav-header").replaceWith(data);
});

setTimeout(function () {
    $('ul li.active').removeClass('active');
    $('#newRCT').addClass('active');
}, 50);


