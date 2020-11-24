import { AnyAction } from 'redux';

/* Actions */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/* Action types */
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

type DeprecatedReducerOneActions = IncrementAction | DecrementAction;

/* Action creators */
const increment: IncrementAction = {
  type: INCREMENT,
};

const decrement: DecrementAction = {
  type: DECREMENT,
};

export const deprecatedReducerOneActions = {
  increment,
  decrement,
};

/* State */
export interface DeprecatedReducerOneState {
  counter: number;
}

const defaultState: DeprecatedReducerOneState = {
  counter: 0,
};

/* Reducer */
const deprecatedReducerOne = (
  state = defaultState,
  action: DeprecatedReducerOneActions,
): DeprecatedReducerOneState => {
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
