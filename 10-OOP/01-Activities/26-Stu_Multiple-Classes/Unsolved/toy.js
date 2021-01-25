class Toy {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

const toys = [
  new Toy('Action Figure', 14.99, 5),
  new Toy('Rare Toy', 17.99, 1),
];

module.exports = {
  Toy,
  toys,
};
