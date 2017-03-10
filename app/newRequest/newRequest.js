
setTimeout(function () {
    $('ul li.active').removeClass('active');
    $('#newRCT').addClass('active');
}, 50);

function openAdditionalForm() {
    if ( $("#totalValueOfReturn").val() >= 25000 ) {
        $.get("../../app/newRequest/additionalForm.html", function (data) {
            $("#additionalForm").replaceWith(data);
        })
    } else if ( $("#totalValueOfReturn").val() < 25000 ) {
        $("#additionalForm").hide();
    }
}

$(".btn_upload").click(function(e){
    e.preventDefault();
    $(".fileupload").trigger('click');
});

$("#saveBtn").click(function () {
    var rationals = [ "Planogram Change", "Catalog Change", "Overstock", "Product Recall", "Other explain"];
    var returnRationalBtnHtml = "";
    var i;
    for ( i = 0; i < rationals.length; i++ ) {
        returnRationalBtnHtml += rationals[i] + "<br>";
    }
    alert(returnRationalBtnHtml);
})

