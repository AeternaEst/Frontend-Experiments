import { State } from '../reducers/root-reducer';

const loginSelectors = {
  activeUser: (state: State) => state.loginState.activeUser,
  unsuccessfulLogin: (state: State) => state.loginState.unsuccessfulLogin,
  isLoginInProgress: (state: State) => state.loginState.isLoginInProgress,
  currentlyTypedInUserName: (state: State) => state.loginState.currentlyTypedInUserName,
};

export default loginSelectors;
