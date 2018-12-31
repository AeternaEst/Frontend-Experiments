import React, {Component} from 'react';
import Button from './Button';
import ShoeView from './ShoeView';

var FeaturedShoe = (props) => {
    const { shoe } = props;
    return (
        <div className="featured-shoe">
            <h2>Featured Shoe</h2>
            <Button clickHandler={(event) => console.log("View More - Featured Click")}>
                View More
            </Button>
            <ShoeView shoe={shoe} />
        </div>
    );
}

export default FeaturedShoe;