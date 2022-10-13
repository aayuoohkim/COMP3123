// Exercise 1.
let gretter = (myArray, counter) => {
  const greetText = "Hello";
  for (const element of myArray) {
    console.log(`${greetText} ${element}`);
  }
};

gretter(["Randy Savage", "Rick Flair", "Hulk Hogan"], 3);

// Exercise 2.
function capitalize(word) {
  let firstLetter, remain;
  [firstLetter, ...remain] = word;
  return firstLetter.toUpperCase() + remain.join("").toLowerCase();
}

console.log(capitalize("nodeJs"));
console.log(capitalize("fooBar"));

// Exercise 3.
const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(
  (color) => color.charAt(0).toUpperCase() + color.slice(1)
);

console.log(capitalizedColors);

// Exercise 4.
var values = [1, 60, 34, 30, 20, 5];

var filterLessThan20 = values.filter((numberInArr) => {
  return numberInArr < 20;
});

console.log(filterLessThan20);

// Exercise 5.
var array = [1, 2, 3, 4];

var calculateSum = array.reduce((returnedVal, currentVal) => {
  return returnedVal + currentVal;
}, 0);

console.log(calculateSum);

var calculateProduct = array.reduce((returnedVal, currentVal) => {
  return returnedVal * currentVal;
}, 1);

console.log(calculateProduct);

// Exercise 6.
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car2 = new Car("Pontaic Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
