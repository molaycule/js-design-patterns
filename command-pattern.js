class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo();
  }
}

class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    this.value = value;
    this.calculatorValue = 0;
  }

  execute(calculatorValue) {
    this.calculatorValue = {
      add: calculatorValue + this.value,
      subtract: calculatorValue - this.value,
      multiply: calculatorValue * this.value,
      divide: calculatorValue / this.value
    }[this.commandType];
    return this.calculatorValue;
  }

  undo() {
    this.calculatorValue = {
      add: this.calculatorValue - this.value,
      subtract: this.calculatorValue + this.value,
      multiply: this.calculatorValue / this.value,
      divide: this.calculatorValue * this.value
    }[this.commandType];
    return this.calculatorValue;
  }
}

const calculator = new Calculator();
calculator.executeCommand(new Command('add', 10));
console.log('After `add` command: ', calculator.value);
calculator.undo();
console.log('After `undo` operation: ', calculator.value);
