import { combineReducers } from 'redux';
import deprecatedReducerOne from "./app-setup/deprecated-reducer-one";
import deprecatedReducerTwo from './app-setup/deprecated-reducer-two';

export const rootReducer = combineReducers({ counterState: deprecatedReducerOne, messageState: deprecatedReducerTwo });