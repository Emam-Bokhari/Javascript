/* 
 akta js code browese kivabe boje pare? 

ans: prothum a tokenization kore orthat choto choto tokra tokra kore venge fele,arpor ast (abstract syntex tree) toiri kore, arpor aita k machine code a rupantor kore, arpor shiata browser a run hoi
*/

console.log("Inside global execution context");
var a = 5;

function testMe() {
  console.log("Inside text me execution context");
  var b = 10;

  var user = {
    name: "tapas",
    country: "Bangladesh",
  };

  function textAgain() {
    console.log("Inside text again execution context");
    console.log("Exiting text again execution context");
  }

  textAgain();
  console.log("Extitng test me execution context");
}

testMe();
console.log("Exiting global execution context"); 

// code blocks
const message = "I can do it";

function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}

function calc(a, b) {
  return sum(a, b) + mul(a, b);
}
function getResult(a, b) {
  return calc(a, b);
}
getResult(5, 7);


 const x = 10;

function personName() {
  const y = { name: "Emam Bokhari", age: 24 };
  console.log("Moshfiqur Rahman");
  console.log(y);
}
personName(); 

// code blocks
console.log("This is Alex"); // 1st print

const z = 29;

function test() {
  const x = 25;
  const y = 25;
  function sum() {
    console.log(x + y); // 3rd print
  }
  console.log("What's Up!"); // 2nd print
  sum();
  console.log("Nothing!"); // 4th print
}
test();
console.log("Okay!"); // 5th print

// code blocks
console.log("This is Joe"); // 1st print

const a = 5;
const b = 10;

const user = { name: "Emam", age: 24 }; 

function sum() {
  let x = 5;
  let y = 5;
  console.log(x + y); // 3rd print 10
  function mul() {
    const marks = 88;
    const average = marks / 2;
    console.log(average); // 4th print 44
  }
  mul();
  console.log("Done!"); // 5th print Done
}
console.log(user); // 2nd print {name:'Emam',age:24}
sum()
console.log("Execute Done") // 6th print 'Execute Done'
console.log(a+b); // 7th print 15