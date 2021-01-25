class Order {
  constructor(item) {
    this.item = item;

    this.id = Math.floor(Math.random() * 99) + 1;
  }
}

module.exports = Order;
