// object creationl with literal notation
const person = {
  name: "Emam Bokhari",
  age: 24,
};

console.log(person.name);

// this keyword
const car = {
  brand: "Tyota",
  start() {
    return `${this.brand} is starting`;
  },
};

console.log(car.start());

// object methds

// Object.assign()

const target = { a: "Cat" };
const source = { b: "Horse", c: "Elephent" };

Object.assign(target, source);

console.log(source);
