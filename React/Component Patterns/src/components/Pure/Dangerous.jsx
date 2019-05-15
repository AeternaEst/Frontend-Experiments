import React from 'react';

class Dangerous extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        var people = this.props.people;
        var addPerson = this.props.addPerson;
        console.log("Rendering Dangerous");
        return (
            <div className="dangerous">
                <button onClick={() => addPerson({name: "New Person", age: 100})}>Add Person</button>
                <ul>
                    {
                        people.map(person => (<li key={person.name}>{person.name} - {person.age}</li>))
                    }
                </ul>
            </div>
        )
    }
}

export default Dangerous;