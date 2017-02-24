
// https://www.hackerrank.com/challenges/save-the-prisoner

// Given a number of people, a number of candies, and a starting number of the person who gets the first candy, print the number of the person who receives the last candy.

// FUNCTIONS

function getLastPerson(peopleCount, candyCount, startingPerson) {
  let lastPerson;
  const modulo = (startingPerson + candyCount - 1) % peopleCount;

  if (modulo > 0) {
    lastPerson = modulo;
  } else {
    // it's the last person
    // prevents the output of zero
    lastPerson = peopleCount;
  }

  return lastPerson;
}

// MAIN

(function main() {
  const peopleCount = 5;
  const candyCount = 2;
  const startingPerson = 1;

  const lastPerson = getLastPerson(peopleCount, candyCount, startingPerson || peopleCount);

  console.log(lastPerson);
}());
