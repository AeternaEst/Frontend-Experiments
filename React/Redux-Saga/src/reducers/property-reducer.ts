import { Property } from "../types/property";

/* Actions */
const SET_PROPERTIES = "SET_PROPERTIES";
const IS_FETCHING_PROPERTIES = "IS_FETCHING_PROPERTIES";

/* Action types */
interface SetPropertiesAction {
  type: typeof SET_PROPERTIES;
  properties: Property[];
}

interface IsFetchingPropertiesAction {
  type: typeof IS_FETCHING_PROPERTIES;
  isFetching: boolean;
}

type PropertyActions = SetPropertiesAction | IsFetchingPropertiesAction;

/* Action creators */
const setProperties = (properties: Property[]): SetPropertiesAction => {
  return {
    type: SET_PROPERTIES,
    properties,
  };
};

const isFetchingProperties = (
  isFetching: boolean
): IsFetchingPropertiesAction => {
  return {
    type: IS_FETCHING_PROPERTIES,
    isFetching,
  };
};

export const propertyReducerActions = {
  setProperties,
  isFetchingProperties,
};

/* State */
export interface PropertyState {
  properties: Property[];
  isFetching: boolean;
}

const defaultState: PropertyState = {
  properties: [],
  isFetching: false,
};

/* Reducer */
const propertyReducer = (
  state = defaultState,
  action: PropertyActions
): PropertyState => {
  switch (action.type) {
    case SET_PROPERTIES:
      return {
        ...state,
        properties: [...action.properties],
      };
    case IS_FETCHING_PROPERTIES:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default propertyReducer;
