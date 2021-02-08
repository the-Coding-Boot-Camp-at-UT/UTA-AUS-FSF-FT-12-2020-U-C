const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // All data comes from the input fields
  const newCharacter = {
    name: document.getElementById('name').value.trim(),
    role: document.getElementById('role').value.trim(),
    age: document.getElementById('age').value.trim(),
    forcePoints: document.getElementById('force-points').value.trim(),
  };

  // Send POST request using the fetch API
  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCharacter),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in adding character:', data);
      alert(`Adding character: ${newCharacter.name}!`);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error);
    });

  // Dump the content of the input boxes
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('age').value = '';
  document.getElementById('force-points').value = '';
});
