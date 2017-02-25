
// https://www.hackerrank.com/challenges/30-dictionaries-and-maps

// Add a list of phone numbers to a dictionary, then make several queries against the dictionary.

// CONSTANTS

  const ERROR_MESSAGE = 'Not found';

// FUNCTIONS

  function parseInputsToDict(inputs) {
    const resultDict = {};

    for (let input of inputs) {
      const [name, number] = input.split(' ');

      resultDict[name] = number;
    }

    return resultDict;
  }

  function searchPhoneBook(phoneBook, query) {
    const result = phoneBook[query];

    if (result) {
      message = `${query}=${result}`;

      console.log(message);
    } else {
      console.log(ERROR_MESSAGE);
    }
  }

// MAIN

(function main() {
  const inputs = [
    'sam 99912222',
    'tom 11122222',
    'harry 12299933',
  ];
  const queries = [
    'sam',
    'edward',
    'harry'
  ];

  const phoneBook = parseInputsToDict(inputs);

  for (let query of queries) {
    searchPhoneBook(phoneBook, query);
  }
}());
