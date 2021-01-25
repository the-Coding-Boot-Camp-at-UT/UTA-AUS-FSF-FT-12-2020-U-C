const fizzBuzz = (num) =>
// .map() will run a block of code on each element of the 'num' array and return a new array with modified values.
  num.map((singleNum) => {
      const multipleOf3 = singleNum % 3 === 0;
      const multipleOf5 = singleNum % 5 === 0;
    // Meets the requirement of the fourth test: 'should return FizzBuzz if a multiple of both 3 and 5'
      if (multipleOf3 && multipleOf5) {
        return 'FizzBuzz';
      }
    // Meets the requirement of the second test: 'should return Fizz if multiple of 3'
      if (multipleOf3) {
        return 'Fizz';
      }
    // Meets the requirement of the third test:'should return Buzz if multiple of 5'
      if (multipleOf5) {
        return 'Buzz';
      }
    // Meets the requirement of first test: 'should return the number if not a multiple of three or five'
      return singleNum;
    })
    .join(', ');
// Here, we export this module so that it can be imported by 'fizz.test.js'
module.exports = fizzBuzz;
