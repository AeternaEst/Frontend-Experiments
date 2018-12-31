import React, {Component} from 'react';
import ShoeView from './ShoeView.js';
import shoe from './ShoeTestData';
import FeaturedShoe from './FeaturedShoe.js';
import ShoeList from './ShoeList.js';

class ShoePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="shoe-list">
                <FeaturedShoe shoe={shoe} />
                <ShoeList />
            </div>
        )
    }
}

export default ShoePage;