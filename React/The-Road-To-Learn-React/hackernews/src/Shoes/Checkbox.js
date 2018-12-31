import React, {Component} from 'react';

const ADD_TO_FAVORITES = "Add to favorites";
const IS_FAVORITE = "Is favorite";

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    render() {
        const { classes } = this.props;
        const isChecked = this.state.checked;
        return (
            <div>
                <input ref={element => this.checkbox = element} type="checkbox" className={classes} onChange={(event) => this.addToFavorite(event)} checked={isChecked}></input>
                <span>{ !isChecked ? ADD_TO_FAVORITES : IS_FAVORITE }</span>
            </div>
        );
    }
    addToFavorite(event) {
            this.checkbox.focus();
            this.setState({
            checked: !this.state.checked
        });
    }
}

export default Checkbox;