var User = function(firstName, lastName, degree, college, username, password, picture) {
               this.firstName = firstName;
               this.lastName  = lastName;
               this.degree    = degree;
               this.college   = college;
               this.username  = username;
               this.password  = password;
               this.picture   = picture; // save as string
          }


var Post = function(thumbnail, course, term, stars, owner, id) {
                this.thumbnail = thumbnail;
                this.course    = course;
                this.term      = term;
                this.stars     = stars;
                this.owner     = owner; // we can assign nalang the firstName, lastName, degree, and college of the post owner here
                this.id        = id; // kahit 6 digit id
           }

var Course = function(coursename, college) {
                this.coursename = coursename;
                this.college = college; // college a course belongs to
           }

var users = []; // save all users here
var posts = []; // all posts
var courses = []; // all courses

$(document).ready(function () {
     
     // generate 5 sample users
     var user1 = new User("John", "Doe", "BSCS", "College of Science", "JDoe", "user1", ".public/user1.jpg");
     var user2 = new User("Maria", "Christina", "BSCS", "College of Science", "Maria", "user2", ".public/empty-profile-pic.jpeg");
     var user3 = new User("Amy", "Rose", "BSCS", "College of Science", "Roseamy", "user3", ".public/empty-profile-pic.jpeg");
     var user4 = new User("Lance", "Mendoza", "BSCS", "College of Science", "LanDoza", "user4", ".public/empty-profile-pic.jpeg");
     var user5 = new User("Francis", "Brown", "BSCS", "College of Science", "Francy", "user5", ".public/empty-profile-pic.jpeg");
     users.push(user1, user2, user3, user4, user5);

     // generate 5 sample posts owned by user2 to user5
     var post1 = new Post("./public/placeholder-thumbnail.jpeg", "CCPROG", 2, 5, user2, 100001);
     var post2 = new Post("./public/placeholder-thumbnail.jpeg", "CCDSTRU", 1, 4, user3, 100002);
     var post3 = new Post("./public/placeholder-thumbnail.jpeg", "CCPROG2", 2, 3, user3, 100003);
     var post4 = new Post("./public/placeholder-thumbnail.jpeg", "CCPROG", 1, 4, user4, 100004);
     var post5 = new Post("./public/placeholder-thumbnail.jpeg", "CSINTSY", 3, 2, user5, 100005);
     posts.push(post1, post2, post3, post4, post5);

     // lets auto login user1 for now
     var currentUser = user1;
     login(currentUser);
     console.log(user1.username + " logged in.");
     
     let rating;

     // hide the login container
     $(".loginContainer").css("visibility", "hidden");

     /** When user presses a like button */
    /*
     $(selector).click(function (e) { 
          
     });
     */

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

     function login(user) {
          // reset right bar contents
          $(".lu-info-top").text("");
          $(".lu-info-bottom").text("");

          // set logged user contents
          $(".lu-info-top").text(user.firstName + " " + user.lastName);
          $(".lu-info-bottom").text(user.degree + " | " + user.college);

          // reset suggested courses
          $("#fr-list").html("");
          var frListElement = document.createElement("div");
          var frListText = document.createElement("p");
          $(frListElement).addClass("fr-list-element");
          $(frListElement).append(frListText);
          $(frListText).text("Course 1");

          $("#fr-list").append(frListElement);
     }

     function refreshContent() {

     }

     function displayContent() {

     }

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

     //Submit review checking for missing inputs and storing valid inputs into variables
     $(".reviewSubmit").click(function () {
          //Storing the inputs into vars
          var fNameInput = $("#profname").val();
          var lNameInput = $("#profLastName").val();
          var courseInput = $("#profcourse").val();
          var aTermInput = $("#acadterm").val();
          var descInput = $("#reviewbody").val();

          //Used for input checking
          var errState = 0;

          //Checking for missing inputs
          if(fNameInput == "")
          {
               if(errState == 0)
                    errState = 1;
               else
                    errState = 420;
          }
          if(lNameInput == "")
          {
               if(errState == 0)
                    errState = 2;
               else
                    errState = 420;
          }
          if(courseInput == "")
          {
               if(errState == 0)
                    errState = 3;
               else
                    errState = 420;
          }
          if(aTermInput == "")
          {
               if(errState == 0)
                    errState = 4;
               else
                    errState = 420;
          }
          if(rating == undefined)
          {
               if(errState == 0)
                    errState = 5;
               else
                    errState = 420;
          }
          if(descInput == "")
          {
               if(errState == 0)
                    errState = 6;
               else
                    errState = 420;
          }
          //Printing errState
          switch(errState)
          {
               case 1:
                    $("#reviewStatus").html("No first name inputted!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 2:
                    $("#reviewStatus").html("No last name inputted!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 3:
                    $("#reviewStatus").html("No course inputted!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 4:
                    $("#reviewStatus").html("No academic term inputted!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 5:
                    $("#reviewStatus").html("No rating selected!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 6:
                    $("#reviewStatus").html("No description inputted!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 420:
                    $("#reviewStatus").html("Multiple missing inputs!");
                    $("#reviewStatus").css("color", "red");
                    $("#reviewStatus").css("display", "block");
                    break;
               case 0:
                    $("#reviewStatus").html("Review successfully submitted!");
                    $("#reviewStatus").css("color", "green");
                    $("#reviewStatus").css("display", "block");
                    setTimeout(() => {$("#reviewStatus").css("display", "none");}, "1600");
                    break;
          }

          //Submit review
          if(errState == 0)
          {
               //Console output for now... Store data later
               console.log("First Name: " + fNameInput);
               console.log("Last Name: " + lNameInput);
               console.log("Course: " + courseInput);
               console.log("Academic Term: " + aTermInput);
               console.log("Rating: " + rating);
               console.log("Description: " + descInput);

               //Reset inputs
               $("#profname").val("");
               $("#profLastName").val("");
               $("#profcourse").val("");
               $("#acadterm").val("");
               $("input:radio[name='rate']:checked")[0].checked = false;
               rating = undefined;
               $('#reviewLegend').html("Rating");
               $("#reviewbody").val("");
          }

          //Reset errState
          var errState = 0;
     });
});
  
