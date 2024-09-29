// function parameter
function add(x, y) {
  console.log(x + y);
}
// function arguments
add(2, 5);

// example:02
function sumOfArray(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  console.log(sum);
}
sumOfArray([1,2,3,4,5]);
