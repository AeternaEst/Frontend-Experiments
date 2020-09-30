import { Property } from "../types/property";
import {
  actionCreator,
  reducerCreator,
  ReducerParams,
  HandlerParams,
} from "../utils/redux-utils";
import {
  FETCH_PROPERTIES_SUCCESS,
  ADD_PROPERTY_COMMENT_SUCCESS,
  ADD_FAVORITE_PROPERTY_SUCCESS,
  FETCH_PROPERTIES_REQUEST,
  FetchPropertiesSuccessAction,
  AddPropertyCommentSuccessAction,
  AddFavoritePropertySuccessAction,
  FetchPropertiesRequestAction,
  AddFavoritePropertyRequestAction,
  AddPropertyCommentRequestAction,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
} from "../actions/property-actions";

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

// /* State */
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

// /* Reducer */
const reducerMapping: ReadonlyArray<HandlerParams<
  PropertyState,
  PropertyActions
>> = [
  {
    type: FETCH_PROPERTIES_REQUEST,
    handle: (state, action) => {
      return {
        ...state,
        isFetching: true,
      };
    },
  },
  {
    type: FETCH_PROPERTIES_SUCCESS,
    handle: (state, action: FetchPropertiesSuccessAction) => {
      return {
        ...state,
        properties: [...action.properties],
        isFetching: false,
      };
    },
  },
  {
    type: ADD_FAVORITE_PROPERTY_REQUEST,
    handle: (state, action: AddFavoritePropertyRequestAction) => {
      return {
        ...state,
        currentFavoritesBeingAdded: [
          ...state.currentFavoritesBeingAdded,
          action.propertyId,
        ],
      };
    },
  },
  {
    type: ADD_FAVORITE_PROPERTY_SUCCESS,
    handle: (state, action: AddFavoritePropertySuccessAction) => {
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
    },
  },
  {
    type: ADD_PROPERTY_COMMENT_REQUEST,
    handle: (state, action) => {
      return {
        ...state,
        isAddingComment: true,
      };
    },
  },
  {
    type: ADD_PROPERTY_COMMENT_SUCCESS,
    handle: (state, action) => {
      return {
        ...state,
        isAddingComment: false,
      };
    },
  },
];

const propertyReducer = reducerCreator<PropertyState, PropertyActions>(
  defaultState,
  reducerMapping
);

export default propertyReducer;
