// Ex:01
let a = [1, 2, 3, 4];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// Ex:02
let b = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < b.length; i++) {
  sum += b[i];
}
console.log(sum);

// Ex:03
let c = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < c.length; i++) {
  //   console.log(c[i])
  const number = c[i];
  if (number % 2 == 0) {
    console.log("Even Number", number);
  }
}
