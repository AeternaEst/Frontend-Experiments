import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleComponentClassJSX from './MyComponent';
import * as serviceWorker from './serviceWorker';
import CarsModule from './Cars/CarsModule';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FeaturedCar />, document.getElementById('testroot'));
// ReactDOM.render(<CarsModule />, document.getElementById('cars'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
