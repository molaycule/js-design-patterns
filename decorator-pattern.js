class Macbook {
  cost() {
    this.cost = 1000;
    return this.cost;
  }

  screenSize() {
    this.screenSize = 11.6;
    return this.screenSize;
  }
}

function memoryDecorator(macbook) {
  var cost = macbook.cost();
  macbook.cost = function () {
    return cost + 75;
  };
}

function insuranceDecorator(macbook) {
  var cost = macbook.cost();
  macbook.cost = function () {
    return cost + 250;
  };
}

const macbook1 = new Macbook();
memoryDecorator(macbook1);
insuranceDecorator(macbook1);
const macbook2 = new Macbook();
console.log(`Macbook1 cost: ${macbook1.cost()}`);
console.log(`Macbook2 cost: ${macbook2.cost()}`);
