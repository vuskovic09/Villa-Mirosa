$(document).ready(function(){
    $('.hidden').hide();

    //NAV SCROLL
    
    //NAV SCROLL-END

    //PRICES
    $("#tab--1").click(function(){
        $('.second-section').fadeOut(1000);
        $('.first-section').fadeIn(1000);
    });
    $("#tab--2").click(function(){
        $('.first-section').fadeOut(1000);
        $('.second-section').fadeIn(1000);
    });
    //PRICES-END
});