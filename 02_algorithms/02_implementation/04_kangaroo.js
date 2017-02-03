
// https://www.hackerrank.com/challenges/kangaroo

// Given starting positions and jump lengths, print whether two kangaroos will ever land in the same position after the same number of jumps.

// CONSTANTS

const MAX_LOOPS = 10000;

// CLASSES

// KANGAROO CLASS
function Kangaroo(startingPosition, jumpDistance) {
  var position = startingPosition;
  var jumpDistance = jumpDistance;

  this.jump = function() {
    position += jumpDistance;
  }

  this.getPosition = function() {
    return position;
  }
}

// FUNCTIONS

function checkForMatchingPositions(kangarooA, kangarooB) {
  let doPositionsMatch = false;
  let positionA = kangarooA.getPosition();
  let positionB = kangarooB.getPosition();

  for (let i = 0; i < MAX_LOOPS; i++) {
    kangarooA.jump();
    kangarooB.jump();

    positionA = kangarooA.getPosition();
    positionB = kangarooB.getPosition();

    if (positionA === positionB) {
      doPositionsMatch = true;
    }
  }

  return doPositionsMatch;
}

// MAIN

(function main() {
  const kangarooA = new Kangaroo(0, 5);
  const kangarooB = new Kangaroo(10, 2);
  const matchingPositions = checkForMatchingPositions(kangarooA, kangarooB);

  let result = '';

  if (matchingPositions) {
    result = 'YES';
  } else {
    result = 'NO';
  }

  console.log(result);
}());
