
// https://www.hackerrank.com/challenges/apple-and-orange

// Given the location of a house, the location of two fruit trees, and the distances from the fruit trees that all their fruit drop, print the tallies of how many fruit from each tree hit the house.

// CLASSES

// HOUSE CLASS
function House(startLocation, endLocation) {
  var position = {
    startLocation: startLocation,
    endLocation: endLocation,
  }

  this.intersectsLocation = function(location) {
    const intersectsLocation = location >= position.startLocation && location <= position.endLocation;

    return intersectsLocation;
  }
}

// FRUIT CLASS
function Fruit(treeLocation, delta) {
  var treeLocation = treeLocation;
  var delta = delta;

  this.getLocation = function() {
    const location = treeLocation + delta;

    return location;
  }
}

// TREE CLASS
function Tree(location) {
  var location = location;
  var fruits = [];

  const getLocation = function() {
    return location;
  }

  this.createFruits = function(fruitDeltas) {
    const treeLocation = getLocation();

    for (fruitDelta of fruitDeltas) {
      const fruit = new Fruit(treeLocation, fruitDelta);

      fruits.push(fruit);
    }
  }

  this.countFruitHittingHouse = function(house) {
    let fruitHitCount = 0;

    for (fruit of fruits) {
      const location = fruit.getLocation();
      const fruitHitsHouse = house.intersectsLocation(location);

      if (fruitHitsHouse) {
        fruitHitCount++;
      }
    }

    return fruitHitCount;
  }
}

// MAIN

const myHouse = new House(7, 11);
const appleTree = new Tree(5);
const orangeTree = new Tree(15);

appleTree.createFruits([-2, 2, 1]);
orangeTree.createFruits([5, -6]);

const appleHitCount = appleTree.countFruitHittingHouse(myHouse);
const orangeHitCount = orangeTree.countFruitHittingHouse(myHouse);

console.log(appleHitCount);
console.log(orangeHitCount);
