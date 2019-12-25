
/**
 * ReturnType is used to extract the return type from a function
 * InstanceType is used to extract the type created by a constructor function
 */

class Building {
  constructor(public squareFeet: number) {}
}

function findLargestBuilding(buildings: Building[]): Building {
  const copy = [...buildings];
  return copy.sort((first, second) => first.squareFeet < second.squareFeet ? -1 : 1)[buildings.length-1];
}

function logBuilding(building: ReturnType<typeof findLargestBuilding>): void {
  console.log(`The building is ${building.squareFeet} square feet`);
}

type House = InstanceType<typeof Building> & { address: string };

const runReturnAndInstanceType = (): void => {
  const buildings: Building[] = [
    {
      squareFeet: 10
    },
    {
      squareFeet: 50
    },
    {
      squareFeet: 100
    }
  ];

  const largestBuilding = findLargestBuilding(buildings);
  logBuilding(largestBuilding);

  const house: House = {
    squareFeet: 90,
    address: "Secret Adress 40x"
  }
  logBuilding(house);
  console.log(`The address is ${house.address}`);
}

export default runReturnAndInstanceType;

