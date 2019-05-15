import React from 'react';

class PureCustom extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps === this.props) {
            console.log("PureCustom: props had same object reference. No Rerender");
            return false;
        }

        for(var key in nextProps) {
            if(this.props[key] !== nextProps[key]) {
                console.log("PureCustom: prop changed. Will rerender");
                return true;
            }
        }

        console.log("PureCustom: No props changed. No rerender");
        return false;
    }

    render() {
        const {message, list} = this.props;
        console.log("PureCustom Render");
        return (
            <div className="pure-custom">
                <h4>PureCustom</h4>
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

export default PureCustom;