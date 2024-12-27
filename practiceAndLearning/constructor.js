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
