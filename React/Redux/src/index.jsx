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
import ShoppingCartView from './components/shopping-cart/shopping-cart-view';
import shoppingCartStore from './stores/shopping-cart/shopping-cart-store';

ReactDOM.render(<Provider store={shoppingCartStore}><ShoppingCartView /></Provider>, document.getElementById("mid"));

