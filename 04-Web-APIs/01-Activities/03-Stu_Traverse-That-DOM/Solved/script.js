var artDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

artDiv.children[0].lastElementChild.style.color = "blue";
artDiv.children[0].style.fontSize = "50px";
artDiv.previousElementSibling.style.background = "black";

mainDiv.childNodes[1].style.textDecoration = "underline";
mainDiv.lastElementChild.style.fontSize = "50px";
mainDiv.firstElementChild.style.color = "orange";
mainDiv.lastElementChild.parentElement.style.fontSize = "40px";
