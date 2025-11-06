const myLibrary = [];

const newBook = document.getElementById('add');

newBook.addEventListener('click', () => {
  addBookToLibrary();
})

function Book(id, title, author, pages, read='not read yet') {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  const book = {
    title : `${this.title}`,
    author : `${this.author}`,
    pages : `${this.pages}`,
    read : `${this.read}`
  }
  return book
}

function uniqueId() {
  return self.crypto.randomUUID();
}

function addBookToLibrary() {
  let id = uniqueId();
  let title = prompt('Enter a title of book.');
  let author = prompt('Enter a author of book.');
  let pages = prompt('Enter a number of pages in book.');
  let read = prompt('You read this book or not yet?');
  if (read === '') {
    read = 'not yet read';
  }
  book = new Book(id, title, author, pages, read);
  myLibrary.push(book);
}