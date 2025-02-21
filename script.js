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

const library = document.querySelector('.library');
const addBookModal = document.querySelector('.add-book-modal');
const addBookBtn = document.querySelector('.add-book-btn');
const closeModal = document.querySelector('.close-modal');

function createCard(book) {
  const card = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;

  
  card.append(title, author, pages);
  card.setAttribute('class', 'card');
  
  return card;
}

addBookBtn.addEventListener('click', () => {
  addBookModal.classList.add('class', 'card')
  addBookModal.showModal();
});

closeModal.addEventListener('click', () => {
  addBookModal.classList.remove('class', 'card')
  addBookModal.close();
})

function displayBooks() {
  for (const book of myLibrary) {
    card = createCard(book);
    library.appendChild(card);
  }
}

addBookToLibrary('Atomic Habits', 'James Clear', 346);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 295);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 429);
addBookToLibrary('Test Book', 'Author of Doom', 142);

displayBooks();