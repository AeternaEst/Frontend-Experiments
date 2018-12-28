import React, { Component } from 'react';

function CarInfo(carData, key) {
    return (<div className="car-info" key={key}>
            <h3>{carData.name}</h3>
            <p>Model: {carData.model}, year: {carData.year}, speed: {carData.speed}</p>
            <i>{carData.description}</i>
        </div>)
}

export default CarInfo