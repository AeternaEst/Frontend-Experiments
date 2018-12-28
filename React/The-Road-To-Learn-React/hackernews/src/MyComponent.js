import React, { Component } from 'react';

var text = "Simple Component";
var attributes = {
    className: "SimpleComponent"
}

function ShowName(props) {
    return <li>{props.name}</li>
}

//Function Components

const SimpleComponentFunctionJSX = () => (
        <div className="SimpleComponent">
          <p>{text}</p>
        </div>
  );

const SimpleComponentFunction = () => {
        return React.createElement('ul', attributes, 
        [React.createElement("li", null, "LI 1"),
         React.createElement("li", null, "LI 2"),
         React.createElement("li", null, "LI 3")]);
};

//Class Components

class SimpleComponentClassJSX extends Component {
    render() {
      return (
        <ul>
            <ShowName name="Nicholas" />
            <ShowName name="Andreja" />
            <ShowName name="Kisser" />
        </ul>
      );
    }
}

class SimpleComponentClass extends Component {
    render() {
      return React.createElement('div', attributes, text);
    }
}

export default SimpleComponentClassJSX