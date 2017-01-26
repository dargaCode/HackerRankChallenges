
// https://www.hackerrank.com/challenges/mini-max-sum

// Given five positive integers, print the minimum and maximum values that can be calculated by summing exactly four of the five integers.

function miniMaxSum(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  const totalSum = arr.reduce(function(prev, curr) {
    return prev + curr;
  });

  const smallestSumOfFourElements = totalSum - maxValue;
  const largestSumOfFourElements = totalSum - minValue;

  console.log(smallestSumOfFourElements, largestSumOfFourElements);
}
