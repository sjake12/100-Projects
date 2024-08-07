const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const button = document.querySelector("button");
const books = document.getElementById("books");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (title.value === "" && author.value === "" && year.value === "")
    alert("Please fill up the form.");

  const newBook = document.createElement("div");
  newBook.classList.add("book");
  books.appendChild(newBook);

  const newTitle = document.createElement("div");
  newTitle.innerText = title.value;
  newBook.appendChild(newTitle);

  const newAuthor = document.createElement("div");
  newAuthor.innerText = author.value;
  newBook.appendChild(newAuthor);

  const newYear = document.createElement("div");
  newYear.innerText = year.value;
  newBook.appendChild(newYear);

  title.value = "";
  author.value = "";
  year.value = "";
  title.focus();
});
