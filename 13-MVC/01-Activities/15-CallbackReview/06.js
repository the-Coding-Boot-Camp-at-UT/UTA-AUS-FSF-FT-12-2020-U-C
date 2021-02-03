const sum = (numOne, numTwo) => numOne + numTwo;

const subtract = (numOne, numTwo) => numOne - numTwo;

const multiply = (numOne, numTwo) => numOne * numTwo;

const anythingGoes = (functionOne, functionTwo, functionThree) =>
  functionThree(functionOne(3, 4), functionTwo(7, 2));

// Challenge: what does this return?
anythingGoes(multiply, subtract, sum);
