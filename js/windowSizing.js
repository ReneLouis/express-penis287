/* DETERMINE THE SIZE OF WINDOW AND RESIZE IMAGE CONTAINER */
const mainContainer = document.querySelector('figure.image-frame');

let width;
let height;

function windowSizing() {
  width = window.innerWidth;
  height = window.innerHeight;
  mainContainer.width = width;
  mainContainer.height = height;
}
windowSizing();
window.addEventListener("resize", windowSizing);
