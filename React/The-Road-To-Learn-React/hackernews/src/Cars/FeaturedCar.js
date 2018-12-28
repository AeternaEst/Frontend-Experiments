import React, { Component } from 'react';
//import featuredCarData from './CarData.js'
import CarInfo from './CarInfo'
import { featuredCarData } from './CarData.js';

class FeaturedCar extends Component {
    render() {
        return (
            <div className="featured-car">
                <h2>Featured Car</h2>
                {CarInfo(featuredCarData)}
            </div>
            );
    }
}

export default FeaturedCar