import { Property } from "../types/property";

/* Actions */
const SET_PROPERTIES = "SET_PROPERTIES";

/* Action types */
interface SetPropertiesAction {
    type: typeof SET_PROPERTIES;
    properties: Property[];
}

type PropertyActions = SetPropertiesAction;

/* Action creators */
const setProperties = (properties: Property[]): SetPropertiesAction => {
    return {
        type: SET_PROPERTIES,
        properties
    }
}

const propertyReducerActions = {
    setProperties
}

/* State */
export interface PropertyState {
    properties: Property[];
}

const defaultState: PropertyState = {
    properties: []
}

/* Reducer */
const propertyReducer = (state: PropertyState, action: PropertyActions): PropertyState => {
    switch(action.type) {
        case SET_PROPERTIES:
            return {
                properties: action.properties
            }
        default:
            return state;
    }
}

export default propertyReducer;