
// https://www.hackerrank.com/challenges/plus-minus

// Given an array of integers, print out the fraction of its values that are positive, that are negative, and that are zeroes.

  function plusMinus(arr) {
    const length = arr.length;
    let positives = 0;
    let zeroes = 0;
    let negatives = 0;

    for (let i = 0; i < length; i++) {
      const element = arr[i];

      switch(true) {
        case element > 0: {
          positives++;
          break;
        }
        case element < 0: {
          negatives++;
          break;
        }
        default: {
          zeroes++;
        }
      }

    }

    const positiveFraction = positives/length;
    const negativeFraction = negatives/length;
    const zeroFraction = zeroes/length;

    console.log(positiveFraction);
    console.log(negativeFraction);
    console.log(zeroFraction);
  }
