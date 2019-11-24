
interface Person {
  name: string;
}

interface Animal {
  name: string;
}

interface Building {
  name: string;
  size: number;
}

const log = (person: Person): void => console.log(person.name);

function typeChecking(): void {
  const person: Person = { name: "Gannicus" };
  const animal: Animal = { name: "Simba" };
  const building: Building = { name: "White House", size: 10 };
  const custom = {
    name: "Custom",
    doSomething: function(): void {
      console.log(this.name);
    }
  }

  log(person);
  log(animal);
  log(building);
  log(custom);
}

export default typeChecking;