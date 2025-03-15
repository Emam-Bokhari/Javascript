const user = {
  name: "Moshfiqur Rahman",
  age: 24,
  address: {
    village: "Mojlishpur",
    city: "Brahmanbaria",
    country: "Bangladesh",
  },
};

// console.log(user);

// Normal
// console.log(user?.address?.city);

// Pro Level
const {
  address: { city },
} = user;

const {
  address: { village },
} = user;

// console.log(city);

// console.log(village);

// Normal
let numbers = [0, 1, 2];
let first = numbers[0];
let second = numbers[1];
// console.log(first);
// console.log(second);

// Pro Level
let [one, _, three] = numbers;
// console.log(one);
// console.log(three);
