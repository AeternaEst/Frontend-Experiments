import React from 'react';
import store from './../../reducers/intermediate/todo-reducer';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        store.dispatch({type: "ADD_TODO", text: "FITNESS"});
    }

    render() {
        const currentTodos = store.getState();
        return (
            <div className="todo-list">
                <h2>Todo List</h2>
                {
                    currentTodos.map((todo, index) => (
                        <div className="todo" key={index}>
                            <p>{todo.text}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TodoList;