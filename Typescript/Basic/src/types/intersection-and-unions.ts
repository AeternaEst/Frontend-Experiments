import { isOfType } from "../generics/type-guards";


interface Human {
  name: string;
  age: number;
  job: "developer" | "teacher" | "mechanic" | "gladiator";
}

class Loggable {

  constructor(public instanceId: string) {}

  print (): void {
    for(const key in this) {
      const value = this[key];
      if(typeof(value) !== "function") {
        console.log(value);
      }
    }
  } 
}

function union(param: Human | Loggable): void {
  if(isOfType<Human>(param, "job")) {
    console.log(`My name is ${param.name}, i am ${param.age} years old and i work as a ${param.job}`);
  }

  if(param instanceof (Loggable)) {
    param.print();
  }
}

function intersection(human: Human, loggable: Loggable): Human & Loggable {
  const intersectionType: Human & Loggable = {
    ...human,
    ...loggable,
    print: loggable.print
  };


  return intersectionType;
}

function run(): void {
  const human: Human = {
    name: "Spartacus",
    age: 35,
    job: "gladiator"
  }
  const loggable = new Loggable("instance197456");

  union(human);
  union(loggable);

  const combined = intersection(human, loggable);
  console.log(combined.job);
  combined.print();
}

export default run;

