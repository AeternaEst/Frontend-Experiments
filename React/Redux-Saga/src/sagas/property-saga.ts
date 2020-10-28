import { put, takeEvery, select, takeLatest, call, take } from "redux-saga/effects";
import PropertyService from "../services/property-service";
import { State } from "../reducers/root-reducer";
import {
  FETCH_PROPERTIES_REQUEST,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
  AddFavoritePropertyRequestAction,
  AddPropertyCommentRequestAction,
  propertyActions,
} from "../actions/property-actions";
import { AppError, ErrorCode } from "../types/app-error";
import { AppUser } from "../types/app-user";
import { Property } from "../types/property";

const propertyService = new PropertyService();

/* Saga actions */
export function* fetchProperties() {
  try {
    const properties: Property[] = yield call(propertyService.getProperties);
    yield put(propertyActions.setPropertiesAction(properties));
  } catch (e) {
    yield put(
      propertyActions.fetchPropertiesErrorAction(
        new AppError(
          "fetchProperties",
          "Error fetching properties",
          ErrorCode.FETCH_PROPERTIES_ERROR
        )
      )
    );
  }
}

export function* addFavoriteProperty(action: AddFavoritePropertyRequestAction) {
  try {
    yield call(propertyService.addToFavorite, action.propertyId);
    yield put(propertyActions.fetch);
    yield put(
      propertyActions.setAddFavoritePropertySuccessAction(action.propertyId)
    );
  } catch (e) {
    yield put(
      propertyActions.addFavoritePropertyErrorAction(
        new AppError(
          "addFavoriteProperty",
          "Error adding favorite",
          ErrorCode.ADD_FAVORITES_ERROR
        )
      )
    );
  }
}

export function* addPropertyComment(action: AddPropertyCommentRequestAction) {
  try {
    const user: AppUser = yield select((state: State) => state.loginState.activeUser);
    yield call(propertyService.addComment, action.propertyId, {
      text: action.comment,
      user,
    });
    yield put(propertyActions.fetch);
    yield put(propertyActions.setAddPropertyCommentSuccessAction);
  } catch (e) {
    yield put(
      propertyActions.setAddPropertyCommentErrorAction(
        new AppError(
          "addPropertyComment",
          "Error adding comment",
          ErrorCode.ADD_COMMENT_ERROR
        )
      )
    );
  }
}

export function* favoriteCounter() {
  for(let i = 0; i < 3; i++) {
    const action = yield take(ADD_FAVORITE_PROPERTY_REQUEST);
    console.log("favorite actions received: ", i);
  }
  yield put(propertyActions.addFavoritePropertyMessageAction())
}

function* propertySaga() {
  yield takeLatest(FETCH_PROPERTIES_REQUEST, fetchProperties);
  yield takeEvery(ADD_FAVORITE_PROPERTY_REQUEST, addFavoriteProperty);
  yield takeEvery(ADD_PROPERTY_COMMENT_REQUEST, addPropertyComment);
}

export default propertySaga;
