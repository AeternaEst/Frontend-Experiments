import React from 'react';

const Pure = props => {
    const {message, list} = props;
    console.log("PureHoc Render");
    return (
        <div className="puc-hoc">
            <h4>PureHoc</h4>
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

const PureHoc = React.memo(Pure);

export default PureHoc;