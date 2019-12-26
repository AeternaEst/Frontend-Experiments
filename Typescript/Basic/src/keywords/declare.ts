
/**
 * The 'declare' keyword is used when importing libraries that does not have 
 * type declarations but you want to use them without typescript errors.
 * NOTE: $clamp is added in the webpack config as a global dependency
 */

declare const $clamp: any;

const runDeclare = (): void => {
  const targetDiv = document.getElementById("truncate");
  console.log(targetDiv);
  console.log($clamp);
  $clamp(targetDiv, {clamp: 2});
}

export default runDeclare;