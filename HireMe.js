// nav bar open functions

function menuToggle() {
  var menuToggle = document.getElementById("menuToggle");
  var mainMenu = document.getElementById("mainMenu");
  var overlay = document.querySelector(".menu-overlay");

  menuToggle.classList.toggle("active");
  mainMenu.classList.toggle("closed");
  overlay.classList.toggle("closed");
}

// function toggleBackground(){
// 	console.log('here');
// 	var overlay = document.querySelector('.overlay');
// 	var content = document.querySelector('.content');
// 	overlay.classList.toggle("hidden");
// 	content.classList.toggle("hidden");
// }

function toggleBackground() {
  var overlay = document.querySelector(".overlay");
  var content = document.querySelector("#content");
  var background = document.querySelector(".background");
  var backgroundButton = document.querySelector(".background-toggle");
  var backgroundX = document.querySelector(".background-toggle-x");

  window.scrollTo(0, 0);

  overlay.classList.toggle("hidden");
  content.classList.toggle("invisible");
  background.classList.toggle("front");
  backgroundButton.classList.toggle("hidden");
  backgroundX.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    // code in here
  // <!-- Initialize Swiper -->
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3.5,
    delay: 5000,

    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    // code in here

});
