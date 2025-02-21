const myLibrary = [];
let bookCount = myLibrary.length;

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  return newBook;
}

const library = document.querySelector('.library');
const dialog = document.querySelector('dialog');
const addBookModal = document.querySelector('.add-book-modal');
const addBookBtn = document.querySelector('.add-book-btn');
const closeModal = document.querySelector('.close-modal');
const submitBtn = document.querySelector('.submit-btn');

function createCard(book) {
  const card = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const deleteBtn = document.createElement('img');

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  deleteBtn.src = './assets/delete-icon.svg';

  card.append(title, author, pages, deleteBtn);
  card.classList.add('card');
  card.setAttribute('data-index', bookCount++);
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', (e) => {
    const index = e.target.parentElement.getAttribute('data-index');
    myLibrary.splice(index, 1);
    bookCount - 1;
    e.target.parentElement.remove();
  })

  return card;
}

addBookBtn.addEventListener('click', () => {
  addBookModal.classList.add('card')
  addBookModal.showModal();
});

closeModal.addEventListener('click', () => {
  addBookModal.classList.remove('card')
  addBookModal.close();
})

dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    addBookModal.classList.remove('card')
    addBookModal.close();
  }
})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');

  if (!title.value || !author.value || !pages.value) {
    return;
  }

  const newBook = addBookToLibrary(title.value, author.value, pages.value);
  const card = createCard(newBook);
  library.appendChild(card);

  title.value = '';
  author.value = '';
  pages.value = '';

  addBookModal.classList.remove('card');
  addBookModal.close();
})


function displayBooks() {
  for (const book of myLibrary) {
    const card = createCard(book);
    library.appendChild(card);
  }
}

addBookToLibrary('Atomic Habits', 'James Clear', 346);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 295);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 429);
addBookToLibrary('Test Book', 'Author of Doom', 142);

displayBooks();