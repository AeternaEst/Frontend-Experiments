import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloworld';
import Creator from './components/simple/creator';
import Subscriber from './components/simple/subscriber';

ReactDOM.render(<Creator title="Creator" message="Creating..."/>, 
    document.getElementById("top"));

ReactDOM.render(<Subscriber title="Subscribe" message="Subscribing..."/>, 
    document.getElementById("mid"));