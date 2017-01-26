
// https://www.hackerrank.com/challenges/circular-array-rotation

// Rotate an array to the right by a given number of indices

function getRotatedArray(arr, shiftCount) {
  const length = arr.length;
  const backLength = shiftCount % length;
  const front = arr.slice(0, -backLength);
  const back = arr.slice(-backLength);
  const rotatedArray = back.concat(front);

  return rotatedArray;
}
