const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value, clear()));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
            <img src="${user.picture.large}" alt= "${user.name.first}"/>
            <div class= "user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} ${user.location.country} </p>
            </div>
        `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

// Toggler

let toggler = document.getElementById("switch");
toggler.addEventListener("click", () => {
  if (toggler.checked === true) {
    document.body.style.backgroundColor = "rgb(17, 17, 17)";
    document.querySelector(".header").style.backgroundColor = "crimson";
  } else {
    document.body.style.backgroundColor = "white";
    document.querySelector(".header").style.backgroundColor = "black";
  }
});

// Input clear button
const clearBtn = document.querySelector(".clear-btn");
function clear() {
  if (filter.value.length > 0) {
    clearBtn.style.display = "inline";
  } else {
    clearBtn.style.display = "none";
  }
}
clearBtn.addEventListener("click", () => {
  filter.value = "";
  clearBtn.style.display = "none ";
  filter.focus();
  getData();
});
