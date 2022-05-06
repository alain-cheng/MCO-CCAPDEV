var User = function(firstName, lastName, degree, college, username, password, picture) {
               this.firstName = firstName;
               this.lastName  = lastName;
               this.degree    = degree;
               this.college   = college;
               this.username  = username;
               this.password  = password;
               this.picture   = picture; // save as string
          }


var Post = function(thumbnail, course, term, stars, owner) {
                this.thumbnail = thumbnail;
                this.course    = course;
                this.term      = term;
                this.stars     = stars;
                this.owner     = owner; // we can assign nalang the firstName, lastName, degree, and college of the post owner here
           }

var users = [] // save all users here
var posts = [] // all posts

$(document).ready(function () {

     // generate 5 sample users
     var user1 = new User("John", "Doe", "BSCS", "College of Science", "JDoe", "user1", ".public/empty-profile-pic.jpeg");
     var user2 = new User("Maria", "Christina", "BSCS", "College of Science", "Maria", "user2", ".public/empty-profile-pic.jpeg");
     var user3 = new User("Amy", "Rose", "BSCS", "College of Science", "Roseamy", "user3", ".public/empty-profile-pic.jpeg");
     var user4 = new User("Lance", "Mendoza", "BSCS", "College of Science", "LanDoza", "user4", ".public/empty-profile-pic.jpeg");
     var user5 = new User("Francis", "Brown", "BSCS", "College of Science", "Francy", "user5", ".public/empty-profile-pic.jpeg");
     users.push(user1, user2, user3, user4, user5);

     // generate 5 sample posts owned by user2 to user5
     var post1 = new Post("./public/placeholder-thumbnail.jpeg", "CCPROG", 2, 5, user2);
     var post2 = new Post("./public/placeholder-thumbnail.jpeg", "CCDSTRU", 1, 4, user3);
     var post3 = new Post("./public/placeholder-thumbnail.jpeg", "CCPROG2", 2, 3, user3);
     var post4 = new Post("./public/placeholder-thumbnail.jpeg", "CCPROG", 1, 4, user4);
     var post5 = new Post("./public/placeholder-thumbnail.jpeg", "CSINTSY", 3, 2, user5);
     posts.push(post1, post2, post3, post4, post5);

     // debugging
     console.log("post1 course: " + post1.course);
     console.log("post1 is owned by: " + post1.owner.username);
     console.log("post5 is owned by: " + post5.owner.username);
     
     let rating;

     $(".loginContainer").css("visibility", "hidden");

     /* creates a pop up container when clicking login/register */
     $(".navbar-loginregister").click(function (e) {
          $(".loginContainer").css("visibility", "visible");
          $(".loginContainer").css("display", "block");
          $("body >*:not(.loginContainer)").css("filter", "blur(2.5px)");
          $("body >*:not(.loginContainer)").css("pointer-events", "none");
     });

     /* closes the login pop up */
     $("button.login-close").click(function (e) {
          $(".loginContainer").css("visibility", "hidden");
          $(".loginContainer").css("display", "none");
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

     $('.searchButton').hover(function() {
          $(this).css("opacity", "50%");
     }, function (){
          $(this).css("opacity", "100%");
     });

     $('.rate').click(function() {
          rating = $('input[name="rate"]:checked').val();
          console.log(rating);
          switch(rating) {
               case '5':
                    $('#reviewLegend').html("Excellent");
                    break;
               case '4':
                    $('#reviewLegend').html("Good");
                    break;
               case '3':
                    $('#reviewLegend').html("Average");
                    break;
               case '2':
                    $('#reviewLegend').html("Poor");
                    break;
               case '1':
                    $('#reviewLegend').html("DO NOT TAKE");
                    break;
          }

     });



});
  
