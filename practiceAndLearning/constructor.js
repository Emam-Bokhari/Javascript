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
