import React, { Component } from 'react';
import CarList from './CarList';
import FeaturedCar from './FeaturedCar';

class CarsModule extends Component {
    render() {
        return (<div className="cars-module">
            {<FeaturedCar />}
            <div className="car-list">
                {<CarList />}
            </div>
        </div>);
    }
}

export default CarsModule