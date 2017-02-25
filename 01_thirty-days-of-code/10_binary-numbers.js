
// https://www.hackerrank.com/challenges/30-binary-numbers

// Given a base-10 integer, convert it to binary. Then find and print the base-10 integer denoting the maximum number of consecutive 1s in its binary representation.

// FUNCTIONS

function decimalToRadix(decimalNum, radix) {
  // establish the max power (number of digits)
  let power = 0;

  while (Math.pow(radix, power) < decimalNum) {
    power++;
  }

  const maxPower = power - 1;

  // start from max power and allocate digits

  let remainder = decimalNum;
  let binaryStr = '';

  for (let i = maxPower; i >= 0; i--) {
    const placeValue = Math.pow(radix, i);
    const convertedDigit = Math.floor(remainder / placeValue);

    // set up for the next loop

    const totalPlaceValue = placeValue * convertedDigit;

    remainder -= totalPlaceValue;
    binaryStr += convertedDigit.toString();
  }

  return binaryStr;
}

function maxSequentialOnes(str) {
  let sequential = 0;
  let maxSequential = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (char === '1') {
      sequential++;
    } else {
      sequential = 0;
    }

    maxSequential = Math.max(sequential, maxSequential);
  }

  return maxSequential;
}

// MAIN

(function main() {
  const decimal = 1234567;

  const binary = decimalToRadix(decimal, 2);
  const biggestStreak = maxSequentialOnes(binary);

  console.log(binary);
  console.log(biggestStreak);
}());
