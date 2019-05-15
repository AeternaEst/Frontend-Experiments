import React from 'react';

const Impure = props => {
    const {message, list} = props;
    console.log("Impure Render");
    return (
        <div className="impure">
            <h4>Impure</h4>
            <p>Message: {message}</p>
            <ul>
                {
                    list.map(val => (
                        (<li key={val}>{val}</li>)
                    ))
                }
            </ul>
        </div>
    )
}

export default Impure;