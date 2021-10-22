class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }

  logMessage(message) {
    this.logs.push(message);
    console.log(`Log message => ${message}`);
  }

  logCount() {
    console.log(`Log count =>  ${this.logs.length}`);
  }
}

const logger1 = new Logger();
Object.freeze(logger1);
logger1.logMessage('First message');
logger1.logCount();

const logger2 = new Logger();
Object.freeze(logger2);
logger2.logMessage('Second message');
logger2.logCount();

console.log(logger1 === logger2); // returns true indicating instances are the same
