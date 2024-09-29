/* 
logical && operators
true && false = false
false && true = false
true && true = true
false && false = false

logical || operators
true || true = true
true || fasle = true
fasle || true = true
fasle || false = false
*/

// ex:01 logical && operator
const a = 10;
const b = 20;
const c = 30;
const d = 40;

if (a > b && c < d) {
  console.log(true);
} else {
  console.log(false);
}

// ex:02 logical || operator
if (a > b || c < d) {
  console.log(true);
} else {
  console.log(false);
}
