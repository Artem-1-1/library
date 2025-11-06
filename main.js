const myLibrary = [];

const dialog = document.getElementById("dialog");
const showButton = document.getElementById("add");
const closeButton = document.getElementById("close");

showButton.addEventListener("click", () => {
  dialog.showModal();
})

closeButton.addEventListener("click", () => {
  dialog.close();
})

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = self.crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  const book = {
    title : `${this.title}`,
    author : `${this.author}`,
    pages : `${this.pages}`,
    read : this.read ? "read" : "not yet",
  }
  return book
}

function addBookToLibrary() {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard')

  const titleRow = document.createElement('p');
  titleRow.textContent = `${book.title}`;

  const authorRow = document.createElement('p');
  authorRow.textContent = `${book.author}` 

  const pagesRow = document.createElement('p');
  pagesRow.textContent = `${book.pages}`

  const readStatusRow = document.createElement('p');
  readStatusRow.textContent = `${book.read ? "Read" : "Not yet"}`
} 