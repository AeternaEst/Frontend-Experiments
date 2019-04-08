import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import HelloWorld from './components/helloworld';
import Creator from './components/simple/creator';
import Subscriber from './components/simple/subscriber';
import TodoList from './components/intermediate/todo-list';
import TodoSummary from './components/intermediate/todo-summary';
import CharacterApp from './components/characters/characters-app';
import characterStore from './stores/characters/character-store';

ReactDOM.render(<Provider store={characterStore}><CharacterApp /></Provider>, document.getElementById("mid"));

