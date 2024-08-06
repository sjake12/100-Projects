let body = document.body;
let theme = document.querySelector(".theme");
const followButtons = document.querySelectorAll(".follow-button");

theme.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    theme.innerText = "Light";
  } else {
    body.className = "light-theme";
    theme.innerText = "Dark";
  }
}

followButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnfollow(e.target));
});

function followUnfollow(button) {
  button.classList.toggle("followed");
  button.innerText == "Follow"
    ? (button.innerText = "Unfollow")
    : (button.innerText = "Follow");
}
