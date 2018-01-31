class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = []; //floors where the elevator must stop
    this.direction = "";
    this.waitingList = []; //persons waiting the elevator
    this.passengers = []; //persons inside teh elevator
  }

  start() {
    () =>
      setInterval(() => {
        this.update();
      }, 1000);
  }

  stop() {
    clearInterval(
      setInterval(() => {
        this.update();
      }, 1000)
    );
  }

  _passengersEnter() {
    if (this.waitingList.length !== 0) {
      let personsEntering = this.waitingList.filter(
        passenger => passenger.originFloor === this.floor
      );
      for (let i = 0; i < personsEntering.length; i++) {
        console.log(`${personsEntering[i].name} has just entered the elevator`);
        this.passengers.push(personsEntering[i]);
        this.requests.push(personsEntering[i].destinationFloor);
        this.requests = this.requests.filter(floor => floor !== this.floor);
      }
      this.waitingList = this.waitingList.filter(
        passenger => passenger.originFloor !== this.floor
      );
    }
  }

  _passengersLeave() {
    let personsLeaving = this.passengers.filter(
      passenger => passenger.destinationFloor === this.floor
    );
    for (let i = 0; i < personsLeaving.length; i++) {
      console.log(`${personsLeaving[i].name} has left the elevator`);
      this.requests = this.requests.filter(floor => floor !== this.floor);
    }
    this.passengers = this.passengers.filter(
      passenger => passenger.destinationFloor !== this.floor
    );
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "up";
    } else {
      console.log("you already reached the last floor");
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
      this.direction = "down";
    } else {
      console.log("you already reached the ground floor");
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  update() {
    this.log(this.direction, this.floor);
  }

  log() {
    console.log(`Direction:${this.direction} | Floor:${this.floor}`);
  }
}

module.exports = Elevator;
