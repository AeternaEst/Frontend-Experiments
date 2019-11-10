import { logProps } from "../utils";

interface BaseVehicle {
  type: string;
  speed: number;
  printStats: () => void;
}

interface CarVehicle extends BaseVehicle {
  model: string;
}

interface BicycleVehicle extends BaseVehicle {
  numOfGears: number;
}

class Vehicle implements BaseVehicle {
  constructor(public type: string, public speed: number){
    this.printStats = this.printStats.bind(this);
  }

  printStats(): void {
    logProps(this);
  }
}

class Car extends Vehicle implements CarVehicle {
  constructor(type: string, speed: number, public model: string) {
    super(type, speed);
    this.printStats = this.printStats.bind(this);
  }

  printStats(): void {
    logProps(this);
  }
}

class Bicycle extends Vehicle implements BicycleVehicle {
  constructor(type: string, speed: number, public numOfGears: number) {
    super(type, speed);
    this.printStats = this.printStats.bind(this);
  }

  printStats(): void {
    logProps(this);
  }
}

function assertion(): void {
  const car = new Car("Car", 150, "VW UP");
  const customCar = {
    type: "Car",
    speed: 150,
    model: "Ford Fiesta",
    printStats: (): void => console.log("custom car")
  }
  const bicycle = new Bicycle("Bicycle", 40, 7);
  const vehicle = new Vehicle("Boat", 300);

  if(car instanceof Car) { //true
    car.printStats();
  }
  if(customCar instanceof Car) { //false
    customCar.printStats();
  }
  if(bicycle instanceof Vehicle) { //true
    bicycle.printStats();
  }

  if("speed" in customCar) { //true
    customCar.printStats();
  }
  if("numOfGears" in vehicle) { //false
    console.log("This should not happen")
  }
}

export default assertion;