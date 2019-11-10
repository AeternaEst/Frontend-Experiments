
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

function structuralTyping(): void {
  const person: Person = { name: "Gannicus" };
  const animal: Animal = { name: "Simba" };
  const building: Building = { name: "White House", size: 10 };

  log(person);
  log(animal);
  log(building);
}

export default structuralTyping;