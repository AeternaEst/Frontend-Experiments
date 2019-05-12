import React, {Component} from 'react';
import Presentation from './Presentation';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    } 

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            })
        }, 1000);
    }

    render() {
        const { count } = this.state;
        return (<Presentation count={count} />);
    }
}

export default Container;