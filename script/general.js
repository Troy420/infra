$(document).ready(function () {

    $(".three-panel").click(function(){
        if ($("#dropdown").hasClass("is-open")){
            $("#dropdown").removeClass("is-open").addClass("is-close")
        }else{
            $("#dropdown").removeClass("is-close").addClass("is-open")
        }
    });

});
