$(document).ready(function(){
    $("#tab--1").click(function(){
        $('.second-section').fadeOut(1500);
        $('.first-section').fadeIn(1500);
    });
    $("#tab--2").click(function(){
        $('.first-section').fadeOut(1500);
        $('.second-section').fadeIn(1500);
        $('.second-section').css({'display': 'flex'});
    });
});