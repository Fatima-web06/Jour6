const agent1 = {
    name: "James Bond",
    car: {
        brand: "Aston Martin",
        model: "DB5",
        color: "silver"
    },
    isMatching: function(key, value) {
        return this.car && this.car[key] === value;
    }
};
 
const agent2 = {
    name: "Ethan Hunt",
    car: {
        brand: "BMW",
        model: "M5",
        color: "black"
    },
    isMatching: function(key, value) {
        return this.car && this.car[key] === value;
    }
};
 
const agent3 = {
    name: "Jason Bourne",
    car: {
        brand: "Ford",
        model: "Mustang",
        color: "black"
    },
    isMatching: function(key, value) {
        return this.car && this.car[key] === value;
    }
};
 
function searchCars(agents, key, value) {
    return agents
        .filter(function(agent) {
            return agent.isMatching(key, value);
        })
        .map(function(agent) {
            return agent.car;
        });
}
 
const agents = [agent1, agent2, agent3];
const blackCars = searchCars(agents, 'color', 'black');
console.log(blackCars);
