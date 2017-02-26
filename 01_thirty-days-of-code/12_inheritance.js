
// https://www.hackerrank.com/challenges/30-inheritance

// Create Student as a child class of Person, that takes an array of scores and prints the letter grade.

// CONSTANTS

const GRADE_THRESHOLDS = {
  90: 'A',
  80: 'B',
  70: 'C',
  60: 'D',
  50: 'E',
  0: 'F',
}

// CLASSES

function Person(firstName, lastName, id) {
  this.printPerson = function() {
    const message = `${lastName}, ${firstName} - id #${id}`;

    console.log(message);
  }
}

function Student(firstName, lastName, id, scores) {
  Person.call(this, firstName, lastName, id);

  this.printGrade = function() {
    const grade = calculateLetterGrade();
    const message = `${lastName}, ${firstName} - grade: ${grade}`;

    console.log(message);
  }

  function calculateLetterGrade() {
    const averageScore = averageArray(scores);
    const letterGrade = getLetterGrade(averageScore);

    return letterGrade;
  }

  function averageArray(arr) {
    const sum = arr.reduce(function(prev, curr) {
      return prev + curr;
    });
    const average = sum / arr.length;

    return average;
  }

  function getLetterGrade(score) {
    const rounded = roundDownScore(score);
    const letterGrade = GRADE_THRESHOLDS[rounded];

    return letterGrade;
  }

  function roundDownScore(score) {
    const rounded = Math.floor(score / 10) * 10;

    return rounded;
  }
}

// MAIN

(function main() {
  const darga = new Student('darga', 'code', '12345', [50, 85, 92, 100]);

  darga.printPerson();
  darga.printGrade();
}());
