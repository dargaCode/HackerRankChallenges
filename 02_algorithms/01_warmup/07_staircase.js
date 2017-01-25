
// https://www.hackerrank.com/challenges/staircase

// Print a staircase of a given height using strings with hashes and spaces.

function staircase(height) {
  for (let i = 1; i <= height; i++) {
    let line = '';

    for (let j = 1; j <= height; j++) {
      if (j > height - i) {
        line += '#';
      } else {
        line += ' ';
      }
    }

    console.log(line);
  }
}
