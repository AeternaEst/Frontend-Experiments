import React from 'react';

class PureClass extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {message, list} = this.props;
        console.log("PureClass Render");
        return (
            <div className="pure-custom">
                <h4>PureClass</h4>
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
}

export default PureClass;