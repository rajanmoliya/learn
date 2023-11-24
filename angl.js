"use strict";



var heading = Math.floor(Math.random(5) * 10) + 1;
// document.getElementById("donuts").innerHTML = heading;

$("#donuts").html(heading);


// document.getElementById("epbtn").addEventListener("click", function () {
//     document.getElementById("con").style.backgroundImage = "linear-gradient(to right, #ff9933 0%, #ffff00 100%)";
// })



document.addEventListener("keypress", function (e) {
    alert("key pressed - " + e.key);
})


//   jQuery ------

// $("h1").css("color", "purple");


$(".qr").hide();

$("#epbtn").on("click", function () {
    $(".qr").fadeToggle();
    // $("#con").css("backgroundImage", "linear-gradient(to left, #ff9933 0%, #ffff00 100%)")
});


$("#clpbtn").on("click", function () {
    $(".para").animate({ height: "toggle" })
});

