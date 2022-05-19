$(document).ready(function () {
    $('.prof-image').hover(function() {
        $(this).css("opacity", "50%");
    }, function (){
        $(this).css("opacity", "100%");
    });

    $('.searchButton').hover(function() {
        $(this).css("opacity", "50%");
    }, function (){
        $(this).css("opacity", "100%");
    });

   $('.navbar-buttons').hover(function() {
        $(this).css("background-color", "rgb(71, 179, 107)");
    }, function (){
        $(this).css("background-color", "");
    });
});