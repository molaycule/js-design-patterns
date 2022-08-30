let instance = null;

class Persona {
  constructor(name, age, role) {
    if (!instance) {
      this.name = name;
      this.age = age;
      this.role = role;
      instance = this;
    } else {
      return instance;
    }
  }
}

console.log("persona 1", new Persona("John", 30, "Developer"));
console.log("persona 2", new Persona("Jane", 25, "Designer")); // returns persona 1 because it's already instantiated
