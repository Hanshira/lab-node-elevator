console.log("I'm executed");
const Elevator = require("./elevator.js");
const Person = require("./person.js");

let elevator = new Elevator();
elevator.floorUp();
elevator.floorUp();

let person1 = new Person("john", 2, 3);
let person2 = new Person("janny", 2, 4);
let person3 = new Person("jany", 0, 6);
elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
console.log(elevator.floor); //2
console.log(elevator.requests);
console.log(elevator.waitingList);

elevator._passengersEnter();
console.log(elevator.passengers);
console.log(elevator.requests);
console.log(elevator.waitingList);

elevator.floorUp();
elevator._passengersLeave();
console.log(elevator.floor); //3
console.log(elevator.passengers);
console.log(elevator.requests);

elevator.floorUp();
elevator._passengersLeave();
console.log(elevator.floor); //4
console.log(elevator.passengers);
console.log(elevator.requests);
console.log(elevator.waitingList);

elevator.floorDown();
elevator.floorDown();
elevator.floorDown();
elevator.floorDown();
elevator._passengersEnter();
console.log(elevator.floor); //0
console.log(elevator.passengers);
console.log(elevator.requests);
