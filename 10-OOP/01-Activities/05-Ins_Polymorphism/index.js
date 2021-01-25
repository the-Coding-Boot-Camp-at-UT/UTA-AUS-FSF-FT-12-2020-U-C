const OverloadDemo = function () {
  this.area = function (x, y) {
    console.log('x = ', x);
    if (!y) {
      console.log('y is not provided');
      return `\nThe area of the square is ${Math.pow(x, 2)} sq units`;
    }
    console.log('y = ', y);
    return `\nThe area of the rectangle is ${x * y} sq units`;
  };
};

const rectangle = new OverloadDemo();
console.log('rectangle.area(5, 7)', rectangle.area(5, 7));
console.log('rectangle.area(5)', rectangle.area(5));
