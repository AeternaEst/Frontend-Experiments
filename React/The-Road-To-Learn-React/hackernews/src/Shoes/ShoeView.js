import React, {Component} from 'react';
import Button from './Button';

var ShoeView = (props) => {
    const { shoe, classes } = props;
    return (
        <div className={classes}>
            <h5>{shoe.Title}</h5>
            <p>{shoe.ProductId}</p>
            <p><i>{shoe.Price}</i></p>
            <Button classes="button" clickHandler={(event) => console.log(`${event.target.name} FEATURED BUY `)}>
                Buy Featured
            </Button>
        </div>
    );
}

export default ShoeView;