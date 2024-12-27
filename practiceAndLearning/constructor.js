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

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}`);
  }
}

class Bike extends Vehicle {
  constructor(type, brand) {
    super(type); // parent constructor call
    this.brand = brand;
  }

  displayInfo() {
    console.log(`This is a ${this.brand} ${this.type}.`);
  }
}

// create bike object
const bike = new Bike("Motorbike", "Yamha");

bike.describe();
bike.displayInfo();

// private class fields
class PersonTwo {
  #name; // private field

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  // public method
  getName() {
    // return this.#name, this.age;
    return {
      name: this.#name,
      age: this.age,
    };
  }
}

const person1 = new PersonTwo("Moshfiqur Rahman", 24);

console.log(person1.getName());
console.log(person1.age);
console.log(person1.name);

// static constructor
class MathOperations {
  static addition(x, y) {
    return x + y;
  }
}

console.log(MathOperations.addition(5, 5));

// getter and setter methods
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // getter method
  getEmployeeInfo() {
    return `${this.name} earns ${this.salary}`;
  }

  // setter method
  setSalary(newSalary) {
    this.salary = newSalary;
  }
}

const emp1 = new Employee("Bokhari", 20000);
console.log(emp1.getEmployeeInfo());

emp1.setSalary(22000);
console.log(emp1.getEmployeeInfo());
emp1.setSalary(25000);
console.log(emp1.getEmployeeInfo());

// constructor overloading
class CarTwo {
  constructor(name, brand, color = "Black") {
    if (arguments.length === 2) {
      this.name = name;
      this.brand = brand;
      this.color = "Black";
    } else {
      this.name = name;
      this.brand = brand;
      this.color = color;
    }
  }

  describeCar() {
    console.log(
      `Car name: ${this.name}, Brand Name: ${this.brand}, Car Color: ${this.color}`
    );
  }
}

const car1 = new CarTwo("Tyota", "Tyota-009", "Silver");
const car2 = new CarTwo("Tyota", "Tyota-009");

car1.describeCar();
car2.describeCar();
