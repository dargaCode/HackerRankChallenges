
// https://www.hackerrank.com/challenges/30-more-exceptions

// Write a Calculator class with a single method: power(n, p). The power method takes two integers, num and power, as parameters and returns the integer result of num^power. If either parameter negative, then the method must throw an exception with the message: "num and power should be non-negative".

// CONSTANTS

const ERROR_MESSAGE = 'num and power should be non-negative';

// CLASSES

function Calculator() {
  this.power = function(num, power) {
    if (num < 0 || power < 0) {
      throw ERROR_MESSAGE;
    }

    const result = Math.pow(num, power);

    return result;
  }
}

// MAIN

(function main() {
  const num = 3;
  const power = -5;

  const calculator = new Calculator();

  try {
    const product = calculator.power(num, power);

    console.log(product);
  }

  catch(e) {
    console.log(e);
  }
}());
