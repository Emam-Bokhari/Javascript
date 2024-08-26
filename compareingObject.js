const number = {
  a: 1,
  b: 2,
  c: 4,
};

const numberTwo = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(Object.keys(number));
console.log(Object.values(number));

// Ex:01 comparing objects
if (Object.values(number) > Object.values(numberTwo)) {
  console.log(true);
} else {
  console.log(false);
}
// Ex:02 comparing objects
if (
  JSON.stringify(Object.values(number)) >
  JSON.stringify(Object.values(numberTwo))
) {
  console.log(true);
} else {
  console.log(false);
}
