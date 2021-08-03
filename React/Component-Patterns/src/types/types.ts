/* eslint-disable @typescript-eslint/no-unused-vars */

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
