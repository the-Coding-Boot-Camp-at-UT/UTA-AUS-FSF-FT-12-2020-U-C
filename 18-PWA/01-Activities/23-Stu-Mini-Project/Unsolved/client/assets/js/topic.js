function checkForIndexedDb() {
  window.indexedDB =
    window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  window.IDBTransaction =
    window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

  if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB.");
    return false;
  }
  return true;
}

function removeSpecialCharsFromString(str) {
  return str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
}

// Creates pseudo-unique ids for articles
function createArticleIds(articles) {
  return articles.map(article => {
    article._id = removeSpecialCharsFromString(article.url)
    return article;
  });
}

// Loads articles
function loadArticles() {
  const BASE_URL =
    "https://newsapi.org/v2/everything?sortBy=published&apiKey=e41ee36d9a714a199911b42cb75a4fe3&q=";

  const { query } = getParams();
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + query)
      .then(res => res.json())
      .then(data => {
        const articles = createArticleIds(data.articles);
        resolve(articles);
      });
  });
}

// Clear the article container and insert placeholder articles
function renderPlaceHolders() {
  const articleContainer = document.querySelector(".article-container");

  const placeholders = createPlaceholders();

  while (articleContainer.firstChild) {
    articleContainer.removeChild(articleContainer.firstChild);
  }

  articleContainer.appendChild(placeholders);
}

// Create and return 4 placeholder articles
function createPlaceholders() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 4; i++) {
    const placeholder = createPlaceholder();
    fragment.appendChild(placeholder);
  }

  return fragment;
}

// Returns markup for a placeholder article
function createPlaceholder() {
  return createElement(
    "div",
    { class: "article-skeleton" },
    createElement(
      "div",
      { class: "article-skeleton__header" },
      createElement("div", { class: "article-skeleton__title" }),
      createElement("div", { class: "article-skeleton__published" })
    ),
    createElement(
      "div",
      { class: "article-skeleton__content" },
      createElement("div", { class: "article-skeleton__image" }),
      createElement("div", { class: "article-skeleton__text" }),
      createElement("div", { class: "article-skeleton__text" }),
      createElement("div", { class: "article-skeleton__text" }),
      createElement("div", { class: "article-skeleton__text" }),
      createElement("div", { class: "article-skeleton__text" })
    )
  );
}

// Empties article container and appends articles
function renderArticles(articleData) {
  renderPlaceHolders();
  const articleContainer = document.querySelector(".article-container");
  const topicHeader = document.querySelector("header h1");

  const articles = createArticles(articleData);

  while (articleContainer.firstChild) {
    articleContainer.removeChild(articleContainer.firstChild);
  }

  const { query } = getParams();

  topicHeader.textContent = query;
  articleContainer.appendChild(articles);
}

// Return HTML for each article provided
function createArticles(articleData) {
  const fragment = document.createDocumentFragment();

  articleData.forEach(data => {
    const article = createArticle(data);
    fragment.appendChild(article);
  });

  return fragment;
}

// Returns markup for a single article
function createArticle({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  _id,
  favorite
}) {
  return createElement(
    "article",
    null,
    createElement(
      "div",
      { class: "article-header" },
      createElement("div", { class: "article-header__title" }, createElement("h3", null, title)),
      createElement(
        "div",
        { class: "article-header__published" },
        createElement("p", null, author),
        createElement("p", null, formatDate(publishedAt))
      )
    ),
    createElement(
      "div",
      { class: "article-container" },
      createElement(
        "p",
        null,
        urlToImage && createElement("img", { src: urlToImage, alt: title }),
        description
      ),
      createElement(
        "p",
        null,
        createElement(
          "small",
          null,
          "Continue reading at ",
          createElement(
            "a",
            {
              href: url,
              target: "_blank",
              rel: "noopener noreferrer"
            },
            source.name
          )
        )
      ),
      !favorite
        ? createElement(
          "button",
          {
            class: "button button--primary",
            onclick: () => {
              useIndexedDb("articles", "ArticleStore", "put", {
                source,
                author,
                title,
                description,
                url,
                urlToImage,
                publishedAt,
                _id
              });
              loadPage();
            }
          },
          "Save to Favorites"
        )
        : createElement(
          "button",
          {
            class: "button button--danger",
            onclick: () => {
              useIndexedDb("articles", "ArticleStore", "delete", { _id });
              loadPage();
            }
          },
          "Remove from Favorites"
        )
    )
  );
}

// Helper function for creating elements
function createElement(type, attributes, ...children) {
  const element = document.createElement(type);

  if (attributes !== null && typeof attributes === "object") {
    for (const key in attributes) {
      if (key.startsWith("on")) {
        const event = key.substring(2).toLowerCase();
        const handler = attributes[key];

        element.addEventListener(event, handler);
      } else {
        element.setAttribute(key, attributes[key]);
      }
    }
  }

  children.forEach(child => {
    if (typeof child === "boolean" || child === null || child === undefined) {
      return;
    }

    let node;

    if (child instanceof HTMLElement) {
      node = child;
    } else {
      node = document.createTextNode(child);
    }

    element.appendChild(node);
  });

  return element;
}

// Formats and returns date in MMMM/DD/YYYY format
function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return date.toLocaleDateString(options);
}

// Returns URL query params as object
function getParams() {
  return location.search
    .substring(1)
    .split("&")
    .reduce((acc, curr) => {
      const [key, value] = curr.split("=");

      acc[key] = value;
      return acc;
    }, {});
}

// Returns a promise that can be used to access a given store in IndexedDb
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
      } else if (method === "get") {
        const all = store.getAll();
        all.onsuccess = function() {
          resolve(all.result);
        };
      } else if (method === "delete") {
        store.delete(object._id);
      }
      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}

// Call renderArticles on page load
function loadPage() {
  useIndexedDb("articles", "ArticleStore", "get").then(results => {
    const favorites = results;
    loadArticles().then(data => {
      const mappedData = data.map(article => {
        article.favorite = false;
        favorites.forEach(fav => {
          if (article._id === fav._id) {
            article.favorite = true;
          }
        });
        return article;
      });
      renderArticles(mappedData);
    });
  });
}

loadPage();
