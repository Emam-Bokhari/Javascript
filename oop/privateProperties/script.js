// aita jahatu akta function tai amara aitar vitore variable declare korte pari, r aitar vitore variable declare korle aitar bahir thek shai variable gula access kora jabe na, jamon amra aikhne position abolng print property k const dara declare korsi jar jonno bahir theke aigula accessable na

const Users = function (name, id, email) {
  (this.id = id), (this.name = name), (this.email = email);
  const position = {
    x: 30,
    y: -100,
  };

  const print = function () {
    console.log("Here are users info...");
    console.log(id, name, email); // solution 1
    console.log(this.id, this.name, this.email); // solution 1
    console.log(position);
  }.bind(this); // solution 2 amra aikhne bind kore dilam object ar sathe , kno na bind na korle aita jahatu akta function tai aitar vitorer this ta window object k reffer korbe r amra value pabo undefined

  print();
};

const userInfo = new Users("Moshfiqur Rahman", 1, "abc@gmail.com");
console.log(userInfo);
