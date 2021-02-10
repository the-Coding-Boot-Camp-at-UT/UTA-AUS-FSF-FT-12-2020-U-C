var num1 = parseInt(prompt('Give me a number!'));
var num2 = parseInt(prompt('Give me another number!'));
var result;

var operation = prompt(
  'What would you like to do? (add, subtract, multiply, divide)'
).toUpperCase();

if (operation === 'ADD') {
  result = num1 + num2;
  alert('The sum of ' + num1 + ' and ' + num2 + ' is ' + result);
} else if (operation === 'SUBTRACT') {
  result = num1 - num2;
  alert('The difference between ' + num1 + ' and ' + num2 + ' is ' + result);
} else if (operation === 'MULTIPLY') {
  result = num1 * num2;
  alert('The product of ' + num1 + ' and ' + num2 + ' is ' + result);
} else if (operation === 'DIVIDE') {
  result = num1 / num2;
  alert('The quotient of ' + num1 + ' and ' + num2 + ' is ' + result);
} else {
  alert('Not a valid option!');
}
