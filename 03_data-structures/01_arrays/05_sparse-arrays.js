
// https://www.hackerrank.com/challenges/sparse-arrays

// Given an array of strings and an array of queries, print the number of strings matching each query.

// FUNCTIONS

function getStringTallyDict(strings) {
  const stringTallyDict = {};

  for (const string of strings) {
    if (stringTallyDict[string]) {
      stringTallyDict[string]++;
    } else {
      stringTallyDict[string] = 1;
    }
  }

  return stringTallyDict;
}

// MAIN

(function main() {
  const strings = ['aba', 'baba', 'aba', 'xzxb'];
  const queries = ['aba', 'xzxb', 'ab'];

  const stringTallyDict = getStringTallyDict(strings);

  for (const query of queries) {
    const stringCount = stringTallyDict[query] || 0;
    console.log(stringCount);
  }
}());
