
// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited

// Given an array of clouds and a jump distance, jump through the cloud array until back home. If the cloud landed on is a thunder cloud [a one], the jump costs 3 energy. Otherwise the jump costs 1 energy.

// CONSTANTS

const STARTING_ENERGY = 100;
const DEFAULT_COST = 1;
const THUNDER_COST = 3;

// FUNCTIONS

function getEnergyAfterCloudLoop(clouds, jumpDistance) {
  const cloudCount = clouds.length;

  let energy = STARTING_ENERGY;
  let cloudNum = 0;

  while (cloudNum < cloudCount) {
    cloudNum += jumpDistance;
    const currentCloud = cloudNum % cloudCount;
    const thunderous = clouds[currentCloud] === 1;

    if (thunderous) {
      energy -= THUNDER_COST;
    } else {
      energy -= DEFAULT_COST;
    }
  }

  return energy;
}

// MAIN

(function main() {
  const clouds = [0, 0, 1, 0, 0, 1, 1, 0];
  const jumpDistance = 2;

  const remainingEnergy = getEnergyAfterCloudLoop(clouds, jumpDistance);

  console.log(remainingEnergy);
}());
