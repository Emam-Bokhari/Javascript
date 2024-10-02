const Users = function (name, id, email) {
  (this.id = id), (this.name = name), (this.email = email);
  let position = {
    x: 30,
    y: -100,
  };

  this.getPosition = function () {
    return position;
  };

  let print = function () {
    console.log("Here are users info...");
    console.log(id, name, email);
    console.log(this.id, this.name, this.email);
  }.bind(this);

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      return (position = value);
    },
  });

  print();
};

const userInfo = new Users("Moshfiqur Rahman", 1, "abc@gmail.com");
console.log(userInfo.getPosition()); // solution 1
userInfo.position={
  x:152,
  y:-39
} // set property
console.log(userInfo.position); // solution 2
