import React from 'react';
import PropertyList from './property-list';
require('../styling/_root-styling.css'); /* Use require to avoid typescript checking for css*/

const App: React.FC = () => {
    return <div className="app-root">
        <PropertyList />
    </div>
}

export default App;