
interface Animal {
  race: string;
  attack: () => void;
}

class Human {
  constructor(private name: string) {}
}

class Lion implements Animal {
  constructor(public race: string) {
    
  }

  attack(): void {
    console.log(`${this.race} does a claw attack`);
  }
}

class Rhino implements Animal {
  constructor(public race: string) {
    
  }

  attack(): void {
    console.log(`${this.race} does a impale attack`);
  }
}

class AnimalHabitat<T extends Animal> {
  private animals: T[] = [];

  addAnimal(animal: T): void {
    this.animals.push(animal);
  }

  animalAttacks(): void {
    this.animals.forEach(animal => animal.attack());
  }
}

function constraints(): void {
  const lion = new Lion("lion");
  const rhino = new Rhino("rhino");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const human = new Human("Spartacus");

  const animalHabitat = new AnimalHabitat();
  animalHabitat.addAnimal(lion);
  animalHabitat.addAnimal(rhino);
  
  animalHabitat.animalAttacks();
}

export default constraints;