let color1 = document.querySelector(".c1");
let color2 = document.querySelector(".c2");
let grandientCont = document.querySelector("#gradient-cont");
let btn = document.querySelector(".randomColorBtn");

function makeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function genrateGradient() {
  color1.value = "#" + makeColor();
  color2.value = "#" + makeColor();
  grandientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
}

function setGradient() {
  grandientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
}

document.body.addEventListener("load", genrateGradient());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", genrateGradient);
