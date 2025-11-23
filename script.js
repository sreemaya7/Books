// ...existing code...
document.addEventListener('DOMContentLoaded', function () 
{
  const addingbookform = document.getElementById("addingbookform");
  const shade = document.getElementById("shade");
  const plus = document.getElementById("plus");
  const cancel = document.getElementById("cancel");
  const addBtn = document.getElementById("add");
  const frontpage = document.querySelector(".frontpage");
  const bookNameInput = document.getElementById("bookformname");
  const bookAuthorInput = document.getElementById("bookformauthorname");
  const descriptionInput = document.getElementById("description");

  let books = [];
  let editingIndex = null;

  // load from localStorage
  function loadBooks() 
  {
    try 
    {
      const raw = localStorage.getItem('books'); //it take loads data 
      books = raw ? JSON.parse(raw) : [];
    }
    catch (e)
    {
      books = [];
    }
  }

  function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
  }

  function renderBooks() {
    // remove existing .bookbox elements rendered by JS
    frontpage.querySelectorAll('.bookbox').forEach(el => el.remove());

    // render each book
    books.forEach((book, idx) => {
      const div = document.createElement('div');
      div.className = 'bookbox';
      div.innerHTML = `
        <h2>${escapeHtml(book.name)}</h2>
        <h4> -By ${escapeHtml(book.author)}</h4>
        <p>${escapeHtml(book.description)}</p>
        <button class="edit-btn" data-index="${idx}">Edit</button>
        <button class="delete-btn" data-index="${idx}">Delete</button>
      `;
      frontpage.appendChild(div);
    });

    // attach handlers (delegation would also work)
    frontpage.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const i = Number(e.currentTarget.dataset.index);
        deleteBook(i);
      });
    });
    frontpage.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const i = Number(e.currentTarget.dataset.index);
        startEdit(i);
      });
    });
  }

  function deleteBook(index) {
    books.splice(index, 1);
    saveBooks();
    renderBooks();
  }

  function startEdit(index) {
    const book = books[index];
    bookNameInput.value = book.name;
    bookAuthorInput.value = book.author;
    descriptionInput.value = book.description;
    editingIndex = index;
    addingbookform.style.display = "block";
    shade.style.display = "block";
  }

  function clearForm() {
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    descriptionInput.value = "";
    editingIndex = null;
  }

  plus && plus.addEventListener("click", function (e) {
    clearForm();
    addingbookform.style.display = "block";
    shade.style.display = "block";
  });

  cancel && cancel.addEventListener("click", function (e) {
    e.preventDefault();
    addingbookform.style.display = "none";
    shade.style.display = "none";
    clearForm();
  });

  addBtn && addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const name = bookNameInput.value.trim();
    const author = bookAuthorInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!name) {
      alert('Please enter a Book name');
      return;
    }
    if (!author) {
      alert('Please enter a Author name');
      return;
    }
    if (!description) {
      alert('Please enter some details');
      return;
    }

    if (editingIndex === null) {
      // create
      books.push({ name, author, description });
    } else {
      // update
      books[editingIndex] = { name, author, description };
    }

    saveBooks();
    renderBooks();

    addingbookform.style.display = "none";
    shade.style.display = "none";
    clearForm();
  })

  // helper to avoid XSS from innerHTML
  function escapeHtml(str = "") {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // init
  loadBooks();
  renderBooks();
});
// ...existing code...






//local host //
// ...existing code...

// Express server setup
const express = require("express");
const path = require("path"); // Add this for path handling
const app = express();
const port = 5000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route handler for root path
app.get('/', (req, res) => {
    console.log("inside get method");
    res.sendFile(path.join(__dirname, 'book.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);


// Check if user is logged in
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
      window.location.href = 'index.html';
      return;
  }

    // Update header with username
    const userName = sessionStorage.getItem('userName');
    const userBtn = document.querySelector('.btn');
    userBtn.title = `Logged in as ${userName}`;

    // ... your existing book.js code ...
});
