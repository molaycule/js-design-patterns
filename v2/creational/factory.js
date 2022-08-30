class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class DeveloperPersona extends Persona {
  constructor(name, age) {
    super(name, age);
    this.role = "Developer";
  }
}

class DesignerPersona extends Persona {
  constructor(name, age) {
    super(name, age);
    this.role = "Designer";
  }
}

class PersonaFactory {
  create(name, age, role) {
    switch (role) {
      case "Developer":
        return new DeveloperPersona(name, age);
      case "Designer":
        return new DesignerPersona(name, age);
      default:
        return new Persona(name, age);
    }
  }
}

const factory = new PersonaFactory();
const developer = factory.create("John", 30, "Developer");
const designer = factory.create("Jane", 25, "Designer");

console.log(developer);
console.log(designer);
