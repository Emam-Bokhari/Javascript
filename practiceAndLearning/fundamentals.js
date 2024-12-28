// var  (function scoped)
var personName = "Emam";

console.log(personName);
var personName = "Bokhari";
console.log(personName);
personName = "Emam Bokhari";

console.log(personName);

// let (block scoped) [ES6,EcmaScript-2015]
let age = 24;
console.log(age);

age = 25;

console.log(age);

// const (block scoped)
const pi = 3.1416;
console.log(pi);

const person = { name: "Emam", age: 24 };

console.log(person);
person.name = "Emam Bokhari";

console.log(person);

// data types

/**
 * primitive data types (immutable)
 * reference data types (mutable)
 */

// primitive data types
/**
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol (ES6)
 * bigInt (ES11)
 */

// string
let name = "Emam Bokhari";

let city = "Dhaka";

console.log(typeof name);

// number
let personAge = 24;
let height = 5.4;
console.log(typeof personAge);

// boolean
let isStudent = true;
console.log(typeof isStudent);

// null
let emptyValue = null;
console.log(emptyValue);

// undefined
let notAssigned;
console.log(typeof notAssigned);

// symbol
let uniqueKey = Symbol("id");
console.log(typeof uniqueKey);

// bigInt
let bigNumber = 12345n;
console.log(typeof bigNumber);

// reference data types (mutable)
/**
 * object
 * array
 * function
 */

// object
let person1 = {
  name: "Bokhari",
  age: 24,
  city: "Dhaka",
};

console.log(typeof person1);

// array
let fruits = ["Apple", "Banana", "Mango"];
console.log(typeof fruits);

// function
function greet() {
  return "Hello Bokhari!";
}

console.log(typeof greet);

// primitive example
let x = 10;
let y = x; // value copy

x = 20; // not effect y variable

console.log(x, y); // output: 20,10

// reference example
let obj1 = { name: "Bokhari" };

let obj2 = obj1; // reference copy

obj1.name = "Emam Bokhari"; // effected obj2

console.log(obj1, obj2); // output: { name: 'Emam Bokhari' } { name: 'Emam Bokhari' }

// operators

/**
 * arithmetic operators
 * logical operators
 * bitwise operators
 */

// arithmetic operators
/**
 * addition +
 * substraction -
 * multiplication *
 * division /
 * modulas %
 * xponentiation **
 * increment ++
 * decrement --
 */

let a = 10,
  b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// increment & decrement

/**
 * preIncrement
 * preDecrement
 * postIncrement
 * postDecrement
 */
let e = 5;
let f = 5;
let g = 5;
let h = 5;

console.log(++e);
console.log(f++);
console.log(f);
console.log(--g);
console.log(h--);
console.log(h);

// logical operators
/**
 * && true && false output: false
 * || OR
 * ! NOT !true output: false
 */

let emamAge = 25;
let hasId = true;

// and operator
console.log(age > 18 && hasId); // output: true

// or operator
console.log(age < 18 || hasId); // output: true

// not operator
console.log(!hasId); // output: false

// control flow
/**
 * if-else statement
 * loops (for,while,do-while)
 * switch statement
 */

// if-else statement
let moshfiqAge = 24;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// else-if

let day = "Saturday";

if (day === "Monday") {
  console.log("Monday");
} else if (day === "Saturday") {
  console.log("Saturday");
} else {
  console.log("Invalid");
}
