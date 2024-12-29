// function declaration

function add(a, b) {
  return a + b;
}

console.log(add(1, 3));

// function expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 3));

// arrow function
const greet = (name) => {
  return `Hello ${name}`;
};

console.log(greet("Emam Bokhari"));

// single line arrwo function
const square = (n) => n * n;

console.log(square(3));

// parameters and default

function greetings(name = "Emam Bokhari") {
  return `Hi ${name}`;
}

console.log(greetings());
console.log(greetings("Moshfiqur Rahman"));

// rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

// spread operator
const number = [1, 2, 3];

const maxNumber = Math.max(...number);

console.log(number, maxNumber);

// iife (Immediately invoked function expression)

(function () {
  console.log("IIFE executed!");
})();

const greet1 = (function (name) {
  return `Hello ${name}`;
})("Emam Bokhari");

console.log(greet1);
