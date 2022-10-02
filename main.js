const circle = document.getElementById("circle");
const circlStyle = circle.style;

document.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    circlStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
    circlStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
  });
});
