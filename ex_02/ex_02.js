function addCar(agentString, car) {
    const agentObj = JSON.parse(agentString)
    agentObj.car = car;
    
    return agentObj;
}

const agentJSON = '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
const carBrand = "Mercedes";

const updatedAgent = addCar(agentJSON, carBrand);

console.log(updatedAgent);
