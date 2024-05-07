let btn1 = document.getElementById("left");
let btn2 = document.getElementById("right");
let cop = document.querySelector("#copy");

let right = document.getElementById("rightArrow");
let left = document.getElementById("leftArrow");
let up = document.getElementById("upArrow");
let down = document.getElementById("downArrow");

// !   function  section start
let hexNumber = "0123456789abcdef";
let rgb1 = "rgb(92, 145, 229)";
let rgb2 = "rgb(152, 63, 198)";

const color = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexNumber[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};

const leftNumber = () => {
  rgb1 = color();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  document.querySelector("#left").innerText = rgb1;
  document.querySelector(
    "#copy"
  ).innerText = ` background-image: linear-gradient(to right,${rgb1},${rgb2});`;
};

const rightNumber = () => {
  rgb2 = color();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  document.querySelector("#right").innerText = rgb2;
  document.querySelector(
    "#copy"
  ).innerText = ` background-image: linear-gradient(to right,${rgb1},${rgb2});`;
};

const btnChange = () => {
  document.getElementById("left").style.backgroundColor = rgb1;
};
const btn2change = () => {
  document.getElementById("right").style.backgroundColor = rgb2;
};

const directionRight = () => {
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  document.querySelector(
    "#copy"
  ).innerText = ` background-image: linear-gradient(to right,${rgb1},${rgb2});`;
};

const directionLeft = () => {
  document.body.style.backgroundImage = `linear-gradient(to left,${rgb1}, ${rgb2})`;
  document.querySelector(
    "#copy"
  ).innerText = ` background-image: linear-gradient(to left,${rgb1},${rgb2});`;
};

const directionUp = () => {
  document.body.style.backgroundImage = `linear-gradient(to top,${rgb1}, ${rgb2})`;
  document.querySelector(
    "#copy"
  ).innerText = ` background-image: linear-gradient(to top,${rgb1},${rgb2});`;
};

const directionDown = () => {
  document.body.style.backgroundImage = `linear-gradient(to bottom,${rgb1}, ${rgb2})`;
  document.querySelector(
    "#copy"
  ).innerText = ` background-image: linear-gradient(to bottom,${rgb1},${rgb2});`;
};
// !end of function section

btn1.addEventListener("click", () => {
  leftNumber();
});

btn2.addEventListener("click", () => {
  rightNumber();
});

cop.addEventListener("click", () => {
  navigator.clipboard.writeText(cop.innerText);
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Text copied",
    showConfirmButton: false,
    timer: 1500,
  });
});

right.addEventListener("click", () => {
  directionRight();
});

left.addEventListener("click", () => {
  directionLeft();
});

down.addEventListener("click", () => {
  directionDown();
});

up.addEventListener("click", () => {
  directionUp();
});
