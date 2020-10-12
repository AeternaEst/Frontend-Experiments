import { Property } from "../types/property";
import {
  reducerCreator,
  HandlerParams,
} from "../utils/redux-utils";
import {
  FETCH_PROPERTIES_SUCCESS,
  ADD_PROPERTY_COMMENT_SUCCESS,
  ADD_FAVORITE_PROPERTY_SUCCESS,
  FETCH_PROPERTIES_REQUEST,
  FetchPropertiesSuccessAction,
  AddFavoritePropertySuccessAction,
  AddFavoritePropertyRequestAction,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
  PropertyActions, FETCH_PROPERTIES_ERROR, FetchPropertiesErrorAction, AddFavoritePropertyErrorAction, ADD_FAVORITE_PROPERTY_ERROR, ADD_PROPERTY_COMMENT_ERROR, AddPropertyCommentErrorAction
} from "../actions/property-actions";
import { AppError } from "../types/app-error";

export interface PropertyState {
  properties: Property[];
  isFetching: boolean;
  fetchError: AppError | undefined;
  currentFavoritesBeingAdded: number[];
  favoritesError: AppError | undefined;
  isAddingComment: boolean;
  commentError: AppError | undefined;
}

const defaultState: PropertyState = {
  properties: [],
  isFetching: false,
  fetchError: undefined,
  currentFavoritesBeingAdded: [],
  favoritesError: undefined,
  isAddingComment: false,
  commentError: undefined
};

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
        fetchError: undefined
      };
    },
  },
  {
    type: FETCH_PROPERTIES_ERROR,
    handle: (state, action: FetchPropertiesErrorAction) => {
      return {
        ...state,
        isFetching: false,
        fetchError: action.error
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
        favoritesError: undefined
      };
    },
  },
  {
    type: ADD_FAVORITE_PROPERTY_ERROR,
    handle: (state, action: AddFavoritePropertyErrorAction) => {
      return {
        ...state,
        currentFavoritesBeingAdded: [], /* This should only remove the failed one*/
        favoritesError: action.error
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
        commentError: undefined
      };
    },
  },
  {
    type: ADD_PROPERTY_COMMENT_ERROR,
    handle: (state, action: AddPropertyCommentErrorAction) => {
      return {
        ...state,
        isAddingComment: false,
        commentError: action.error
      };
    },
  },
];

const propertyReducer = reducerCreator<PropertyState, PropertyActions>(
  defaultState,
  reducerMapping
);

export default propertyReducer;
