
/**
 * See index.d.ts in the folder root  for the definition.
 * Typescript will throw an error without the type definition file
 */
String.prototype.toLower = function(): string {
  return this.toLowerCase();
}

function runExtension(): void {
  const convertedString = "Hello World".toLower();

  console.log(convertedString);
}

export default runExtension;