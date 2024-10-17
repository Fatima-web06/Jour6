const car = {
    color: 'grey',
    model: 'DB5',
    brand: 'Aston Martin',
    logInfo() {
      console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
    }
  };
  const agent = {
    name: 'James Bond',
    code: '007',
    age: 57,
    car: car,
    logInfo() {
      console.log(`Agent information: ${this.name}, ${this.code}, ${this.age}`);
      console.log(`${this.name}'s Car information: ${this.car.color}, ${this.car.model}, ${this.car.brand}`);
    }
  };
  agent.logInfo();
  agent.car.logInfo();
