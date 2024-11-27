const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let cards = document.querySelector('#cards');
  cards.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.innerHTML = `<p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read ? 'Read' : 'Not read'}</p>`;
    cards.appendChild(bookEl);
  }
}
const newBookBtn = document.querySelector('#new-book-button');
const newBookForm = document.querySelector('#new-book-form');
const closeBtn = document.querySelector('#close-form-button');

newBookBtn.addEventListener('click', () => {
  newBookForm.style.display = 'flex';
});
closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  newBookForm.style.display = 'none';
});
newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});
