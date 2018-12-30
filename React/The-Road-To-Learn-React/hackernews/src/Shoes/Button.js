import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { children, classes, clickHandler } = this.props;
        return (
            <button className={classes} onClick={clickHandler}>
                {children}
            </button>
        )
    }
}

export default Button