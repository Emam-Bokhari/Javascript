function myFunc() {
  console.log(this.x + this.y);
}

myFunc(); // output: NaN

myFunc.apply({ x: 10, y: 12 }); // output 22

myFunc.call({ x: 10, y: 12 }); // output 22

function mySecondFunc(p, q) {
  console.log(this.a + this.b + p + q);
}

// mySecondFunc.apply({ a: 3, b: 5 }, 3, 5); // output: TypeError

mySecondFunc.call({ a: 3, b: 5 }, 4, 5);

const testBind=mySecondFunc.bind({a:3,b:5}); // output: 17

testBind(4,5) // output: 17
