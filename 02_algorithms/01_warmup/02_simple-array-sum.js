
// https://www.hackerrank.com/challenges/simple-array-sum

// Print the sum of all values in an array

function simpleArraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}
