import { Property } from "../types/property";
import { actionCreator } from "../utils/redux-utils";
import {
  AddFavoritePropertyRequestAction,
  AddPropertyCommentRequestAction,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
  FetchPropertiesRequestAction,
  FETCH_PROPERTIES_REQUEST,
} from "../sagas/property-saga";

/* Actions */
const FETCH_PROPERTIES_SUCCESS = "FETCH_PROPERTIES_SUCCESS";
const ADD_FAVORITE_PROPERTY_SUCCESS = "ADD_FAVORITE_PROPERTY_SUCCESS";
const ADD_PROPERTY_COMMENT_SUCCESS = "ADD_PROPERTY_COMMENT_SUCCESS";

/* Action types */
interface FetchPropertiesSuccessAction {
  type: typeof FETCH_PROPERTIES_SUCCESS;
  properties: Property[];
}

interface AddPropertyCommentSuccessAction {
  type: typeof ADD_PROPERTY_COMMENT_SUCCESS;
}

interface AddFavoritePropertySuccessAction {
  type: typeof ADD_FAVORITE_PROPERTY_SUCCESS;
  propertyId: number;
}

type PropertyActions =
  | FetchPropertiesSuccessAction
  | AddPropertyCommentSuccessAction
  | FetchPropertiesRequestAction
  | AddFavoritePropertyRequestAction
  | AddFavoritePropertySuccessAction
  | AddPropertyCommentRequestAction;

/* Action creators */
const setProperties = (properties: Property[]): FetchPropertiesSuccessAction =>
  actionCreator(FETCH_PROPERTIES_SUCCESS, { properties });

const setAddPropertyCommentSuccess: AddPropertyCommentSuccessAction = actionCreator(
  ADD_PROPERTY_COMMENT_SUCCESS
);

const setAddFavoritePropertySuccess = (
  propertyId: number
): AddFavoritePropertySuccessAction =>
  actionCreator(ADD_FAVORITE_PROPERTY_SUCCESS, { propertyId });

export const propertyReducerActions = {
  setProperties,
  setAddPropertyCommentSuccess,
  setAddFavoritePropertySuccess,
};

/* State */
export interface PropertyState {
  properties: Property[];
  isFetching: boolean;
  currentFavoritesBeingAdded: number[];
  isAddingComment: boolean;
}

const defaultState: PropertyState = {
  properties: [],
  isFetching: false,
  currentFavoritesBeingAdded: [],
  isAddingComment: false,
};

/* Reducer */
const propertyReducer = (
  state = defaultState,
  action: PropertyActions
): PropertyState => {
  console.log("propertyReducer", action);
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        properties: [...action.properties],
        isFetching: false,
      };
    case ADD_FAVORITE_PROPERTY_REQUEST:
      return {
        ...state,
        currentFavoritesBeingAdded: [
          ...state.currentFavoritesBeingAdded,
          action.propertyId,
        ],
      };
    case ADD_FAVORITE_PROPERTY_SUCCESS:
      const indexToRemove = state.currentFavoritesBeingAdded.findIndex(
        (id) => id === action.propertyId
      );
      const updatedFavorites = [
        ...state.currentFavoritesBeingAdded.slice(0, indexToRemove),
        ...state.currentFavoritesBeingAdded.slice(
          indexToRemove + 1,
          state.currentFavoritesBeingAdded.length
        ),
      ];
      return {
        ...state,
        currentFavoritesBeingAdded: updatedFavorites,
      };
    case ADD_PROPERTY_COMMENT_REQUEST:
      return {
        ...state,
        isAddingComment: true,
      };
    case ADD_PROPERTY_COMMENT_SUCCESS:
      return {
        ...state,
        isAddingComment: false,
      };
    default:
      return state;
  }
};

export default propertyReducer;
