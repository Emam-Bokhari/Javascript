// example: 01
function sum(a, b) {
  console.log(a + b);
  return function multiply() {
    console.log("outer");
  };
}

const x = sum(5, 6);
x();

// example: 02
function a() {
  function b() {
    function c() {
      function d() {
        function e() {
          function f() {
            console.log("Hi...Hello World!");
          }
          f();
        }
        e();
      }
      d();
    }
    c();
  }
  b();
}

a();
