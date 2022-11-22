//Mouse as a circle
const circle = document.getElementById("circle");
const circlStyle = circle.style;

document.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    circlStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
    circlStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
  });
});

//?
const navlink = document.querySelectorAll(".nav_link");
function linkAct() {
  navlink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

navlink.forEach((n) => n.addEventListener("click", linkAct));

//Left-Menu
TweenMax.from(".left_menu", 1, {
  delay: 2.5,
  opacity: 0,
  x: -50,
  ease: Expo.easeInOut,
});

//Nav - Links
TweenMax.from(
  ".nav_links_content ul li",
  1,
  {
    delay: 3,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut,
  },
  0.08
);

// Löschen - Search Icon
TweenMax.from(".search_icon", 1, {
  delay: 3.5,
  opacity: 0,
  x: 100,
  ease: Expo.easeInOut,
});

//Large Text
TweenMax.from(".larger_text_content", 1, {
  delay: 4,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut,
});

//Description Content
TweenMax.from(".desc_content", 1, {
  delay: 4.5,
  opacity: 0,
  x: 100,
  ease: Expo.easeInOut,
});

//Overlay
TweenMax.to(".overlay", 2, {
  delay: 1,
  top: "-100%",
  x: 100,
  ease: Expo.easeInOut,
});

//Change Background Color, Logo Color & Social Media Icons Color
//Variable Body
let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#ffebd6";

//Variable Logo
let logo = document.getElementsByClassName("logo")[0];
logo.style.backgroundColor = "#adb394";

//Variable Icons
let icon = document.getElementsByClassName("icon")[0];
icon.style.color = "#adb394";

//Function to change Background by scrolling
function changebackground() {
  let scroll1 = window.pageYOffset;
  if (scroll1 < 500) {
    // beige
    body.style.backgroundColor = "#ffebd6";
  } else if (scroll1 >= 500 && scroll1 < 1500) {
    // light
    body.style.backgroundColor = "#f4f0eb";
  } else if (scroll1 >= 1500 && scroll1 < 2000) {
    // beige
    body.style.backgroundColor = "#ffebd6";
  } else {
    // beige
    body.style.backgroundColor = "#ffebd6";
  }
}

//Function to change Logo-Background by scrolling
function changelogo() {
  let scroll2 = window.pageYOffset;
  if (scroll2 < 500) {
    // green
    logo.style.backgroundColor = "#adb394";
  } else if (scroll2 >= 500 && scroll2 < 1100) {
    // yellow
    logo.style.backgroundColor = "#EDC565";
  } else if (scroll2 >= 1100 && scroll2 < 2000) {
    // red
    logo.style.backgroundColor = "#A34436";
  } else {
    // red
    logo.style.backgroundColor = "#A34436";
  }
}

//Function to change Icon-Color by scrolling
function changeicon() {
  let scroll3 = window.pageYOffset;
  if (scroll3 < 500) {
    // green
    icon.style.color = "#adb394";
  } else if (scroll3 >= 500 && scroll3 < 1100) {
    // yellow
    icon.style.color = "#EDC565";
  } else if (scroll3 >= 1100 && scroll3 < 2000) {
    // red
    icon.style.color = "#A34436";
  } else {
    // red
    icon.style.color = "#A34436";
  }
}

// Trigger this function every time the user scrolls
window.onscroll = function (event) {
  changebackground();
  changelogo();
  changeicon();
};
