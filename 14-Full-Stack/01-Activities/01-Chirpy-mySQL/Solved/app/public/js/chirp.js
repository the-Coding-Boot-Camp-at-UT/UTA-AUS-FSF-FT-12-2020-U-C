// When the page loads, grab and display all "chirps"
// Send the GET request with the fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
fetch('/api/all', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Successful GET all chirps:', data);
    data.map(({ author, body, created_at }) => {
      const row = document.createElement('div');
      const chirpArea = document.getElementById('chirp-area');
      row.classList.add('chirp');

      const chirpAuthor = document.createElement('p');
      const chirpBody = document.createElement('p');
      const chirpDate = document.createElement('p');
      chirpAuthor.textContent = `${author} chirped: `;
      chirpBody.textContent = `${body}`;
      chirpDate.textContent = `At ${new Date(created_at).toLocaleDateString()}`;

      row.appendChild(chirpAuthor);
      row.appendChild(chirpBody);
      row.appendChild(chirpDate);

      chirpArea.prepend(row);
    });
  })
  .catch((err) => console.error(err));

// Event listener for when a user "chirps"
const submitChirpBtn = document.getElementById('chirp-submit');
submitChirpBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Make the new chirp object
  const newChirp = {
    author: document.getElementById('author').value.trim(),
    body: document.getElementById('chirp-box').value.trim(),
    created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
  };

  // Send the POST request with the fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newChirp),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in posting chirp!', data);
      const row = document.createElement('div');
      const chirpArea = document.getElementById('chirp-area');
      row.classList.add('chirp');

      const chirpAuthor = document.createElement('p');
      const chirpBody = document.createElement('p');
      const chirpDate = document.createElement('p');

      chirpAuthor.textContent = `${data.author} chirped: `;
      chirpBody.textContent = `${data.body}`;
      chirpDate.textContent = `At ${new Date(
        data.created_at
      ).toLocaleDateString()}`;

      row.appendChild(chirpAuthor);
      row.appendChild(chirpBody);
      row.appendChild(chirpDate);

      chirpArea.prepend(row);
    });
  // .catch((error) => console.error('Error:', error));

  // Empty the input box
  document.getElementById('author').value = '';
  document.getElementById('chirp-box').value = '';
});
