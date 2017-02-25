
// https://www.hackerrank.com/challenges/30-review-loop

// Given a string indexed from 0, print its even-indexed and odd-indexed characters as  space-separated strings on a single line.

// FUNCTIONS

function siftEvenOddChars(str) {
  let even = '';
  let odd = '';

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (isEven(i)) {
      even += char;
    } else {
      odd += char;
    }
  }

  console.log(even, odd);

}

function isEven(num) {
  if (num === 0) {
    return true;
  }

  return num % 2 === 0;
}

// MAIN

(function main() {
  const str = 'hackerrank';

  siftEvenOddChars(str);

}());
