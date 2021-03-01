import { subtract } from "./calculations";
import { balanceEl, expenseEl, expensesListEl, expensesChart, priceEl, submitBtn, resetBtn } from "./elements";
import { updateChart, resetChart } from "./expenseChart";

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  const total = subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
  updateChart(expensesChart, expenseEl.value, priceEl.value);
}

function reset(e) {
  e.preventDefault();
  const total = 2000;
  balanceEl.innerText = total;
  expensesListEl.innerHTML = "";
  resetChart(expensesChart);
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;