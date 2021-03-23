/* Actions */
const SET_MESSAGE = "SET_MESSAGE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

/* Action types */
interface SetMessageAction {
  type: typeof SET_MESSAGE;
  message: string;
}

interface ClearMessageAction {
  type: typeof CLEAR_MESSAGE;
}

type DeprecatedReducerTwoActions = SetMessageAction | ClearMessageAction;

/* Action creators */
const setMessage = (message: string): SetMessageAction => ({
  type: SET_MESSAGE,
  message,
});

const clearMessage: ClearMessageAction = {
  type: CLEAR_MESSAGE,
};

export const deprecatedReducerTwoActions = {
  setMessage,
  clearMessage,
};

/* State */
export interface DeprecatedReducerTwoState {
  message: string | undefined;
}

const defaultState: DeprecatedReducerTwoState = {
  message: undefined,
};

/* Reducer */
const deprecatedReducerTwo = (
  state = defaultState,
  action: DeprecatedReducerTwoActions
): DeprecatedReducerTwoState => {
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
