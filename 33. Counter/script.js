let countEl = document.getElementById("count");
let save = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  let countStr = count + ", ";
  save.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
