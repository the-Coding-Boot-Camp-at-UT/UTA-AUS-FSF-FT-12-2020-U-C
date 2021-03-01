// It should not be necessary to check the location once each page has its own bundle
if (window.location.pathname.includes("/images")) {
  // display details view for image
  const id = window.location.pathname.split("/")[2];
  const container = document.querySelector(".container");

  loadImage(id).then(image => {
    const card = createCard(image);
    const btn = document.createElement("button");

    btn.setAttribute("class", "btn btn-primary mt-5 mx-auto");
    btn.textContent = "Save to favorites";
    btn.onclick = useIndexedDb("favorites", "FavoritesStore", "put", image);

    container.appendChild(card);
    container.appendChild(btn);
  });
} else if (window.location.pathname.includes("/favorites")) {
  // display favorites view
  useIndexedDb("favorites", "FavoritesStore", "get").then(results => {
    createCards(results);
  });
} else {
  // display home page
  loadImages().then(data => createCards(data));
}

function loadImages() {
  return fetch("/api/images")
    .then(res => res.json())
    .catch(err => reject(err));
}

function loadImage(id) {
  return fetch("/api/images/" + id)
    .then(res => res.json())
    .catch(err => reject(err));
}

function createEl(htmlString = "", className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute("class", className);
  }
  return el;
}

function createCards(data) {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = "";
  let lastRow;

  const row = createEl("div", "row");

  return data.forEach(function(image, index) {
    const col = createEl("div", "col-md-4 mt-4");
    col.appendChild(createCard(image));

    if (index % 3 === 0) {
      row.appendChild(col);
      container.appendChild(row);
      lastRow = row;
    }

    return lastRow.appendChild(col);
  });
}

function createCard(image) {
  const card = createEl("div", "card");
  const cardBody = createEl("div", "card-body");
  const imageContainer = createEl("div", "card__image-container");

  const img = createEl("img", "card-img-top card__image--cover");
  img.setAttribute("src", image.image);
  img.setAttribute("alt", image.description);

  const ratingFormContainer = createEl("div", "rating d-flex justify-content-start");
  ratingFormContainer.setAttribute("data-id", image._id);
  ratingFormContainer.setAttribute("data-rating", image.rating);

  const ratingForm = createRatingForm(image);

  const cardText = createEl("a", "card-text font-weight-bold mt-2");
  cardText.setAttribute("href", `/images/${image._id}`);
  cardText.innerText = `${image.description} (${image.rating})`;

  imageContainer.append(img);
  ratingFormContainer.append(ratingForm);

  cardBody.appendChild(ratingFormContainer);
  cardBody.appendChild(cardText);
  
  card.appendChild(imageContainer);
  card.appendChild(cardBody);

  return card;
}

function createRatingForm(image) {
  const labelText = {
    1: "One Star",
    2: "Two Stars",
    3: "Three Stars",
    4: "Four Stars",
    5: "Five Stars"
  };

  const form = createEl("form");
  form.setAttribute("action", "post");

  for (let i = 1; i <= 5; i++) {
    const input = createEl("input", "visuallyhidden");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "rating");
    input.setAttribute("id", `${image._id}-star-${i}`);
    input.setAttribute("value", i);

    const label = createEl("label");
    label.setAttribute("for", `${image._id}-star-${i}`);
    const labelSpan = createEl("span", "visuallyhidden");
    labelSpan.innerText = labelText[i];
    const star = createEl("i", `fa-star ${image.rating >= i ? "fas" : "far"}`);

    label.appendChild(labelSpan);
    label.appendChild(star);
    label.onclick = updateRating;
    form.appendChild(input);
    form.appendChild(label);
  }
  return form;
}

function updateRating(event) {
  const [id, , rating] = event.currentTarget.getAttribute("for").split("-");
  fetch(`/api/images/${id}`, {
    method: "PUT",
    body: JSON.stringify({ rating }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function() {
    if (window.location.pathname.includes("/images")) {
      console.log("yoyo");
      const id = window.location.pathname.split("/")[2];
      const container = document.getElementsByClassName("container")[0];
      loadImage(id).then(image => {
        container.removeChild(container.firstChild);
        container.appendChild(createCard(image));
      });
    } else {
      loadImages().then(images => {
        createCards(images);
      });
    }
  });
}

function useIndexedDb(databaseName, storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(databaseName, 1);
    let db,
      tx,
      store;

    request.onupgradeneeded = function(e) {
      const db = request.result;
      db.createObjectStore(storeName, { keyPath: "_id" });
    };

    request.onerror = function(e) {
      console.log("There was an error");
    };

    request.onsuccess = function(e) {
      db = request.result;
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);

      db.onerror = function(e) {
        console.log("error");
      };
      if (method === "put") {
        store.put(object);
      }
      if (method === "get") {
        const all = store.getAll();
        all.onsuccess = function() {
          resolve(all.result);
        };
      }
      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}
