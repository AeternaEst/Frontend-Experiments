import React, { Component } from 'react';

const MOUNTING_PREFIX = "MOUNTING - "
const UPDATING_PREFIX = "UPDATING - "

class Mounting extends Component {
    constructor(props) {
        super(props);
        console.log(`${MOUNTING_PREFIX}constructor `)
    }
    render() {
        console.log(`${MOUNTING_PREFIX}render `)
        return <div></div>
    }
    componentDidMount() {
        console.log(`${MOUNTING_PREFIX}componentDidMount `)
    }
}

class Updating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        console.log(`${UPDATING_PREFIX}constructor `)
    }
    componentDidMount() {
        console.log(`${UPDATING_PREFIX}componentDidMount `);
        setTimeout((self) => {
            console.log("Callback")
            self.setState({number:10});
        }, 1000, this);
    }
    shouldComponentUpdate() {
        console.log(`${UPDATING_PREFIX}shouldComponentUpdate `)
        return true;
    }
    render() {
        console.log(`${UPDATING_PREFIX}render ${this.state.number} `)
        return <div>{this.number}</div>
    }
    getSnapshotBeforeUpdate() {
        console.log(`${UPDATING_PREFIX}getSnapshotBeforeUpdate `);
        return null;
    }
    componentDidUpdate() {
        console.log(`${UPDATING_PREFIX}componentDidUpdate`)
    }
}

export default Updating