
/**
 * Parameters returns a tuple of the parameters of a function.
 * A common use case it to copy parameters from a similar function
 */

class Dog {
  constructor(public name: string, public age: number) {

  }
}

function createDog(...params: ConstructorParameters<typeof Dog>): Dog {
  return new Dog(
    params[0],
    params[1]
  )
}

function createDogAsync(...params: Parameters<typeof createDog>): Promise<Dog> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createDog(...params))
    }, 1000)
  });
}

function logDog(...params: Parameters<typeof createDog>): void {
  console.log(`The dog's name is ${params[0]} and it is ${params[1]} years old`);
}

const runParameters = (): void => {
  const lassie = createDog("Lassie", 10);
  createDogAsync("King", 7).then(result => {
    logDog(result.name, result.age);
    logDog(lassie.name, lassie.age);
  })
}

export default runParameters;