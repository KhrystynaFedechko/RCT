/**
 * Created by User on 09.02.2017.
 */
function backToLoginPage() {
    window.location = "../";
}

$.get("../app/include/header.html", function (data) {
    $("#header").replaceWith(data);
});

$.get("../app/include/navigation.html", function (data) {
    $("#navigation").replaceWith(data);
});

$.get("../app/include/footer.html", function (data) {
    $("#footer").replaceWith(data);
});

$(function () {
    $(document).ready(function (e) {
            e.preventDefault();
            $.ajax({
                url: "http://localhost:8080/rma-tool/api/user/get-by-name",
                method: "GET",
                data: {
                    userName: dboucher
                },
                dataType: 'json'
            })
                .done (function () {
                    $("#loggedName").append("userName");
                })
})
})

