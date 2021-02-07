// Helper function for showing element
const show = (el) => {
  el.style.display = 'block';
};

// Helper function to preform DELETE on a book
const removeBook = (e) => {
  const bookId = e.target.dataset.id;

  fetch(`/api/book/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    console.log('deleted book');
    e.target.parentElement.remove();
  });
};

// Function to render the books after getting data from our API
const renderBooks = (data) => {
  if (data.length) {
    const statsEl = document.getElementById('stats');
    statsEl.innerHTML = '';
    show(statsEl);

    data.forEach(({ title, author, genre, pages, id }, i) => {
      const booksDiv = document.createElement('div');

      // Create the elements to show book data
      const titleEl = document.createElement('h2');
      const authorEl = document.createElement('h6');
      const genreEl = document.createElement('h6');
      const pagesEl = document.createElement('h6');

      // Create the delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.setAttribute('data-id', id);

      // Add text to the elements we just created
      titleEl.textContent = `${i + 1} ${title}`;
      authorEl.textContent = `Author: ${author}`;
      genreEl.textContent = `Genre: ${genre}`;
      pagesEl.textContent = `Pages: ${pages}`;
      deleteBtn.textContent = 'DELETE BOOK';

      // Append stuff to the new div
      booksDiv.appendChild(titleEl);
      booksDiv.appendChild(authorEl);
      booksDiv.appendChild(genreEl);
      booksDiv.appendChild(pagesEl);
      booksDiv.appendChild(deleteBtn);

      statsEl.appendChild(booksDiv);
    });

    const deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach((button) => {
      button.addEventListener('click', removeBook);
    });
  }
};

// When a user clicks the search-btn
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the searched book value from the input field
  const searchedBook = document.getElementById('book-search').value.trim();

  // Preform GET request for the specific book
  fetch(`/api/${searchedBook}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Success in searching for ${searchedBook}`, data);
      renderBooks(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// When a user clicks the author-search-btn
const authorSearchBtn = document.getElementById('author-search-btn');
authorSearchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the searched book value from the input field
  const searchedAuthor = document
    .getElementById('author-searched')
    .value.trim();

  // Preform GET request for the specific book
  fetch(`/api/author/${searchedAuthor}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Success in searching for ${searchedAuthor}`, data);
      renderBooks(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// When a user clicks the genre-search-btn
const genreSearchBtn = document.getElementById('genre-search-btn');
genreSearchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the searched book value from the input field
  const searchedGenre = document.getElementById('genre-search').value.trim();

  // Preform GET request for the specific book
  fetch(`/api/genre/${searchedGenre}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Success in searching for ${searchedGenre}`, data);
      renderBooks(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
