const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

const newBookBtn = document.querySelector('#new-book-button');
newBookBtn.addEventListener('click', () => {
  const newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'flex';
  const closeBtn = document.querySelector('#close-form-button');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    newBookForm.style.display = 'none';
  });
});
