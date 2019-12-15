
/**
 * Removes the union type between T and U. The properties not in the union are left.
 * This create a string union type
 */

interface Person {
  name: string;
  age: number;
  job: string;
}

type Name = Exclude<'id' | 'name', 'id'> /* Remove id, so only name is allowed */
type OnlyThree = Exclude<1 | 2 | 3, 1 | 2>; /* The union type is 1 and 2, so those values are removed. That leaves 3 */
type Age = Exclude<keyof Person, "job" | "name">; /* Removes job and name properties, so only age is left */

/* This is how exclude is used in the Omit utility type */
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

const runExclude = (): void => {
  const name: Name = "name";
  const onlyThree: OnlyThree = 3;

  const age: Age = "age";

  const personWithoutJob: MyOmit<Person, "job"> = {
    name: "Johnny",
    age: 25
  }

  console.log(name);
  console.log(onlyThree);
  console.log(age);
  console.log(`${personWithoutJob.name} is ${personWithoutJob.age} and dosen't have a job`);
}

export default runExclude;