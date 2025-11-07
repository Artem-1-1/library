const myLibrary = [];

const dialog = document.getElementById("dialog");
const showButton = document.getElementById("add");
const closeButton = document.getElementById("close");
const bookList = document.getElementById("book-list");
const submitButton = document.getElementById("submit");
const form = document.getElementById("form"); 

showButton.addEventListener("click", () => {
  dialog.showModal();
})

closeButton.addEventListener("click", () => {
  dialog.close();
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  form.reset();
  dialog.close();
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
  this.info = function() {
  const readStatus = this.read ? "read" : "not yet";
    return `${title} ${author} ${pages} pages, ${readStatus}, ${id} `
 }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard")

  const titleRow = document.createElement("p");
  titleRow.textContent = `${book.title}`;

  const authorRow = document.createElement("p");
  authorRow.textContent = `${book.author}` 

  const pagesRow = document.createElement("p");
  pagesRow.textContent = `${book.pages}`

  const readStatusRow = document.createElement("p");
  readStatusRow.textContent = `${book.read ? "Read" : "Not yet"}`
  readStatusRow.style.cursor = "pointer"

  function changeReadStatus() {
    readStatusRow.textContent = book.read ? "Read" : "Not yet";
    readStatusRow.style.color = book.read ? "green" : "red";
  }
  changeReadStatus();

  readStatusRow.addEventListener("click", (e) =>  {
    book.read = !book.read;
    changeReadStatus();
  })

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove"
  removeButton.addEventListener("click", function() {
    bookCard.remove();
    removeButton.classList.add('remove');
  });

  bookCard.dataset.bookId = book.id;

  bookCard.appendChild(titleRow);
  bookCard.appendChild(authorRow);
  bookCard.appendChild(pagesRow);
  bookCard.appendChild(readStatusRow);
  bookCard.appendChild(removeButton);

  bookList.appendChild(bookCard);
}