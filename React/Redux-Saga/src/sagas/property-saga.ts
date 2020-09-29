import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { AnyAction } from "redux";
import LoginService from "../services/login-service";
import { loginReducerActions } from "../reducers/login-reducer";
import PropertyService from "../services/property-service";
import { propertyReducerActions } from "../reducers/property-reducer";
import { State } from "../reducers/root-reducer";
import { actionCreator } from "../utils/redux-utils";

/* Actions */
const FETCH_PROPERTIES = "FETCH_PROPERTIES";
const ADD_FAVORITE_PROPERTY = "ADD_FAVORITE_PROPERTY";
const ADD_PROPERTY_COMMENT = "ADD_PROPERTY_COMMENT";

/* Action types */
interface FetchPropertiesAction {
  type: typeof FETCH_PROPERTIES;
}

interface AddFavoritePropertyAction {
  type: typeof ADD_FAVORITE_PROPERTY;
  propertyId: number;
}

interface AddPropertyCommentAction {
  type: typeof ADD_PROPERTY_COMMENT;
  propertyId: number;
  comment: string;
}

/* Action creators*/
const addFavoritePropertyAction = (
  propertyId: number
): AddFavoritePropertyAction =>
  actionCreator(ADD_FAVORITE_PROPERTY, { propertyId });

const addPropertyCommentAction = (
  propertyId: number,
  comment: string
): AddPropertyCommentAction =>
  actionCreator(ADD_PROPERTY_COMMENT, { propertyId, comment });

const fetchPropertiesAction: FetchPropertiesAction = actionCreator(
  FETCH_PROPERTIES
);

export const propertyActions = {
  addToFavorite: addFavoritePropertyAction,
  addComment: addPropertyCommentAction,
  fetch: fetchPropertiesAction,
};

const propertyService = new PropertyService();

/* Saga actions */
function* fetchProperties(action: FetchPropertiesAction) {
  try {
    yield put(propertyReducerActions.isFetchingProperties(true));
    const properties = yield propertyService.getProperties();
    yield put(propertyReducerActions.setProperties(properties));
    yield put(propertyReducerActions.isFetchingProperties(false));
  } catch (e) {
    throw new Error("Error fetching properties");
  }
}

function* addFavoriteProperty(action: AddFavoritePropertyAction) {
  try {
    yield put(
      propertyReducerActions.currentFavoritesBeingAdded(action.propertyId, true)
    );
    yield propertyService.addToFavorite(action.propertyId);
    yield put(propertyActions.fetch);
    yield put(
      propertyReducerActions.currentFavoritesBeingAdded(
        action.propertyId,
        false
      )
    );
  } catch (e) {
    throw new Error("Error adding favorite property");
  }
}

function* addPropertyComment(action: AddPropertyCommentAction) {
  try {
    yield put(propertyReducerActions.isAddingComment(true));
    const user = yield select((state: State) => state.loginState.activeUser);
    yield propertyService.addComment(action.propertyId, {
      text: action.comment,
      user: user,
    });
    yield put(propertyActions.fetch);
    yield put(propertyReducerActions.isAddingComment(false));
  } catch (e) {
    throw new Error("Error adding property comment");
  }
}

function* propertySaga() {
  yield takeEvery(FETCH_PROPERTIES, fetchProperties);
  yield takeEvery(ADD_FAVORITE_PROPERTY, addFavoriteProperty);
  yield takeEvery(ADD_PROPERTY_COMMENT, addPropertyComment);
}

export default propertySaga;
