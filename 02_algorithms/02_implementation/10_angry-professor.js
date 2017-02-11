
// https://www.hackerrank.com/challenges/angry-professor

// Given an array of arrival times for students (<= 0 is punctual) and a minimum number of punctual students for class to be held, print whether class is cancelled.

// CONSTANTS

const CLASS_CANCELLED_MESSAGE = 'YES';
const CLASS_NOT_CANCELLED_MESSAGE = 'NO';

// FUNCTIONS

function willClassHappen(arrivalTimes, minimumPunctual) {
  const punctualCount = getPunctualCount(arrivalTimes);
  const happening = punctualCount >= minimumPunctual;

  return happening;
}

function getPunctualCount(arrivalTimes) {
  let onTimeStudents = 0;

  for (let time of arrivalTimes) {
    if (time <= 0) {
      onTimeStudents++;
    }
  }

  return onTimeStudents;
}

// MAIN

(function main() {

  const minimumPunctual = 3;
  const arrivalTimes = [-1, -3, 0, 1, 4, 2];

  const willHappen = willClassHappen(arrivalTimes, minimumPunctual);

    const message = !willHappen ? CLASS_CANCELLED_MESSAGE : CLASS_NOT_CANCELLED_MESSAGE;

  console.log(message);
}());
