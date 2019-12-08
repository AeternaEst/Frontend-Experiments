
HTMLCollection.prototype.forEach = function(callback: (element: Element) => void): void {
  for(let i = 0; i < this.length; i++) {
    callback(this.item(i));
  }
}

function runExtension(): void {
  const elements = document.getElementsByTagName("body");

  elements.forEach(element => console.log(element));
}

export default runExtension;