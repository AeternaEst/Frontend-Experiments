const setMessage = (message: string) => {
  return {
    type: "SET_MESSAGE",
    message: message,
  };
};

const clearMessage = {
  type: "CLEAR_MESSAGE",
};

export const deprecatedReducerTwoActions = {
  setMessage: setMessage,
  clearMessage: clearMessage,
};

export interface DeprecatedReducerTwoState {
  message: string | undefined;
}

const defaultState: DeprecatedReducerTwoState = {
  message: undefined,
};

const deprecatedReducerTwo = (
  state = defaultState,
  action: { type: string; message: string }
) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        message: action.message,
      };
    case "CLEAR_MESSAGE":
      return {
        message: undefined,
      };
    default:
      return state;
  }
};

export default deprecatedReducerTwo;
