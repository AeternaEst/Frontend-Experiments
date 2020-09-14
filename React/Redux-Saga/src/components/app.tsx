import React from 'react';
import PropertyList from './property-list';
import Navigation from './navigation';

require('../styling/_root-styling.css'); /* Use require to avoid typescript checking for css*/

const App: React.FC = () => {
    return <div className="app-root">
        <Navigation />
        <PropertyList />
    </div>
}

export default App;