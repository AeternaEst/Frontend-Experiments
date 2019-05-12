import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Container from './components/Container-Presentation/Container';
import DoubleSubs from './components/HOC/CounterSubscriptions';
import Controlled from './components/Controlled/Controlled';
import RenderCallbackApp from './components/RenderCallback/RenderCallbackApp';

var injectTarget = document.querySelector('.root');

ReactDOM.render(<RenderCallbackApp />, injectTarget);