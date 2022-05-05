var Post = function(thumbnail, firstName, lastName, course, term, degree, college) {
                this.thumbnail = thumbnail;
                this.firstName = firstName;
                this.lastName  = lastName;
                this.course    = course;
                this.term      = term;
                this.degree    = degree;
                this.college   = college;
           }

$(document).ready(function () {

     $(".loginContainer").css("visibility", "hidden");

     /* creates a pop up container when clicking login/register */
     $(".navbar-loginregister").click(function (e) {
          $(".loginContainer").css("visibility", "visible");
          $("body >*:not(.loginContainer)").css("filter", "blur(2.5px)");
          $("body >*:not(.loginContainer)").css("pointer-events", "none");
     });

     /* closes the login pop up */
     $("button.login-close").click(function (e) {
          $(".loginContainer").css("visibility", "hidden");
          $("body >*:not(.loginContainer)").css("filter", "none");
          $("body >*:not(.loginContainer)").css("pointer-events", "all");
     });

     $('.navbar-buttons').hover(function() {
          $(this).css("background-color", "rgb(71, 179, 107)");
     }, function (){
          $(this).css("background-color", "");
     });

     $('.navbar-loginregister').hover(function() {
          $(this).css("background-color", "rgb(71, 179, 107)");
     }, function (){
          $(this).css("background-color", "");
     });

     $('.reviewSubmit').hover(function() {
          $(this).css("opacity", "50%");
     }, function (){
          $(this).css("opacity", "100%");
     });
});
  
