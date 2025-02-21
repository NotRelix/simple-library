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

const container = document.querySelector('.container');

function displayBooks() {
  for (const book of myLibrary) {
    const card = document.createElement('p');
    card.textContent = `${book.title} by: ${book.author} Pages: ${book.pages}`;
    container.appendChild(card);
  }
}

addBookToLibrary('Atomic Habits', 'James Clear', 346);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 295);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 429);
addBookToLibrary('Test Book', 'Author of Doom', 142);

displayBooks();