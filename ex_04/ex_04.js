let agent = {
    firstName: 'James',
    lastName: 'Bond',
    car: {
        brand: 'Aston Martin',
        model: 'DB5',
        color: 'Silver',
        power: '282 hp'
    }
};
function updateLicensePlates(agent, plate) {
    if (agent.car) {
        agent.car.licensePlates = plate;
    }
    return agent;
};
function showLicensePlates(agent) {
    if (agent.car && agent.car.licensePlates) {
        let platesContainer = document.querySelector(".plates-container");
        agent.car.licensePlates.forEach(function(plate) {
            let li = document.createElement("li");
            li.textContent = plate;
            platesContainer.appendChild(li);
        });
    }
}
updateLicensePlates(agent, ['LU 6789', '4711-EA-62', 'BMT 216A']);
showLicensePlates(agent);
