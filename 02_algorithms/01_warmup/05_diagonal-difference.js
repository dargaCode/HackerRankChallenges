// https://www.hackerrank.com/challenges/diagonal-difference

// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

function diagonalDifference(matrix) {
  const length = matrix.length;
  let difference;
  let downwardSum = 0;
  let upwardSum = 0;

  for (let i = 0; i < length; i++) {
    const downwardElement = matrix[i][i];
    const upwardElement = matrix[i][length - i - 1];

    downwardSum += downwardElement;
    upwardSum += upwardElement;
  }

  difference = Math.abs(downwardSum - upwardSum);
  console.log(difference);
}
