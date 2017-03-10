/**
 * Created by User on 24.12.2016.
 */
$(function () {
    $('#btnLoginSubmit').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "api/user/get-spring-user",
            method: "GET",
            data: {
                userName: $('#loginName').val(),
                password: $('#pwd').val()
            },
            dataType: 'json'
        })
            .done(function (response) {
                if ( response.userRole == "ROLE_REQUESTOR" ) {
                    window.location = "api/home/requestor";
                }
            })
            .fail(function (response) {
                // alert(response.responseText);
                $('#invalid').html('<p>Invalid user name or password.</p>');
            })
    })
});