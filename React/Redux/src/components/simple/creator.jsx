import React from 'react';
import store from './../../reducers/simple/counter';

class Creator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.setInterval(() => {
            console.log('creator interval running');
            store.dispatch({ type: 'INCREMENT' })
        }, 2000)
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

export default Creator;