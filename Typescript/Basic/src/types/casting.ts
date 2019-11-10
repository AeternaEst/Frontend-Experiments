
interface Animal {
  name: string;
}

interface Dog extends Animal {
    age: number;
    printFavoriteFood: () => void;   
}

interface Cat extends Animal {
    printFavoriteFood: () => void;
}

const dog: Dog = {
  name: "Skippy",
  age: 10,
  printFavoriteFood: () => console.log("Doggy bone"),
}

const cat: Cat = {
  name: "Kitty",
  printFavoriteFood: () => console.log("Tuna")
}

function animals(): void {
  const anotherDog: Dog = cat as Dog;
  const anotherCat: Cat = dog as Cat;

  anotherDog.printFavoriteFood();
  anotherCat.printFavoriteFood();
}

export default animals;