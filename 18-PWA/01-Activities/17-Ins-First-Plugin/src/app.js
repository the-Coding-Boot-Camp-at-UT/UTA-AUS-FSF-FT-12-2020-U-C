const calculations = require("./calculations");
const Chart = require("chart.js");

const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");
const expensesListEl = document.getElementById("expenses-list");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

const expenseChart = require("./expenseChart");

function updateChart(name, price) {
  expenseChart.data.labels.push(name);
  expenseChart.data.datasets.forEach((dataset) => {
    dataset.data.push(price);
  });
  expenseChart.update();
}

function resetChart() {
  expenseChart.data.labels = [];
  expenseChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });
  expenseChart.update();
}

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit() {
  const total = calculations.subtract(Number(balanceEl.innerText), priceEl.value);
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
  updateChart(expenseEl.value, priceEl.value);
}

function reset() {
  const total = 2000;
  balanceEl.innerText = total;
  expensesListEl.innerHTML = "";
  resetChart();
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;