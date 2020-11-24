import { AnyAction } from 'redux';
import {
  UserActions,
  FETCH_CRITICAL_MESSAGE,
  FETCH_CRITICAL_MESSAGE_SUCCESS,
  FETCH_CRITICAL_MESSAGE_FAILURE,
} from '../actions/user-actions';

export interface UserState {
  criticalMessage: string;
  isLoadingMessage: boolean;
}

const defaultState: UserState = {
  criticalMessage: undefined,
  isLoadingMessage: false,
};

function userReducer(state = defaultState, action: UserActions): UserState {
  switch (action.type) {
    case FETCH_CRITICAL_MESSAGE:
      return {
        ...state,
        isLoadingMessage: true,
      };
    case FETCH_CRITICAL_MESSAGE_SUCCESS:
      return {
        criticalMessage: action.criticalMessage,
        isLoadingMessage: false,
      };
    case FETCH_CRITICAL_MESSAGE_FAILURE:
      return {
        ...state,
        criticalMessage: action.criticalMessage,
        isLoadingMessage: false,
      };
    default:
      return state;
  }
}

export default userReducer;
