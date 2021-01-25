class Order {
  constructor(item) {
    this.item = item;

    Order.lastId++;
    this.id = Order.lastId;
  }
}
Order.lastId = 0;

module.exports = Order;
