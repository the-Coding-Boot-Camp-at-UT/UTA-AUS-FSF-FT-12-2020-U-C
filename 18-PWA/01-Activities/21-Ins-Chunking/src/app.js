import { subtract } from "./calculations";
import { balanceEl, expenseEl, expensesListEl, priceEl, submitBtn, resetBtn } from "./elements";
import { useIndexedDb } from "./indexedDb";

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  const total = subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
  useIndexedDb("expense", "expenseStore", "put", {
    _id: expenseEl.value,
    name: expenseEl.value,
    value: priceEl.value
  });
}

function reset(e) {
  e.preventDefault();
  const total = 2000;
  balanceEl.innerText = total;
  expensesListEl.innerHTML = "";
  useIndexedDb("expense", "expensesStore", "clear");
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;

useIndexedDb("expense", "expenseStore", "get").then(results => {
  results.forEach(expense => {
    addToList(expense.name, expense.value);
  });
});
