import React, { Component } from 'react';
import { cars } from './CarData.js';
import CarInfo from './CarInfo.js';

class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: cars
        }
    }
    render() {
        return (this.state.cars.map((element, index) => CarInfo(element, index)));
    }
}

export default CarList