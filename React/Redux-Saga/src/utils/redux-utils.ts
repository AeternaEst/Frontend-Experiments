export const actionCreator = <T extends string, P extends object>(
  type: T,
  props?: P
): { type: T } & P => {
  return Object.assign({ type }, props);
};
