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
