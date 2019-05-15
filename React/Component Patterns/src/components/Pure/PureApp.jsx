import React from 'react';
import Impure from './Impure';
import PureCustom from './PureCustom';
import PureClass from './PureClass';
import PureHoc from './PureHoc';
import Dangerous from './Dangerous';

const message = "message";
const initialState = {
    count: 0,
    message: `${message} 0`,
    list: []
}
const people = [{name: "Nicholas", age: 30}, {name:"Andreaja", age:27}, {name:"Arnold", age:70}];

class PureApp extends React.Component {
    constructor(props){
        super(props);
        this.state = initialState;
        this.addPerson = this.addPerson.bind(this);
    }

    componentDidMount() {
        //Change State
        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                message: `${message} ${this.state.count + 1}`,
                list: [...this.state.list, [`${message} ${this.state.count + 1}`]],
                people: initialState.people
            });
        }, 5000);

        // setInterval(() => {
        //     this.setState(initialState);
        // }, 5000);
    }

    addPerson(person) {
        people.push(person);
        this.forceUpdate();
    } 

    render() {
        return (<div className="pure-app">
            <Impure message={this.state.message} list={this.state.list}/>
            <PureCustom message={this.state.message} list={this.state.list}/>
            <PureClass message={this.state.message} list={this.state.list}/>
            <PureHoc message={this.state.message} list={this.state.list}/>
            {/* { <Dangerous people={people} addPerson={this.addPerson}/> } */}
        </div>)
    }
}

export default PureApp;