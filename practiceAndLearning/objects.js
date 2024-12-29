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

// Object.keys()

const user = {
  name: "Moshfiqur Rahman",
  age: 24,
};

console.log(Object.keys(user)); // output: ["name","age"]

// Object.values
console.log(Object.values(user)); // output: ["Moshfiqur Rahman",24]

// Object.freeze()

const freezeUser = {
  name: "Moshfiqur Rahman",
};
freezeUser.name = "Imtiaz Hossain";
freezeUser.age = 24;

console.log(freezeUser);

Object.freeze(freezeUser);

freezeUser.address = "Brahmanbaria";

console.log(freezeUser);

// Object.seal()

const sealUser = {
  name: "Moshfiqur Rahman",
};

sealUser.name = "Emam Bokhari";
sealUser.age = 24;
console.log(sealUser);

Object.seal(sealUser);

sealUser.fathersName = "Mokhlesur Rahman";

console.log(sealUser);
