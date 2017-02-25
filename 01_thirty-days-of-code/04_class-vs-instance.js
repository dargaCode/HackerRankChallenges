
// https://www.hackerrank.com/challenges/30-class-vs-instance

// Create a Person class which takes an initial age and verifies that it is positive. Person.yearPasses increases the age by one. Person.amIOld prints a different message depending whether the person is a child, a teenager, or an adult.

// CONSTANTS

const TEEN_MIN_AGE = 13;
const OLD_MIN_AGE = 18;
const ERROR_MESSAGE = 'Age is not valid, setting age to 0.';
const YOUNG_MESSAGE = 'You are young.';
const TEEN_MESSAGE = 'You are a teenager.';
const OLD_MESSAGE = 'You are old.';

// CLASSES

function Person(initialAge) {
  let currentAge;

  this.yearPasses = function() {
    const age = this.getAge();

    this.setAge(age + 1);
  }

  this.amIOld = function() {
    const age = this.getAge();

    if (age < TEEN_MIN_AGE) {
      console.log(YOUNG_MESSAGE);
    } else if (age < OLD_MIN_AGE) {
      console.log(TEEN_MESSAGE);
    } else {
      console.log(OLD_MESSAGE);
    }
  }

  // GETTER / SETTER

  this.getAge = function() {
    return currentAge;
  }

  this.setAge = function(newAge) {
    if (newAge < 0) {
      currentAge = 0;
      console.log(ERROR_MESSAGE);
    } else {
      currentAge = newAge;
    }
  }

  // INITIALIZE

  this.setAge(initialAge);
}

// MAIN

(function main() {
  const age = 12;

  const person = new Person(age);

  console.log(person.getAge());
  person.amIOld();

  person.yearPasses();
  console.log(person.getAge());
  person.amIOld();

  person.yearPasses();
  console.log(person.getAge());
  person.amIOld();

  person.yearPasses();
  console.log(person.getAge());
  person.amIOld();

  person.yearPasses();
  console.log(person.getAge());
  person.amIOld();

  person.yearPasses();
  console.log(person.getAge());
  person.amIOld();

  person.yearPasses();
  console.log(person.getAge());
  person.amIOld();

}());
