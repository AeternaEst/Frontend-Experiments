import { AnyAction } from "redux";

/* Actions */
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

/* Action creators */
const increment: AnyAction = {
  type: INCREMENT,
};

const decrement: AnyAction = {
  type: DECREMENT,
};

export const deprecatedReducerOneActions = {
  increment: increment,
  decrement: decrement,
};

export interface DeprecatedReducerOneState {
  counter: number;
}

const defaultState: DeprecatedReducerOneState = {
  counter: 0,
};

const deprecatedReducerOne = (
  state = defaultState,
  action: AnyAction
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default deprecatedReducerOne;
