/* eslint-disable max-len */
import { actionCreator } from "../utils/redux-utils";

export const FETCH_CRITICAL_MESSAGE = "FETCH_CRITICAL_MESSAGE";
export const FETCH_CRITICAL_MESSAGE_SUCCESS = "FETCH_CRITICAL_MESSAGE_SUCCESS";
export const FETCH_CRITICAL_MESSAGE_FAILURE = "FETCH_CRITICAL_MESSAGE_FAILURE";

export interface FetchCriticalMessageAction {
  type: typeof FETCH_CRITICAL_MESSAGE;
}

export interface FetchCriticalMessageSuccessAction {
  type: typeof FETCH_CRITICAL_MESSAGE_SUCCESS;
  criticalMessage: string;
}

export interface FetchCriticalMessageFailureAction {
  type: typeof FETCH_CRITICAL_MESSAGE_FAILURE;
  criticalMessage: string;
}

export type UserActions =
  | FetchCriticalMessageAction
  | FetchCriticalMessageSuccessAction
  | FetchCriticalMessageFailureAction;

const fetchCriticalMessageAction: FetchCriticalMessageAction = actionCreator(
  FETCH_CRITICAL_MESSAGE
);

const fetchCriticalMessageSuccessAction = (
  criticalMessage: string
): FetchCriticalMessageSuccessAction =>
  actionCreator(FETCH_CRITICAL_MESSAGE_SUCCESS, { criticalMessage });

const fetchCriticalMessageFailureAction = (
  criticalMessage: string
): FetchCriticalMessageFailureAction =>
  actionCreator(FETCH_CRITICAL_MESSAGE_FAILURE, { criticalMessage });

export const userActions = {
  fetchCriticalMessageAction,
  fetchCriticalMessageSuccessAction,
  fetchCriticalMessageFailureAction,
};
