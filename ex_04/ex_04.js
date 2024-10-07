function updateLicensePlates(agent, plates) {
    agent.car = { licensePlates: plates }; 
    return agent; 
}

function showLicensePlates(agent) {
    const ul = document.createElement('ul'); 

    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li'); 
        li.textContent = plate; 
        ul.appendChild(li); // 
    });

    document.body.appendChild(ul); 
}

let bond = {}; 
let plates = ['LU 6789', '4711-EA-62', 'BMT 216A']; 
bond = updateLicensePlates(bond, plates); 
showLicensePlates(bond); 
