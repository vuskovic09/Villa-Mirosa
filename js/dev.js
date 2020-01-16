$(document).ready(function(){
    $("#tab--1").click(function(){
        $('.second-section').css({
            'display': 'none'
        });
        $('.first-section').fadeToggle(1500);
    });
    $("#tab--2").click(function(){
        $('.first-section').css({
            'display': 'none'
        });
        $('.second-section').fadeToggle(1500);
    });
});