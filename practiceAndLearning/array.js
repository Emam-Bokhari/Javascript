{
  // array cration
  const arr = [1, 2, 3, 4];
  console.log(arr);

  const arr2 = new Array(5);
  console.log(arr2);

  const arr3 = Array.from("*");
  console.log(arr3);

  const numbers = [10, 21, 35, 41, 56];
  console.log(numbers[1]);
}
// array methods

/**
 * map
 * filter
 * reduce
 * forEach
 * slice
 * splice
 * sort
 */

// map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
