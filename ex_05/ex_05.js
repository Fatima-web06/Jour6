class Car {
    constructor(color, brand, model) {
        this.color = color; 
        this.brand = brand; 
        this.model = model; 
    }

    logInfo() {
        console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
    }
}

class Agent {
    constructor(name, code, age, car) {
        this.name = name; 
        this.code = code; 
        this.age = age; 
        this.car = car; 
    }

    logInfo() {
        console.log(`Agent information: ${this.name}, ${this.code}, ${this.age}`);
        this.car.logInfo(); 
    }
}

const bondCar = new Car('grey', 'DB5', 'Aston Martin');

const agent = new Agent('James Bond', '007', 57, bondCar);

agent.logInfo();
