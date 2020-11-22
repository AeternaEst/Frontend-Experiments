import {
  FetchCriticalMessageAction,
  userActions,
  FETCH_CRITICAL_MESSAGE,
} from "../actions/user-actions";
import { call, race, put, takeLatest } from "redux-saga/effects";
import UserService from "../services/user-service";

function* fetchCriticalMessage(userService: UserService, action: FetchCriticalMessageAction) {
  try {
    const criticalMessage: string = yield race([
      call(userService.getSecurityMessage, 0),
      call(userService.getSecurityMessage, 1),
      call(userService.getSecurityMessage, 2),
    ]);
    yield put(userActions.fetchCriticalMessageSuccessAction(criticalMessage));
  } catch {
    yield put(
      userActions.fetchCriticalMessageFailureAction(
        "Unable to get critical message"
      )
    );
  }
}

export default function* userSaga(userService: UserService) {
  yield takeLatest(FETCH_CRITICAL_MESSAGE, fetchCriticalMessage, userService);
}
