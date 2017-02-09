function backToLoginPage() {
    window.location = "../../";
}

$.get("../app/include/nav-header.html", function (data) {
    $("#nav-header").replaceWith(data);
});



$('ul li a').click(function () {
    $('ul li.active').removeClass('active');
    $(this).closest('li').addClass('active');
});
