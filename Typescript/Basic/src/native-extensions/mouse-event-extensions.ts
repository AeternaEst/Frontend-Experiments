
MouseEvent.prototype.logCordinates = function(): void {
  console.log(`Clicked Cordinates: x: ${this.x}, y: ${this.y}`)
}

const runExtension = (): void => {
  const body = document.body;

  body.addEventListener("click", (e: MouseEvent) => e.logCordinates());
}

export default runExtension;