
// https://www.hackerrank.com/challenges/compare-the-triplets

// Compare the values for each index of two triplets, and keep track of which triplet wins more matchups.

function compareTriplets(tripletA, tripletB) {
  let pointsA = 0;
  let pointsB = 0;

  for (let i = 0; i < 3; i++) {
    const diff = tripletA[i] - tripletB[i];

    if (diff > 0) {
      pointsA++;
    } else if (diff < 0) {
      pointsB++;
    }
  }

  console.log(pointsA, pointsB);
}
