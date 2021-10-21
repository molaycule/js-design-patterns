class Module {
  constructor(title, content, { duration = null }) {
    this.title = title;
    this.content = content;
    this.duration = duration;
  }
}

class Course {
  constructor(name) {
    this.name = name;
  }
}

class CourseBuilder {
  constructor(name) {
    this.course = new Course(name);
  }

  setDescription(description) {
    this.course.description = description;
    return this;
  }

  setObjectives(objectives) {
    this.course.objectives = objectives;
    return this;
  }

  setCategory(category) {
    this.course.category = category;
    return this;
  }

  setLanguage(language) {
    this.course.language = language;
    return this;
  }

  setPrice(price) {
    this.course.price = price;
    return this;
  }

  setModules(modules) {
    this.course.modules = modules.map(
      module =>
        new Module(module.title, module.content, { duration: module.duration })
    );
    return this;
  }

  builder() {
    return this.course;
  }
}

const courseBuilder = new CourseBuilder('Advanced Javascript')
  .setDescription(
    'This course is for intermediate to advanced javascript developers'
  )
  .setCategory('Programming')
  .setLanguage('English')
  .setPrice(0)
  .setModules([
    { title: 'Design Pattern', content: 'Builder - Design Pattern' }
  ]);

console.log(courseBuilder);
