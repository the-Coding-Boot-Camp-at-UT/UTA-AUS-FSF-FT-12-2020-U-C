var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

decrementEl.addEventListener("click", function() {
  if(count > 0) {
    count--;
    setCounterText();
  }
}); 