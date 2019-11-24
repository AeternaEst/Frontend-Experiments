
interface Institution {
  name: string;
}

class Bank implements Institution {
  constructor(public name: string, public amountOfMoney: number) {}
}

class University implements Institution {
  constructor(public name: string, public address: string) {}
}

export function isOfType<T>(type: any, property: keyof T): type is T {
  return (type as T)[property] !== undefined;
}

export const ofType = <T>(type: any, property: keyof T): type is T => (type as T)[property] !== undefined;

function genericTypeGuard(): void {
  const bank = new Bank("Danske Bank", 10000000) as Institution;
  const university = new University("CBS", "Bredgade 18") as Institution;

  if(isOfType<Bank>(bank, "amountOfMoney")) {
    console.log(`${bank.name} owns ${bank.amountOfMoney} amount of money`)
  }

  if(ofType<University>(university, "address")) {
    console.log(`${university.name} are located on ${university.address}`)
  }
}

export default genericTypeGuard;