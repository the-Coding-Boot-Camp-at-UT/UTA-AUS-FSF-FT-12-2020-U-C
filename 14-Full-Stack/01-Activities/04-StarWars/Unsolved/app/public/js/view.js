// Code to view a specific character in the database
// We use a query parameter to specify which character we need information for

const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    let searchedCharacter = document
      .getElementById('character-search')
      .value.trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedCharacter = searchedCharacter.replace(/\s+/g, '').toLowerCase();

    fetch(`/api/${searchedCharacter}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Search character data', data);
        const { name, role, age, forcePoints } = data;

        const wellSection = document.getElementById('well-section');
        wellSection.innerHTML = '';

        if (!data) {
          wellSection.innerHTML = `${searchedCharacter} wasn't found!`;
        } else {
          const nameEl = document.createElement('h2');
          nameEl.textContent = name;

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
        }
      });
  });
}
