import { combineReducers, createStore } from 'redux'
import currentTodo from './../../reducers/intermediate/current-todo-reducer';
import todo from './../../reducers/intermediate/todo-reducer';
  
const finalReducer = combineReducers({todo, currentTodo});
let todoStore = createStore(finalReducer);
  
export default todoStore;