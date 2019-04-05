
function currentTodo(state = '', action) {
   if(action.type === "SET_CURRENT_TODO") {
      return action.currentTodo;
   }

   return state;
}


export default currentTodo;
