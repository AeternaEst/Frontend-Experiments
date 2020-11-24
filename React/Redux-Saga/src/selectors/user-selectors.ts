import { State } from '../reducers/root-reducer';

const userSelectors = {
  criticalmessage: (state: State) => state.user.criticalMessage,
  isLoadingCriticalMessage: (state: State) => state.user.isLoadingMessage,
};

export default userSelectors;
