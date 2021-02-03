const sum = (numOne, numTwo) => numOne + numTwo;

const subtract = (numOne, numTwo) => numOne - numTwo;

const addCallBacks = (functionOne, functionTwo) =>
  functionOne(6, 2) + functionTwo(6, 3);

// What does this return?
addCallBacks(subtract, sum);
