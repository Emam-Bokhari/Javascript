const x = {
  name: "Emam",
  id: 21,
  address: "Brahmanbaria",
};
x.fatherName = "Mokhlesur Rahman";

console.log(x);

let y = Object();
y = { name: "A", id: "01" };
y.subject = "Biology";

console.log(y);

const z = {};
z.id = "01";
(z.name = "Emam Bokhari"), (z.address = "Kasba");

console.log(z);

const a = new Object();
const b = Object();
const c = {};
console.log(a, b, c);
