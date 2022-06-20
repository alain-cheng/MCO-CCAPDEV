$(document).ready(function () {
   $('.navbar-buttons').hover(function() {
        $(this).css("background-color", "rgb(71, 179, 107)");
    }, function (){
        $(this).css("background-color", "");
    });

    $('#course-table tr').hover(function() {
        $(this).css("background-color", "var(--gray2)");
    }, function (){
        $(this).css("background-color", "var(--white1)");
    });

    $('.searchButton').hover(function() {
        $(this).css("opacity", "50%");
    }, function (){
        $(this).css("opacity", "100%");
    });
});