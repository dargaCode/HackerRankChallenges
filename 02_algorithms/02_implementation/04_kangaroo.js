
// https://www.hackerrank.com/challenges/kangaroo

// Given starting positions and jump lengths, print whether two kangaroos will ever land in the same position after the same number of jumps.

// CLASSES

function Kangaroo(startingPos, jumpDistance) {
  this.startingPos = startingPos;
  this.jumpDistance = jumpDistance;
}

// FUNCTIONS

function quarryCaughtOnSameJump(chaser, quarry) {
  const possibleToCatch = canChaserCatchUp(chaser, quarry);

  if (!possibleToCatch) {
    return false;
  } else {
    const caughtBetweenJumps = isCatchDistanceInteger(chaser, quarry);

    return caughtBetweenJumps;
  }
}

function canChaserCatchUp(chaser, quarry) {
  const chaserSpeed = chaser.jumpDistance;
  const quarrySpeed = quarry.jumpDistance;

  if (chaserSpeed <= quarrySpeed) {
    return false;
  }

  return true;
}

function isCatchDistanceInteger(chaser, quarry) {
  const chaserSpeed = chaser.jumpDistance;
  const chaserStart = chaser.startingPos;

  const quarrySpeed = quarry.jumpDistance;
  const quarryStart = quarry.startingPos;

  const catchDistance = (chaserStart - quarryStart) / (quarrySpeed - chaserSpeed);

  const isInteger = catchDistance % 1 === 0;

  return isInteger;
}

// MAIN

(function main() {
  const chaserKangaroo = new Kangaroo(0, 3);
  const quarryKangaroo = new Kangaroo(4, 2);

  const caughtOnSameJump = quarryCaughtOnSameJump(chaserKangaroo, quarryKangaroo);
  const output = caughtOnSameJump ? 'YES' : 'NO';

  console.log(output);
}());
