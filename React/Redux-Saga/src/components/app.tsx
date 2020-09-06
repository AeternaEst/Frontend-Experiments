import React from 'react';
import CounterDispatcher from './app-setup/counter-dispatcher';
import MessageDispatcher from './app-setup/message-dispatcher';

const App: React.FC = () => {
    return <div className="app-root">
        <CounterDispatcher />
        <MessageDispatcher />
    </div>
}

export default App;