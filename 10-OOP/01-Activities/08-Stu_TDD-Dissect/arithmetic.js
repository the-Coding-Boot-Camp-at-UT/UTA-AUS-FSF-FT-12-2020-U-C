function Arithmetic(number = 0) {
  this.number = number;
}

Arithmetic.prototype.plus = function(num = 0) {
  const newNumber = this.number + num;

  return new Arithmetic(newNumber);
};

Arithmetic.prototype.minus = function(num = 0) {
  const newNumber = this.number - num;

  return new Arithmetic(newNumber);
};

Arithmetic.prototype.value = function() {
  return this.number;
};

module.exports = Arithmetic;
