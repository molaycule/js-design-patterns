class RideBookingStrategy {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  calculate() {
    return this.strategy.calculate();
  }
}

class Uber {
  calculate() {
    // uber calculations
    return 2.5;
  }
}

class Bolt {
  calculate() {
    // bolt calculations
    return 1.8;
  }
}

const rideBookingStrategy = new RideBookingStrategy();
rideBookingStrategy.setStrategy(new Uber());
console.log('Uber:', rideBookingStrategy.calculate());
rideBookingStrategy.setStrategy(new Bolt());
console.log('Bolt:', rideBookingStrategy.calculate());
