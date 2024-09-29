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

const rect2=rectangle(3,3);
rect2.calculateArea()