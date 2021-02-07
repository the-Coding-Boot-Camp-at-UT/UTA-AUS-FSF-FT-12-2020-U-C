// Code here will dictate how the page displays all the characters

fetch('/api', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success in grabbing all characters:', data);
    data.forEach(({ name, role, age, forcePoints }, i) => {
      // Parent div for other elements
      const sectionBreak = document.createElement('hr');
      const wellSection = document.createElement('div');
      wellSection.classList.add('well');

      // Add an ID so we can tell each character apart
      wellSection.setAttribute('id', `character-well-${i}`);

      // Append the well to the well container
      const wellContainer = document.getElementById('well-section');
      wellContainer.appendChild(wellSection);

      // Add all characters
      const nameEl = document.createElement('h2');
      nameEl.textContent = `Name: ${name}`;

      const roleEl = document.createElement('h6');
      roleEl.textContent = `Role: ${role}`;

      const ageEl = document.createElement('h6');
      ageEl.textContent = `Age: ${age}`;

      const fpEl = document.createElement('h6');
      fpEl.textContent = `Force Points: ${forcePoints}`;

      wellSection.appendChild(nameEl);
      wellSection.appendChild(roleEl);
      wellSection.appendChild(ageEl);
      wellSection.appendChild(fpEl);
      wellSection.appendChild(sectionBreak);
    });
  });
