import React, {Component} from 'react';
import ShoeView from './ShoeView.js';
import shoe from './ShoeTestData';

class ShoePage extends Component {
    render() {
        return (
            <ShoeView shoe={shoe} />
        )

    }
}

export default ShoePage;