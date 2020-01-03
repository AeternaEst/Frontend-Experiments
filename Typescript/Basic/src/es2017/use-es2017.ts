
/**
 * The padStart method was first available in es2017, so in order to tell typescript
 * to compile this code we will add 'es2017' to the lib array in tsconfig.
 * This will also require a polyfill at runtime like ts-polyfill or jscore
 */

const runUseEs7 = (): void => {

  const myString = '21';
  const myStringResult = myString.padStart(8, '0');

  console.log(myStringResult);
}

export default runUseEs7;