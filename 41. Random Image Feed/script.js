const container = document.querySelector(".content");
const baseURL = "https://picsum.photos/";
const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${baseURL}${randomNumber()}/${randomNumber()}`;
  container.appendChild(img);
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
