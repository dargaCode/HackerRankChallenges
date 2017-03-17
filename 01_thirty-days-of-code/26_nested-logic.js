
// https://www.hackerrank.com/challenges/30-nested-logic

// Given a due date and a return date for a library book, calculate the fine required if any. If the book is returned the same month, fine 15 per day. If the book is returned the same year, fine 500 per month. If returned on a different year, fine 10000.

// CONSTANTS

const FINE_PER_DAY = 15;
const FINE_PER_MONTH = 500;
const FINE_NEXT_YEAR = 10000;

// FUNCTIONS

function getFine(dueDate, returnDate) {
  let fine;

  const onTime = returnDate <= dueDate;
  const sameMonth = returnDate.getMonth() === dueDate.getMonth();
  const sameYear = returnDate.getYear() === dueDate.getYear();

  if (onTime) {
    fine = 0;
  } else if (sameMonth) {
    const daysLate = returnDate.getDate() - dueDate.getDate();

    fine = daysLate * FINE_PER_DAY;
  } else if (sameYear) {
    const monthsLate = returnDate.getMonth() - dueDate.getMonth();

    fine = monthsLate * FINE_PER_MONTH;
  } else {
    fine = FINE_NEXT_YEAR;
  }

  return fine;
}

// MAIN

(function main() {
  const dueDate = new Date('9 6 2015');
  const returnDate = new Date('10 7 2016');

  const fine = getFine(dueDate, returnDate);

  console.log(fine);
}());
