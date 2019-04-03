import React from 'react';
import store from './../../reducers/simple/counter';

class Subscriber extends React.Component {
    constructor(props) {
        super(props);
        store.subscribe(() => console.log("subscriber getting state " + store.getState()))
    }

    render() {
        const { title, message } = { ...this.props };
        return (
            <div className="creator">
                <h2>{title}</h2>

                <p>{message}</p>
            </div>
        )
    }
}

export default Subscriber;