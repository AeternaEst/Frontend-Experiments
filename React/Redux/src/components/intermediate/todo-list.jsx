import React from 'react';
import store from './../../stores/intermediate/todo-store';
import TodoSummary from './todo-summary';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTodo: ""
        }
        this.currentTodoChanged = this.currentTodoChanged.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    currentTodoChanged(event) {
        this.setState({
            currentTodo: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        const form = event.target;
        const currentTodo = this.state.currentTodo;
        form.reset();
        store.dispatch({
            type: "ADD_TODO", text: currentTodo
        });
        this.setState({
            currentTodo: ""
        });
    }

    render() {
        return (
            <div className="todo-list">
                <h2>Todo List</h2>
                
                <form id="add-todo-form" onSubmit={this.addTodo}>
                    <input type="text" name="todo" placeholder="Add Todo" value={this.state.currentTodo} onChange={this.currentTodoChanged}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default TodoList;