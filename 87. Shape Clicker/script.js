const game = { timer: 0, start: null };

// Create Message ELement
const message = document.createElement("div");
message.classList.add("message");
message.textContent = "Press to Start";
document.body.prepend(message);

// Create a Box
const box = document.createElement("div");
box.classList.add("box");

box.addEventListener("click", () => {
  box.textContent = "";
  box.style.display = "none";
  game.timer = setTimeout(addBox, randomNumbers(3000));
  if (!game.start) {
    message.textContent = "Watch for element and click it";
  } else {
    const current = new Date().getTime();
    const duration = (current - game.start) / 1000;
    message.textContent = `It took ${duration} seconds to click`;
  }
});

const output = document.querySelector(".output");
output.append(box);

function randomNumbers(max) {
  return Math.floor(Math.random() * max);
}

function addBox() {
  game.start = new Date().getTime();
  const container = output.getBoundingClientRect();
  const dim = [randomNumbers(50) + 20, randomNumbers(50) + 20];
  box.style.display = "block";
  box.style.width = `${dim[0]}px`;
  box.style.height = `${dim[1]}px`;
  box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
  box.style.left = randomNumbers(container.width - dim[0]) + "px";
  box.style.top = randomNumbers(container.height - dim[1]) + "px";
  box.style.borderRadius = randomNumbers(50) + "%";
}
