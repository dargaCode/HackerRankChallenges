
// https://www.hackerrank.com/challenges/30-operators

// Given a mealCost, tipPercent, and taxPercent, print the total paid.

// MAIN

(function main() {
  const mealCost = 12;
  const tipPercent = 20;
  const taxPercent = 8;

  const tipFactor = tipPercent / 100;
  const taxFactor = taxPercent / 100;

  const tipAmount = mealCost * tipFactor;
  const taxAmount = mealCost * taxFactor;

  const totalCost = mealCost + tipAmount + taxAmount;
  const roundedCost = Math.round(totalCost);

  const output = `The total meal cost is ${roundedCost} dollars.`;

  console.log(output);
}());
