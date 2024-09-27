// procedural
let width = 10;
let height = 20;

function calculateArea(width, height) {
  return width * height;
}

function calculateRange(width, height) {
  return 2 * (width + height);
}

let area = calculateArea(width, height);
let range = calculateRange(width, height);
console.log(area);
console.log(range);

// oop
const rect = {
  width: 10,
  height: 20,

  calculateArea: function () {
    return width * height;
  },

  calculateRange: function () {
    return 2 * (width + height);
  },
};

let oopArea = rect.calculateArea();
let oopRange = rect.calculateRange();
console.log(oopArea);
console.log(oopRange);
