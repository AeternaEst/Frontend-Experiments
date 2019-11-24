
/**
 * Base function for implementing the mixin pattern
 * @param derivedCtor This is your subclass implementing the base classes
 * @param baseCtors This is an array of your base classes with the properties you cant to transfer
 */
function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
    });
  });
}

class Print {
  print(): void {
    console.log("printing...");
  }
}

class Copy {
  copy(): void {
    console.log("copying...");
  }
}

class Scan {
  scan(): void {
    console.log("scanning...");
  }
}

class SuperPrinter implements Print, Copy, Scan {}

interface SuperPrinter extends Print, Copy, Scan {}

class BasicPrinter implements Print {}

interface BasicPrinter extends Print, Copy {}

function mixins(): void {
  applyMixins(SuperPrinter, [Print, Copy, Scan]);
  applyMixins(BasicPrinter, [Print]);

  const superPrinter = new SuperPrinter();
  const basicPrinter = new BasicPrinter();

  superPrinter.copy();
  superPrinter.scan();
  superPrinter.print();
  basicPrinter.print();
}

export default mixins;