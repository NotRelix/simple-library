const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

addBookToLibrary('Atomic Habits', 'James Clear', 346);
addBookToLibrary('Test Book', 'Author of Doom', 142);
console.log(myLibrary);