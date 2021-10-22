class Car {
  constructor(fuelType, maxSpeed) {
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
  }
}

class Truck {
  constructor(fuelType, maxSpeed, maxContainerWeight) {
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
    this.maxContainerWeight = maxContainerWeight;
  }
}

class VehicleFactory {
  createVehicle(type, props) {
    switch (type) {
      case 'car':
        return new Car(props.fuelType, props.maxSpeed);
      case 'truck':
        return new Truck(
          props.fuelType,
          props.maxSpeed,
          props.maxContainerWeight
        );
    }
  }
}

const vehicleFactory = new VehicleFactory();

const car = vehicleFactory.createVehicle('car', {
  fuelType: 'petrol',
  maxSpeed: '200km/h'
});

const truck = vehicleFactory.createVehicle('truck', {
  fuelType: 'diesel',
  maxSpeed: '100km/h',
  maxContainerWeight: 300
});

console.log('car', car);
console.log('truck', truck);
