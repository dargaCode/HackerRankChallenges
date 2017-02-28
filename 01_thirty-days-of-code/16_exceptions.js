
// https://www.hackerrank.com/challenges/30-exceptions-string-to-integer

// Diven a string, convert it and print its integer value. If it can't be converted to an integer, throw an exception containing "Bad String".

// CONSTANTS

const ERROR_MESSAGE = 'Bad String';

// FUNCTIONS

function stringToInteger(str) {
  const parsed = parseInt(str);

  if (isNaN(parsed)) {
    throw ERROR_MESSAGE;
  }

  return parsed;
}

// MAIN

(function main() {
  const str = 'a';

  try {
    const parsed = stringToInteger(str);

    console.log(parsed);
  }

  catch(e) {
    console.log(e);
  }
}());
