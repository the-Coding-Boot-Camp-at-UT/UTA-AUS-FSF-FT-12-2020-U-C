import { useIndexedDb } from "./indexedDb";
import { loadArticles } from "./API";
import { renderArticles } from "./domMethods";
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
      renderArticles(mappedData, loadPage);
    });
  });
}

loadPage();
