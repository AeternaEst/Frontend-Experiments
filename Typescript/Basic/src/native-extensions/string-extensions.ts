
String.prototype.toLower = function(): string {
  return this.toLowerCase();
}

function runExtension(): void {
  const convertedString = "Hello World".toLower();

  console.log(convertedString);
}

export default runExtension;