
/* Actions */
const SET_MESSAGE = "SET_MESSAGE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

/* Action creators */
const setMessage = (message: string) => {
  return {
    type: SET_MESSAGE,
    message: message,
  };
};

const clearMessage = {
  type: CLEAR_MESSAGE,
};

export const deprecatedReducerTwoActions = {
  setMessage: setMessage,
  clearMessage: clearMessage,
};

/* Action types */
type SetMessageActionType = ReturnType<typeof setMessage>;

export interface DeprecatedReducerTwoState {
  message: string | undefined;
}

const defaultState: DeprecatedReducerTwoState = {
  message: undefined,
};

const deprecatedReducerTwo = (
  state = defaultState,
  action: SetMessageActionType
) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        message: action.message,
      };
    case CLEAR_MESSAGE:
      return {
        message: undefined,
      };
    default:
      return state;
  }
};

export default deprecatedReducerTwo;
