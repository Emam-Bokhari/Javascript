class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
  }
}

const bokhari = new Person("Emam Bokhari", 24);
bokhari.introduce();

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`This car is a ${this.brand} ${this.model}`);
  }
}

const toyota = new Car("Toyota", "M-0009");
toyota.displayInfo();

// set default value
class Animal {
  constructor(name = "Unknown Animal", species = "Unknown Species") {
    this.name = name;
    this.species = species;
  }

  describe() {
    console.log(`This is a ${this.species} named ${this.name}`);
  }
}

const peigon = new Animal();

peigon.describe();

// rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.area = this.calculateArea();
  }

  calculateArea() {
    return this.width * this.height;
  }

  describe() {
    console.log(
      `Rectangle width: ${this.width}, height: ${this.height}, areas:${this.area}`
    );
  }
}

const rect1 = new Rectangle(5, 10);
rect1.describe();
