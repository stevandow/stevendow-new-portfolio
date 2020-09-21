// Tooltip Script 
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// ScrollTop Script
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 20)
        {
            $("#btn").fadeIn();
        }
        else
        {
            $("#btn").fadeOut();
        }
    });
});