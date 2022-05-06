var User = function(firstName, lastName, degree, college, username, password, img) {
               this.firstName = firstName;
               this.lastName  = lastName;
               this.degree    = degree;
               this.college   = college;
               this.username  = username;
               this.password  = password;
               this.img       = String(img);
          }


var Post = function(profFName, profLName, thumbnail, course, term, stars, owner, id) {
                this.profFName = profFName;
                this.profLName = profLName;
                this.thumbnail = String(thumbnail);
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

const mpHeaderLeft = "Review For:";

var users = []; // save all users here
var posts = []; // all posts
var courses = []; // all courses

var currentUser;

$(document).ready(function () {
     
     // generate 5 sample users
     var user1 = new User("John", "Doe", "BSCS", "College of Science", "JDoe", "user1", "./public/user1.jpg");
     var user2 = new User("Maria", "Christina", "BSCS", "College of Science", "Maria", "user2", "./public/empty-profile-pic.jpeg");
     var user3 = new User("Amy", "Rose", "BSCS", "College of Science", "Roseamy", "user3", "./public/empty-profile-pic.jpeg");
     var user4 = new User("Lance", "Mendoza", "BSCS", "College of Science", "LanDoza", "user4", "./public/empty-profile-pic.jpeg");
     var user5 = new User("Francis", "Brown", "BSCS", "College of Science", "Francy", "user5", "./public/empty-profile-pic.jpeg");
     users.push(user1, user2, user3, user4, user5);

     // generate 5 sample posts owned by user2 to user5
     var post1 = new Post("Porter", "Newman", "./public/placeholder-thumbnail.jpeg", "CCPROG", 2, 5, user2, 100001);
     var post2 = new Post("Henry", "Spencer", "./public/placeholder-thumbnail.jpeg", "CCDSTRU", 1, 4, user3, 100002);
     var post3 = new Post("Farah", "Boeing", "./public/placeholder-thumbnail.jpeg", "CCPROG2", 2, 3, user3, 100003);
     var post4 = new Post("Jack", "Frost", "./public/placeholder-thumbnail.jpeg", "CCPROG", 1, 4, user4, 100004);
     var post5 = new Post("Whitney", "Ford", "./public/placeholder-thumbnail.jpeg", "CSINTSY", 3, 2, user5, 100005);
     posts.push(post1, post2, post3, post4, post5);

     // lets auto login user1 for now
     login(user1);
     // and display all posts
     for(var i = 0; i < posts.length; i++)
          displayPost(posts[i]);

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
          // set profile picture
          $("#logged-user").attr("src", user.img);

          refreshContent(user);
          currentUser = user;
     }

     function refreshContent(user) {
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

          // reset followed course contents
          $("#coursepostContainer").html("");
     }

     // Will display post in the Followed Courses box (singular)
     function displayPost(post) {
          // Create post elements
          var mainpost = document.createElement("div");
               var mpHeader = document.createElement("div");
                    var mpHLeft = document.createElement("div");
                    var mpHMid = document.createElement("div");
                         var mpHMTop = document.createElement("div");
                         var mpHMBot = document.createElement("div");
               var mpReview = document.createElement("div");
                    var mpRStars = document.createElement("div");
                    var mpRDesc = document.createElement("div");
               var mpThumbnail = document.createElement("div");
                    var mpTImg = document.createElement("img");
               var mpSubHeader = document.createElement("div");
                    var mpSHImg = document.createElement("img");
                    var mpSHLeft = document.createElement("div");
                         var mpSHLTop = document.createElement("div");
                         var mpSHLBot = document.createElement("div");
                    var mpLike = document.createElement("div");

          // Add classes
          $(mainpost).addClass("mainpost");
          $(mpHeader).addClass("mp-header");
          $(mpHLeft).addClass("mp-header-left");
          $(mpHMid).addClass("mp-header-middle");
          $(mpHMTop).addClass("mp-header-middle-top");
          $(mpHMBot).addClass("mp-header-middle-bottom");
          $(mpReview).addClass("mp-review");
          $(mpRStars).addClass("mp-review-stars");
          $(mpRDesc).addClass("mp-rev-description");
          $(mpThumbnail).addClass("mp-thumbnailContainer");
          $(mpTImg).addClass("mp-thumbnail");
          $(mpSubHeader).addClass("mp-subheader");
          $(mpSHImg).addClass("mp-subheader-pic");
          $(mpSHLeft).addClass("mp-subheader-left");
          $(mpSHLTop).addClass("mp-subheader-left-top");
          $(mpSHLBot).addClass("mp-subheader-left-bottom");
          $(mpLike).addClass("mp-subheader-likebutton");

          // Append
          $(mainpost).append(mpHeader);
          $(mpHeader).append(mpHLeft);
          $(mpHeader).append(mpHMid);
          $(mpHMid).append(mpHMTop);
          $(mpHMid).append(mpHMBot);
          $(mainpost).append(mpReview);
          $(mpReview).append(mpRStars);
          $(mpReview).append(mpRDesc);
          $(mainpost).append(mpThumbnail);
          $(mpThumbnail).append(mpTImg);
          $(mainpost).append(mpSubHeader);
          $(mpSubHeader).append(mpSHImg);
          $(mpSubHeader).append(mpSHLeft);
          $(mpSHLeft).append(mpSHLTop);
          $(mpSHLeft).append(mpSHLBot);
          $(mpSubHeader).append(mpLike);

          // Set Post Content
          $(mpHLeft).text(mpHeaderLeft);
          $(mpHMTop).text(post.profFName + " " + post.profLName);
          $(mpHMBot).text(post.course + " | Term " + post.term);
          $(mpRDesc).text(getStarDesc(post.stars));
          $(mpTImg).attr("src", post.thumbnail);
          $(mpSHImg).attr("src", post.owner.img);
          $(mpSHLTop).text(post.owner.firstName + " " + post.owner.lastName);
          $(mpSHLBot).text(post.owner.degree + " | " + post.owner.college);

          // place created elements to main post parent container
          $("#coursepostContainer").append(mainpost);
     }

     // Translates star ratings and returns a String
     function getStarDesc(rate) {
          switch(rate) {
               case 1: return "DO NOT TAKE";
               case 2: return "Poor";
               case 3: return "Average";
               case 4: return "Good";
               case 5: return "Excellent";
               default: return "Error";
          }
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
});
  
