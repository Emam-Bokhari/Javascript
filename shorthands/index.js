const user = {
  name: "Moshfiqur Rahman",
  age: 24,
  address: {
    village: "Mojlishpur",
    city: "Brahmanbaria",
    country: "Bangladesh",
  },
};

console.log(user);

// Normal
console.log(user?.address?.city);

// Pro Level
const {
  address: { city },
} = user;

const {
  address: { village },
} = user;

console.log(city);

console.log(village);
