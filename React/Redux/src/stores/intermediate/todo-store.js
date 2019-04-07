import { combineReducers, createStore } from 'redux'
import currentTodo from './../../reducers/intermediate/current-todo-reducer';
import todo from './../../reducers/intermediate/todo-reducer';
  
function manualReducer(state = {}, action) {
    return {
      todo: todo(state.visibilityFilter, action),
      currentTodo: currentTodo(state.todos, action)
    }
  }

const finalReducer = combineReducers({todo, currentTodo});
let todoStore = createStore(manualReducer);
  
export default todoStore;