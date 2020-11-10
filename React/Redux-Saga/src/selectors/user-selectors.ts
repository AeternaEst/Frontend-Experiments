import { State } from "../reducers/root-reducer";

export const userSelectors = {
  criticalmessage: (state: State) => state.user.criticalMessage,
  isLoadingCriticalMessage: (state: State) => state.user.isLoadingMessage,
};
