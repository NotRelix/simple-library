const myLibrary = [];
let bookCount = myLibrary.length;

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}

function addBookToLibrary(title, author, pages, hasRead) {
  if (hasRead === undefined) {
    hasRead = false;
  }
  const newBook = new Book(title, author, pages, hasRead);
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
  const hasRead = document.createElement('button');
  const deleteBtn = document.createElement('img');

  title.textContent = book.title;
  author.textContent = `by: ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  deleteBtn.src = './assets/delete-icon.svg';

  if (book.hasRead) {
    hasRead.textContent = 'Finished'
    hasRead.classList.add('has-read-btn', 'has-read');
  } else {
    hasRead.textContent = 'Not Finished';
    hasRead.classList.add('has-read-btn', 'not-read');
  }

  card.append(title, author, pages, hasRead, deleteBtn);
  card.classList.add('card');
  card.setAttribute('data-index', bookCount++);
  pages.classList.add('pages');
  deleteBtn.classList.add('delete-btn');

  hasRead.addEventListener('click', (e) => {
    const index = e.target.parentElement.getAttribute('data-index');
    if (myLibrary[index].hasRead) {
      hasRead.classList.remove('has-read');
      hasRead.classList.add('not-read');
      hasRead.textContent = 'Not Finished';
    } else {
      hasRead.classList.remove('not-read');
      hasRead.classList.add('has-read');
      hasRead.textContent = 'Finished';
    }
    myLibrary[index].hasRead = !myLibrary[index].hasRead;
  })

  deleteBtn.addEventListener('click', (e) => {
    const index = e.target.parentElement.getAttribute('data-index');
    myLibrary.splice(index, 1);
    
    e.target.parentElement.remove();

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index);
    })

    bookCount--;
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

addBookToLibrary('Atomic Habits', 'James Clear', 346, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 295, false);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 429, false);
addBookToLibrary('Test Book', 'Author of Doom', 142, true);

displayBooks();