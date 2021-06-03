// THIS SCRIPT UPDATE THE IMAGE ON MAIN DISPLAY. UPDATE IMG1 AT STEPS/2, AND IMAGE2 AT INC = 0.

const IMGLIST = [
  "DSC00837.JPG",
  "DSC00841.JPG",
  "DSC00848.jpg",
  "DSC00881.jpg",
  "DSC00892.jpg",
  "DSC00983.jpg",
  "DSC01029.jpg",
];

let n = 1;
function testing(inc) {
  n === IMGLIST.length ? (n = 0) : n;
  if (inc === 0) {
    // console.log(`inc = ${inc}, change imgTwo`);
    imgTwo.src = "pictures/" + IMGLIST[n];
  } else if (inc === steps / 2) {
    // console.log(`inc = ${inc}, change imgOne`);
    imgOne.src = "pictures/" + IMGLIST[n];
  }
  n++;
}
