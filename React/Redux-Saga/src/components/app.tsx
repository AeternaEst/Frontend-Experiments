import React from 'react';
import CounterDispatcher from './app-setup/counter-dispatcher';
import MessageDispatcher from './app-setup/message-dispatcher';
import PropertyList from './property-list';

const App: React.FC = () => {
    return <div className="app-root">
        <CounterDispatcher />
        <MessageDispatcher />
        <PropertyList />
    </div>
}

export default App;