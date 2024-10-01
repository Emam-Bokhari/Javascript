// js a function hoche akta special type of object , aikhne object ar somosot method e kaj korbe, abar function hoche executeable, apni function invoke kore kore aita k call korte parben

const userName = "Emam Bokhari";
console.log(userName.constructor);

function func() {
  console.log("Hello World!");
}

console.log(func.constructor);
console.log(func.name);
console.log(func.length);

function sum(x, y,z) {
  console.log(x + y);
}

sum(5,7)
console.log(sum.name)
console.log(sum.length)
