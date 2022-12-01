//MOUNTAIN PARALLAX FUNCTION========== HEADER
// nav bar open functions

function menuToggle() {
  var menuToggle = document.getElementById("menuToggle");
  var mainMenu = document.getElementById("mainMenu");
  var overlay = document.querySelector(".menu-overlay");

  menuToggle.classList.toggle("active");
  mainMenu.classList.toggle("closed");
  overlay.classList.toggle("closed");
}

//PARALLAX FUNCTION
document.addEventListener("scroll", () => {
  var top = window.pageYOffset;
  var one = document.querySelector(".one");
  var two = document.querySelector(".two");
  var three = document.querySelector(".three");
  var four = document.querySelector(".four");
  var five = document.querySelector(".five");

  if (one) {
    one.style.bottom = -(top * 0.15) + "px";
  }
  if (two) {
    two.style.bottom = -(top * 0.2) + "px";
  }
  if (three) {
    three.style.bottom = -(top * 0.3) + "px";
  }
  if (four) {
    four.style.bottom = -(top * 0.4) + "px";
  }
  if (five) {
    five.style.bottom = -(top * 0.5) + "px";
  }
});

// // background height setter
// function setBackgroundHeight(){
// 	var content = document.getElementById('content');
// 	var background = document.getElementById('background');
// 	console.log(background);
// 	console.log(content);
// 	var contentHeight = content.clientHeight;

// 	background.setAttribute('style', 'max-height: ' + contentHeight + 'px');

// }

// window.addEventListener('resize', setBackgroundHeight());

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    var mountainQuote = document.getElementById("mountain-quote");
    if (mountainQuote) {
      mountainQuote.classList.add("zoom");
    }
  }, 200);

  var modals = document.getElementsByClassName("modal");
  if (modals) {
    var windowWidth = window.innerWidth;
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.maxWidth = windowWidth + "px";
    }
  }

  var mountains = document.querySelector(".mountains");
  var mountainWrapper = document.querySelector(".mountain-wrapper");

  var mountainQuote = document.querySelector(".mountain-quote");
  var siteTitle = document.querySelector(".site-title");
  var arrow = document.querySelector(".arrow");
  var scrollDown = document.querySelector(".scroll_down");
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let ratio = screenWidth / screenHeight;
  if (ratio < 0.8 && screenWidth > 576) {
    if (mountains) {
      mountains.style.height = "70vh";
      mountains.style.top = "0";
    }
    if (mountainWrapper) {
      mountainWrapper.style.height = "70vh";
    }
  }
  if (ratio < 0.7 && screenWidth > 576) {
    if (mountains) {
      mountains.style.height = "60vh";
      mountains.style.top = "0";
    }
    if (mountainWrapper && screenWidth > 576) {
      mountainWrapper.style.height = "60vh";
    }
  }
  if (ratio < 0.5 && screenWidth < 576) {
    if (mountains) {
      mountains.style.height = "47vh";
      mountains.style.top = "0";
    }
    // if (mountainWrapper && screenWidth < 576) {
    //   mountainWrapper.style.height = '47vh';
    //   mountainWrapper.style.minHeight = '0';
    //   siteTitle.style.top = '38%';
    //   arrow.style.display = 'none';
    //   scrollDown.style.display = 'none';
    //   // mountainQuote.style.top = '47%';
    // }
  }
});

function navigateToYSSMoreInfo2() {
  const url = "https://www.artistsstandingstrongtogether.net/yssc-winter-break-2021";
  window.open(url, "_blank");
}

function openYSSPdf() {
  const url = "./images/ysst-flyer-3.pdf";
  window.open(url, "_blank");
}
function navigateToGetTickets() {
  const url =
    "https://us02web.zoom.us/j/84817669400?pwd=VElZOWNUWGdLTytJeWY2UXVpUXZ5QT09";
  window.open(url, "_blank");
}
function nagivateToRegistrationLink() {
  const url =
    "https://us02web.zoom.us/meeting/register/tZAuc-CgqjouH9bomb9X7RcylrDsPj_Z_cxe";
  window.open(url, "_blank");
}
function navigateToCampSignUp() {
  const campURL =
    "https://www.artistsstandingstrongtogether.net/yssc-summer2021";
  window.open(campURL, "_blank");
}
function navigateToRadioClip() {
  const radioClip =
    "https://www.mixcloud.com/EastLondonRadio/talking-stories-48/";
  window.open(radioClip, "_blank");
}

function navigateToAfterDinnerStories() {
  const link = "https://www.artidea.org/blog/2021/12/4706";
  window.open(link, "_blank");
}

function linkToTickets(){
  const link = 'https://www.bettersaidthandone.com/2022/04/01/spectacle-stories/';
  window.open(link, "_blank");
}

function navigateToYSST() {
  const link = "https://www.artistsstandingstrongtogether.net/yssc-winter-break-2021";
  window.open(link, "_blank");
}
function navigateToBadyHouse() {
  const link = "";
  window.open(link, "_blank");
}
function navigateToStorySpacePage() {
  const link = "./StorySpace.html";
  window.open(link, "_blank");
}

function nativgateToCampRegistrationPage(){
  const link = 'https://www.artistsstandingstrongtogether.net/yssc-summer-2022'
  window.open(link, '_blank');
}