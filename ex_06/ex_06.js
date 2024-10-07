function searchCars(agents, property, value) {
    return agents
        .filter(agent => agent.car[property] === value)
        .map(agent => agent.car);
}

const agents = [
    { name: 'James Bond', car: { color: 'grey', brand: 'Aston Martin', model: 'DB5' } },
    { name: 'Sherlock Holmes', car: { color: 'black', brand: 'Mercedes', model: 'GLA200' } }
];

const result = searchCars(agents, 'brand', 'Aston Martin');
console.log(result);
