// constructor pattern
// constructor likhar somai sobsomai e 1st letter boro hater likhte hobe.
const CreateRectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.calculateArea = function () {
    console.log(width * height);
  };
};

const rect = new CreateRectangle(3, 3);
rect.calculateArea();

// constructor pattern revise
const CalculateRectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.calculateArea = function () {
    console.log(width * height);
  };
};

const rect3 = new CalculateRectangle(7, 9);
rect3.calculateArea();

// factory pattern
const rectangle = function (width, height) {
  return {
    width: width,
    height: height,

    calculateArea: function () {
      console.log(this.width * this.height);
    },
  };
};

const rect2 = rectangle(3, 3);
rect2.calculateArea();

// factory pattern revise
const rectangle2 = function (width, height) {
  return {
    width: width,
    height: height,

    calculateArea: function () {
      console.log(this.width * this.height);
    },
  };
};

const rect4 = rectangle2(3, 5);
rect4.calculateArea();
