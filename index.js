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

     $('.navbar-buttons').hover(function() {
          $(this).css("opacity", "50%");
     }, function (){
          $(this).css("opacity", "100%");
     });

     $('.navbar-loginregister').hover(function() {
          $(this).css("opacity", "50%");
     }, function (){
          $(this).css("opacity", "100%");
     });

     $('.reviewSubmit').hover(function() {
          $(this).css("opacity", "50%");
     }, function (){
          $(this).css("opacity", "100%");
     });
          
     
});
  
