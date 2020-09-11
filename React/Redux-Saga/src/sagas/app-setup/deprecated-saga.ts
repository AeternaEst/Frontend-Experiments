import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { deprecatedReducerOneActions } from '../../reducers/app-setup/deprecated-reducer-one';
import { deprecatedReducerTwoActions } from '../../reducers/app-setup/deprecated-reducer-two';
import { AnyAction } from 'redux';

/* Actions */
const REQUEST_INCREMENT = "REQUEST_INCREMENT";
const REQUEST_SET_MESSAGE = "REQUEST_SET_MESSAGE";

/* Action creators*/
const requestIncrement: AnyAction = {
    type: REQUEST_INCREMENT
}

const requestMessage = (message: string): AnyAction => {
    return {
        type: REQUEST_SET_MESSAGE,
        message: message
    }
}

export const deperactedSagaActions = {
    requestIncrement,
    requestMessage
}

/* Action types */
type SetMessageActionType = ReturnType<typeof requestMessage>;

const timeout = ():Promise<void> => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, 2000);
    })
}

// worker Saga: will be fired on REQUEST_INCREMENT actions
function* requestCountIncrement() {
   try {
      yield timeout();
      yield put(deprecatedReducerOneActions.increment);
   } catch (e) {
      throw new Error("BOOM");
   }
}

// worker Saga: will be fired on REQUEST_SET_MESSAGE actions
function* requestSetMessage(action: SetMessageActionType) {
    try {
       yield timeout();
       yield put(deprecatedReducerTwoActions.setMessage(action.message));
    } catch (e) {
       throw new Error("BOOM");
    }
 }

/*
  Starts requestCountIncrement on each dispatched `REQUEST_INCREMENT` action.
  Allows concurrent increments.
*/
function* deprecatedSaga() {
  yield takeEvery(REQUEST_INCREMENT, requestCountIncrement);
  yield takeEvery(REQUEST_SET_MESSAGE, requestSetMessage);
}

export default deprecatedSaga;