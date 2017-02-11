
// https://www.hackerrank.com/challenges/utopian-tree

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter. Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after growth cycles?

// CONSTANTS

const STARTING_HEIGHT = 1;
const FACTOR_PER_SPRING = 2;
const FEET_PER_SUMMER = 1;

// FUNCTIONS

function getHeightAfterCycle(cycleCount) {
  let height = STARTING_HEIGHT;

  for (let i = 0; i < cycleCount; i++) {
    if (isEven(i)) {
      height *= FACTOR_PER_SPRING;
    } else {
      height += FEET_PER_SUMMER;
    }
  }

  return height;
}

function isEven(int) {
  return int % 2 === 0;
}

// MAIN

(function main() {
  const cycleCounts = [0, 1, 4];

  for (let cycleCount of cycleCounts) {
    const height = getHeightAfterCycle(cycleCount);

    console.log(height);
  }
}());
