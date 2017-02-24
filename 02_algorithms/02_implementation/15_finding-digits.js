
// https://www.hackerrank.com/challenges/find-digits

// Given a number, count how many of the number's integers are factors of the number itself. Duplicate integers can count more than once.

// FUNCTIONS

function countContainedFactors(num) {
  const str = String(num);

  let factorCount = 0;

  for (let i = 0; i < str.length; i++) {
    const currentInteger = Number(str.charAt(i));

    if (num % currentInteger === 0) {
      factorCount++;
    }
  }

  return factorCount;
}

// MAIN

(function main() {
  const num = 1012;

  let factorCount = countContainedFactors(num);

  console.log(factorCount);
}());
