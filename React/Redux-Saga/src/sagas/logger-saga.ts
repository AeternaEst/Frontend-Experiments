import { AnyAction } from "redux";
import { select, takeEvery } from "redux-saga/effects"

function* logActionAndState(action: AnyAction) {
    console.log("Action dispatched: ", action.type);
    const state = yield select();
    console.log("current state: ", state);
}

export function* loggerSaga() {
    yield takeEvery("*", logActionAndState);
}