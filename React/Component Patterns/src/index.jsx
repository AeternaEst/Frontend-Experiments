import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Container from './components/Container-Presentation/Container';
import DoubleSubs from './components/HOC/CounterSubscription/CounterSubscriptions';
import Controlled from './components/Controlled/Controlled';
import RenderCallbackApp from './components/RenderCallback/Responsive/RenderCallbackApp';
import PureApp from './components/Pure/PureApp';
import BrowserBox from './components/RenderCallback/IsChrome/BrowserBox';
import MyForm from './components/RenderProps/MyForm';
import UserApp from './components/HOC/ApiUsers/UserApp';
import ContextApp from './components/Context/ContextApp';

var injectTarget = document.querySelector('.root');

ReactDOM.render(<><ContextApp /></>, injectTarget);