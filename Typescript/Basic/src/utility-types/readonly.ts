
interface Animal {
  species: "lion" | "rhino" | "elephant";
  name: string;
}

function createReadonlyAnimal(animal: Animal): Readonly<Animal> {
  return animal;
}

function runReadonly(): void {
  const lion: Animal = {
    species: "lion",
    name: "Leo"
  }

  lion.name = "Louis";
  console.log(lion.name);

  const readonlyLion = createReadonlyAnimal(lion);
  //No longer allowed to reasing variables
  // readonlyLion.name = "Updated";

  console.log(readonlyLion.name);
}

export default runReadonly;