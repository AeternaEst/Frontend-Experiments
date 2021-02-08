export enum Breakpoint {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large"
}

export const getBreakpointFromWidth = (width: number) => {
  if (width >= 1200) {
    return Breakpoint.LARGE;
  }
  if (width >= 700) {
    return Breakpoint.MEDIUM;
  }
  return Breakpoint.SMALL;
};
