/* THIS SCRIPT MANAGES TRANSITION BETWEEN IMAGES ON MAIN img-frame */

const imgOne = document.querySelector("#img-one");
const imgTwo = document.querySelector("#img-two");

const steps = 300;   // how many steps are in cycle to change opacity.
const interval = 10;  // time interval to change opacity.
const imgDelay = 6000 // how long should each pic display with opacity = 1.
let inc = 0;

imgOne.style.opacity = 1;
imgTwo.style.opacity = 0;

// Function that change the opacity both the images:
const changeOpacity = function() {
  // increment radians from 0 to PI
  let radians = inc/steps * Math.PI;
  imgOne.style.opacity = Math.abs(Math.cos(radians));
  imgTwo.style.opacity = Math.abs(Math.sin(radians));
  inc++;
  setTimeout(timer, interval);
};

// Function that triggers 'changeOpacity' or delay when opacity = 1
const timer = function() {
  // if inc is = 'steps' then reset the value to 0 (same abs cos and sin)
  (inc == steps) ? inc = 0 : inc;
  // if radians is 1/2 PI or PI, wait sfor 'imgDelay' ms to display picture with full opacity.
  if (inc === 0 || inc === steps/2) {
    testing(inc);
    setTimeout(changeOpacity, imgDelay);
  } else {
    changeOpacity();
  }
};

timer();
