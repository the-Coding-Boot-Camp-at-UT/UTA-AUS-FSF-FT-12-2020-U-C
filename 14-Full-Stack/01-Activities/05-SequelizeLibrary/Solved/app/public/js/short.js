// Get all the short books (>= 150 page) books

fetch('/api/books/short', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success in getting short books:', data);
    data.forEach(({ title, author, genre, pages }, i) => {
      const wellContainer = document.getElementById('well-section');
      const sectionBreak = document.createElement('hr');

      const wellSection = document.createElement('div');
      wellSection.classList.add('well');
      wellSection.setAttribute('id', `book-well-${i}`);
      wellContainer.appendChild(wellSection);

      // Create the elements to show book data
      const titleEl = document.createElement('h2');
      const authorEl = document.createElement('h6');
      const genreEl = document.createElement('h6');
      const pagesEl = document.createElement('h6');

      // Add text to the elements we just created
      titleEl.textContent = `${i + 1} ${title}`;
      authorEl.textContent = `Author: ${author}`;
      genreEl.textContent = `Genre: ${genre}`;
      pagesEl.textContent = `Pages: ${pages}`;

      // Append the elements with textContent to the well
      wellSection.appendChild(titleEl);
      wellSection.appendChild(authorEl);
      wellSection.appendChild(genreEl);
      wellSection.appendChild(pagesEl);
      wellSection.appendChild(sectionBreak);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
