
/**
 * Setting the strictFunctionTypes flag removes the possibility that
 * a wrong sub/super type could be passed in as a parameter.
 */

type MyRequest = { url: string}
type ExtendedRequest = MyRequest & { extraArg: string };
type Handler = (request: MyRequest) => Response

/* Dissallowed with strictFunctionTypes. Must change request to MyRequest */
const myHandler: Handler = (request: ExtendedRequest) => {
  request.extraArg.toUpperCase();
  return null as any;
}

interface Animal {
  race: string;
}

interface Dog extends Animal {
  run: () => void;
}

type AnimalFunction = (animal: Animal) => void;

const dogFn: AnimalFunction = (dog: Dog): void => {
  dog.run();
}

const runStrictFunctionTypes = (): void => {
  const r: MyRequest = {
    url: "www.google.com"
  }
  /* This causes an error with strictFunctionTypes */
  myHandler(r);

  const animal: Animal = {
    race: "Zebra"
  };
  /* This causes an error with strictFunctionTypes */
  dogFn(animal);
}

export default runStrictFunctionTypes;