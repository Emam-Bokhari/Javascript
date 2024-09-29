// factory pattern
const createRect = function (width,height) {
  return {
    width: width,
    height: height,

    calculateArea: function () {
      console.log(this.width * this.height);
    },

  };
};

const rect=createRect(10,30);
rect.calculateArea()

const rect2=createRect(21,52);
rect2.calculateArea()

const rect3=createRect(9,33);
rect3.calculateArea()