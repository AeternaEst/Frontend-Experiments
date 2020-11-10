import { State } from "../reducers/root-reducer";

export const loginSelectors = {
    activeUser: (state: State) => state.loginState.activeUser,
    unsuccessfulLogin: (state: State) => state.loginState.unsuccessfulLogin,
    isLoginInProgress: (state: State) => state.loginState.isLoginInProgress,
}