class Persona {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}

const personaMixin = {
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm a ${this.role}`);
  }
}

Object.assign(Persona.prototype, personaMixin);

const developer = new Persona("John", 30, "Developer");
const designer = new Persona("Jane", 25, "Designer");

developer.greet();
designer.greet();
