
// https://www.hackerrank.com/challenges/array-left-rotation

// Given an array of integers and a rotation count, perform left roations on the array and print the resulting array.

// FUNCTIONS

function leftRotation(arr, rotationCount) {
  const reducedRotationCount = rotationCount % arr.length;
  const doubledArr = arr.concat(arr);
  const startIndex = reducedRotationCount;
  const endIndex = reducedRotationCount + arr.length;

  const rotatedArr = doubledArr.slice(startIndex, endIndex);

  return rotatedArr;
}

// MAIN

(function main() {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const rotationCount = 100000000000000000;

  const rotatedArr = leftRotation(arr, rotationCount);
  const joinedArr = rotatedArr.join(' ');

  console.log(joinedArr);
}());
