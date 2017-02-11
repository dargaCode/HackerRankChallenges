
// https://www.hackerrank.com/challenges/sock-merchant

// Given an array of sock IDs, print how many pairs exist. Pair = matching ID.

// FUNCTIONS

function getSockIdCounts(sockIds) {
  const sockIdCounts = {};

  for (let id of sockIds) {
    if (sockIdCounts[id]) {
      sockIdCounts[id] ++;
    } else {
      sockIdCounts[id] = 1;
    }
  }

  return sockIdCounts;
}

function getPairCount(sockIdCounts) {
  let totalPairCount = 0;

  for (let id in sockIdCounts) {
    const idCount = sockIdCounts[id];
    const idPairCount = Math.floor(idCount / 2);

    totalPairCount += idPairCount;
  }

  return totalPairCount;
}

// MAIN

(function main() {
  const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

  const sockIdCounts = getSockIdCounts(socks);
  const pairCount = getPairCount(sockIdCounts);

  console.log(pairCount);
}());
