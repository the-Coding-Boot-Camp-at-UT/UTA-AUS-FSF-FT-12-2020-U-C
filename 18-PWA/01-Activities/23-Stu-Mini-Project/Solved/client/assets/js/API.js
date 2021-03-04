import { createArticleIds, getParams } from "./utils";

// Loads articles
export function loadArticles() {
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
