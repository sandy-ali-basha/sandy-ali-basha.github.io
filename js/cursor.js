// CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$(".link ,.sotialLink").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("html").on("click", function() {
  cursor.addClass("scale");
  follower.addClass("scale");
  setTimeout(function(){
      cursor.removeClass("scale");
      follower.removeClass("scale");
 }, 400);

});
$(".link, .sotialLink").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$(".heyHeader").on("mouseenter", function() {
    cursor.addClass("heyIcon");
});
$(".heyHeader").on("mouseleave", function() {
    cursor.removeClass("heyIcon");
});
//li
$(".menu").on("mouseenter", function() {
    follower.addClass("menu-active");
  });
$(".menu").on("mouseleave", function() {  
    follower.removeClass("menu-active");
    
});
//my skills icon
$(".skills__title").on("mouseenter", function() {
    follower.addClass("mySkillsIcon");
  });
$(".skills__title").on("mouseleave", function() {  
    follower.removeClass("mySkillsIcon"); 
});
//experince
$(".experince h1").on("mouseenter", function() {
    follower.addClass("experIcon");
    follower.addClass("border");
  });
$(".experince h1").on("mouseleave", function() {  
    follower.removeClass("experIcon"); 
    follower.removeClass("border");
});
//git in touch
$(".getInTouch_title").on("mouseenter", function() {
    follower.addClass("emailIcon");
    follower.addClass("border");
  });
$(".getInTouch_title").on("mouseleave", function() {  
    follower.removeClass("emailIcon"); 
    follower.removeClass("border");
});

$("#toggle--daynight").click(function(){
    $("body").toggleClass("darkMode")
});