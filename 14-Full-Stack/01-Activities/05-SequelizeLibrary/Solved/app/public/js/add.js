// This code relates to the "add book" event listener

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const newBook = {
    title: document.getElementById('title').value.trim(),
    author: document.getElementById('author').value.trim(),
    genre: document.getElementById('genre').value.trim(),
    pages: document.getElementById('pages').value.trim(),
  };

  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in adding book:', data);
      alert(`Book added: ${newBook.title}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  // Empty the form
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('genre').value = '';
  document.getElementById('pages').value = '';
});
