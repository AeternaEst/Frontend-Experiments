
/**
 * Extracts a property as a string. This is not the same as Pick,
 * since this only return properties as strings
 */

type VehicleTypes = "car" | "plane" | "boat";

interface Vehicle {
  type: VehicleTypes;
  model: string;
  speed: number;
  year: Date;
}

interface Car {
  speed: number;
  year: Date;
}

type RestrictedVehicle = Extract<VehicleTypes, "car" | "boat">;
type VehicleType = Extract<keyof Vehicle, "type" | "model">;

const runExtract = (): void => {
  const vehicle: RestrictedVehicle = "car";
  const vehicleType: VehicleType = "type";

  console.log(vehicle);
  console.log(vehicleType);
}

export default runExtract;