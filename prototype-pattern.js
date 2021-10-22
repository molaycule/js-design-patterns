class Rectangle {
  constructor(rectangle) {
    this.width = rectangle.width;
    this.height = rectangle.height;
    this.unit = rectangle.unit;
  }

  clone() {
    return new Rectangle(this);
  }
}

const rectangle = new Rectangle({ width: 20, height: 10, unit: 'cm' });
const rectangleClone = rectangle.clone();

console.log('rectangle', rectangle);
console.log('rectangle clone', rectangleClone);
