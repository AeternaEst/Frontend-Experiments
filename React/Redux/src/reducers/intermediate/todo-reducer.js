
function todo(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);
    case 'DELETE_TODO':
      return null; //implement later
    case 'SET_TODO':
      return state.map((value, index) => {
        if (action.index === index) {
          return { text: value.text, completed: !value.complated };
        } else {
          return value;
        }
      });
    default:
      return state
  }
}

export default todo;
