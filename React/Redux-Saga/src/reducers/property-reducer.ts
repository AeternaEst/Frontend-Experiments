import { Property, PropertyAddress } from '../types/property';
import { reducerCreator, HandlerParams } from '../utils/redux-utils';
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
  PropertyActions,
  FETCH_PROPERTIES_ERROR,
  FetchPropertiesErrorAction,
  AddFavoritePropertyErrorAction,
  ADD_FAVORITE_PROPERTY_ERROR,
  ADD_PROPERTY_COMMENT_ERROR,
  AddPropertyCommentErrorAction,
  ADD_FAVORITE_PROPERTY_MESSAGE,
  AddFavoritePropertyMessageAction,
  GET_PROPERTY_ADDRESS,
  GetAddressAction,
  GET_PROPERTY_ADDRESS_SUCCESS,
  GetAddressSuccessAction,
  GET_PROPERTY_ADDRESS_FAILURE,
  GetAddressFailureAction,
} from '../actions/property-actions';
import { AppError } from '../types/app-error';
import propertySaga from '../sagas/property-saga';

export interface PropertyState {
  properties: Property[];
  isFetching: boolean;
  fetchError: AppError | undefined;
  currentFavoritesBeingAdded: number[];
  favoritesError: AppError | undefined;
  isAddingComment: boolean;
  commentError: AppError | undefined;
  showFavoritePropertyMessage: boolean;
  addresses: PropertyAddress[];
  currentAddressesBeingAdded: Property['id'][];
}

const defaultState: PropertyState = {
  properties: [],
  isFetching: false,
  fetchError: undefined,
  currentFavoritesBeingAdded: [],
  favoritesError: undefined,
  isAddingComment: false,
  commentError: undefined,
  showFavoritePropertyMessage: false,
  addresses: [],
  currentAddressesBeingAdded: [],
};

const reducerMapping: ReadonlyArray<HandlerParams<
  PropertyState,
  PropertyActions
>> = [
  {
    type: FETCH_PROPERTIES_REQUEST,
    handle: (state, action) => ({
      ...state,
      isFetching: true,
    }),
  },
  {
    type: FETCH_PROPERTIES_SUCCESS,
    handle: (state, action: FetchPropertiesSuccessAction) => ({
      ...state,
      properties: [...action.properties],
      isFetching: false,
      fetchError: undefined,
    }),
  },
  {
    type: FETCH_PROPERTIES_ERROR,
    handle: (state, action: FetchPropertiesErrorAction) => ({
      ...state,
      isFetching: false,
      fetchError: action.error,
    }),
  },
  {
    type: ADD_FAVORITE_PROPERTY_REQUEST,
    handle: (state, action: AddFavoritePropertyRequestAction) => ({
      ...state,
      currentFavoritesBeingAdded: [
        ...state.currentFavoritesBeingAdded,
        action.propertyId,
      ],
    }),
  },
  {
    type: ADD_FAVORITE_PROPERTY_SUCCESS,
    handle: (state, action: AddFavoritePropertySuccessAction) => {
      const indexToRemove = state.currentFavoritesBeingAdded.findIndex(
        (id) => id === action.propertyId,
      );
      const updatedFavorites = [
        ...state.currentFavoritesBeingAdded.slice(0, indexToRemove),
        ...state.currentFavoritesBeingAdded.slice(
          indexToRemove + 1,
          state.currentFavoritesBeingAdded.length,
        ),
      ];
      return {
        ...state,
        currentFavoritesBeingAdded: updatedFavorites,
        favoritesError: undefined,
      };
    },
  },
  {
    type: ADD_FAVORITE_PROPERTY_ERROR,
    handle: (state, action: AddFavoritePropertyErrorAction) => ({
      ...state,
      currentFavoritesBeingAdded: [] /* This should only remove the failed one */,
      favoritesError: action.error,
    }),
  },
  {
    type: ADD_PROPERTY_COMMENT_REQUEST,
    handle: (state, action) => ({
      ...state,
      isAddingComment: true,
    }),
  },
  {
    type: ADD_PROPERTY_COMMENT_SUCCESS,
    handle: (state, action) => ({
      ...state,
      isAddingComment: false,
      commentError: undefined,
    }),
  },
  {
    type: ADD_PROPERTY_COMMENT_ERROR,
    handle: (state, action: AddPropertyCommentErrorAction) => ({
      ...state,
      isAddingComment: false,
      commentError: action.error,
    }),
  },
  {
    type: ADD_FAVORITE_PROPERTY_MESSAGE,
    handle: (state, action: AddFavoritePropertyMessageAction) => ({
      ...state,
      showFavoritePropertyMessage: true,
    }),
  },
  {
    type: GET_PROPERTY_ADDRESS,
    handle: (state, action: GetAddressAction) => ({
      ...state,
      currentAddressesBeingAdded: state.currentAddressesBeingAdded.some(
        (propertyId) => action.propertyId === propertyId,
      )
        ? state.currentAddressesBeingAdded
        : [...state.currentAddressesBeingAdded, action.propertyId],
    }),
  },
  {
    type: GET_PROPERTY_ADDRESS_SUCCESS,
    handle: (state, action: GetAddressSuccessAction) => {
      const indexToRemove = state.currentAddressesBeingAdded.findIndex(
        (id) => id === action.propertyId,
      );
      return {
        ...state,
        currentAddressesBeingAdded:
          indexToRemove !== -1
            ? [
              ...state.currentAddressesBeingAdded.slice(0, indexToRemove),
              ...state.currentAddressesBeingAdded.slice(indexToRemove + 1),
            ]
            : state.currentAddressesBeingAdded,
        addresses: [...state.addresses, action.address],
      };
    },
  },
  {
    type: GET_PROPERTY_ADDRESS_FAILURE,
    handle: (state, action: GetAddressFailureAction) => {
      const indexToRemove = state.currentAddressesBeingAdded.findIndex(
        (id) => id === action.propertyId,
      );
      return {
        ...state,
        currentAddressesBeingAdded:
          indexToRemove !== -1
            ? [
              ...state.currentAddressesBeingAdded.slice(0, indexToRemove),
              ...state.currentAddressesBeingAdded.slice(indexToRemove + 1),
            ]
            : state.currentAddressesBeingAdded,
      };
    },
  },
];

const propertyReducer = reducerCreator<PropertyState, PropertyActions>(
  defaultState,
  reducerMapping,
);

export default propertyReducer;
