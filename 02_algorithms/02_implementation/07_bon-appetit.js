
// https://www.hackerrank.com/challenges/bon-appetit

// Given an array of food item costs ordered by Anna and Brian, the index of one item Anna didn't share, and the amount Anna paid to split the bill, print the amount she was overcharged or "Bon Appetit" if she wasn't overcharged.

// CONSTANTS

const SUCCESS_MESSAGE = 'Bon Appetit';

// FUNCTIONS

function getCorrectSplitCharge(foodItemCosts, exemptedItemIndex) {
  const exemptedItemCost = foodItemCosts[exemptedItemIndex];
  const totalBill = sumArray(foodItemCosts);
  const splittableBill = totalBill - exemptedItemCost;
  const correctSplitCharge = splittableBill / 2;

  return correctSplitCharge;
}

function sumArray(arr) {
  return arr.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

// MAIN

(function main() {
  const foodItemCosts = [3, 10, 2, 9];
  const indexOfNonSharedItem = 1;
  const amountAnnaWasCharged = 7;

  const correctSplitCharge = getCorrectSplitCharge(foodItemCosts, indexOfNonSharedItem);
  const overCharge = amountAnnaWasCharged - correctSplitCharge;

  const message = overCharge > 0 ? overCharge : SUCCESS_MESSAGE;

  console.log(message);
}());
