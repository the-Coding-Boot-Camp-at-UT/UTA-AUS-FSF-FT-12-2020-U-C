var main = document.querySelector("main");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

var sites = [
  "https://news.ycombinator.com/",
  "https://twitter.com",
  "https://instagram.com",
  "https://google.com",
  "https://reddit.com/r/webdev"
];

var siteDataList = [
  {
    element: site1El,
    title: "Site 1",
    url: "https://google.com",
    imgSrc: "images/image_1.jpg",
    imgAlt: "man working"
  },
  {
    element: site2El,
    title: "Site 2",
    url: "https://twitter.com",
    imgSrc: "images/image_2.jpg",
    imgAlt: "group brainstorm"
  },
  {
    element: site3El,
    title: "Site 3",
    url: "https://instagram.com",
    imgSrc: "images/image_3.jpg",
    imgAlt: "women working"
  }
];

function renderSite(siteData) {
  var titleElement = siteData.element.children[0];
  var linkElement = siteData.element.children[1];
  var imgElement = linkElement.children[0];

  titleElement.textContent = siteData.title;
  titleElement.setAttribute(
    "style",
    "text-decoration: underline; padding-left:10px; margin: 0"
  );
  linkElement.setAttribute("href", siteData.url);
  imgElement.setAttribute("src", siteData.imgSrc);
  imgElement.setAttribute("alt", siteData.imgAlt);
  imgElement.setAttribute("style", "padding:10px;");
}

for (var i = 0; i < siteDataList.length; i++) {
  renderSite(siteDataList[i]);
}
