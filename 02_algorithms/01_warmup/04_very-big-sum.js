
// https://www.hackerrank.com/challenges/a-very-big-sum

// Print the sum of an array of very large numbers. (easy in js since there are no explicit number types)

function veryBigSum(arr) {
  const sum = arr.reduce(function(prev, curr) {
    return prev + curr;
  });

  console.log(sum);
}
