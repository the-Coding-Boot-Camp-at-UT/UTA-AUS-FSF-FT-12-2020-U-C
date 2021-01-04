var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});