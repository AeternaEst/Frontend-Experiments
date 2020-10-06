import { put, takeEvery, select } from "redux-saga/effects";
import PropertyService from "../services/property-service";
import { State } from "../reducers/root-reducer";
import {
  FETCH_PROPERTIES_REQUEST,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
  AddFavoritePropertyRequestAction,
  AddPropertyCommentRequestAction,
  propertyActions
} from "../actions/property-actions";

const propertyService = new PropertyService();

/* Saga actions */
function* fetchProperties() {
  try {
    const properties = yield propertyService.getProperties();
    yield put(propertyActions.setProperties(properties));
  } catch (e) {
    throw new Error("Error fetching properties");
  }
}

function* addFavoriteProperty(action: AddFavoritePropertyRequestAction) {
  try {
    yield propertyService.addToFavorite(action.propertyId);
    yield put(propertyActions.fetch);
    yield put(
      propertyActions.setAddFavoritePropertySuccess(action.propertyId)
    );
  } catch (e) {
    throw new Error("Error adding favorite property");
  }
}

function* addPropertyComment(action: AddPropertyCommentRequestAction) {
  try {
    const user = yield select((state: State) => state.loginState.activeUser);
    yield propertyService.addComment(action.propertyId, {
      text: action.comment,
      user: user,
    });
    yield put(propertyActions.fetch);
    yield put(propertyActions.setAddPropertyCommentSuccess);
  } catch (e) {
    throw new Error("Error adding property comment");
  }
}

function* propertySaga() {
  yield takeEvery(FETCH_PROPERTIES_REQUEST, fetchProperties);
  yield takeEvery(ADD_FAVORITE_PROPERTY_REQUEST, addFavoriteProperty);
  yield takeEvery(ADD_PROPERTY_COMMENT_REQUEST, addPropertyComment);
}

export default propertySaga;
