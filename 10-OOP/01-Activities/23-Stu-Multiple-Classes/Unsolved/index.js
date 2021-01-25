const Store = require("./store");
const { toys } = require("./toy");

const store = new Store("Big Al's Toy Barn", toys);

store.welcome();
store.processProductSale("Action Figure");
store.processProductSale("Action Figure");
store.processProductSale("Rare Toy");
store.processProductSale("Action Figure");

// store.processProductSale("Rare Toy");

// store.replenishStock("Rare Toy", 2);
// store.processProductSale("Rare Toy");

store.printRevenue();
