import React from 'react';
import store from './../../stores/intermediate/todo-store';

class TodoSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        store.subscribe(() => {
            console.log("Subscription triggered");
            const currentTodos = store.getState().todo;
            this.setState({
                todos: currentTodos
            });
        });
    }

    render() {  
        const currentTodos = this.state.todos;   
        return (
            <div className="todo-summary">
                <h4>Summary:</h4>
                <ul>
                {
                    currentTodos.map((todo, index) => (
                        <li className="todo-summary-item" key={index}>
                            {todo.text}, is completed: {todo.completed.toString()}
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default TodoSummary;