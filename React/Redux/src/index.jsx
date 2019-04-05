import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloworld';
import Creator from './components/simple/creator';
import Subscriber from './components/simple/subscriber';
import TodoList from './components/intermediate/todo-list';
import TodoSummary from './components/intermediate/todo-summary';

ReactDOM.render(<TodoList />, document.getElementById("top"));
ReactDOM.render(<TodoSummary />, document.getElementById("mid"));

