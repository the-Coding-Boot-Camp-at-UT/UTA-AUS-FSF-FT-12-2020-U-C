// Creates pseudo-unique ids for articles
export function createArticleIds(articles) {
  return articles.map(article => {
    article._id = removeSpecialCharsFromString(article.url)
    return article;
  });
}

// Returns URL query params as object
export function getParams() {
  return location.search
    .substring(1)
    .split("&")
    .reduce((acc, curr) => {
      const [key, value] = curr.split("=");

      acc[key] = value;
      return acc;
    }, {});
}
// Formats and returns date in MMMM/DD/YYYY format
export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return date.toLocaleDateString(options);
}

export function removeSpecialCharsFromString(str) {
  return str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
}
