import React from "react";
import CustomPureClass from "./CustomPureClass";
import SimplePureClass from "./SimplePureClass";
import SimplePureFunctionComponent from "./SimplePureFunctionComponent";

const messages = ["Hello World", "Deus Vult", "Horatius, Captain of the gate"];
// const messages = ['Hello World', 'Hello World', 'Hello World'];

interface PureAppState {
  message: string;
  number: number;
}

class PureApp extends React.Component<unknown, PureAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      message: messages[0],
      number: 0,
    };
  }

  componentDidMount() {
    // Change State
    setInterval(() => {
      console.log("updating state");
      let newMessage: string;
      let newNumber: number;
      if (this.state.number === 2) {
        newMessage = messages[0];
        newNumber = 0;
      } else {
        newNumber = this.state.number + 1;
        newMessage = messages[newNumber];
      }
      this.setState({
        message: newMessage,
        number: newNumber,
      });
    }, 5000);
  }

  render() {
    return (
      <div className="pure-app">
        <SimplePureClass message={this.state.message} />
        <SimplePureFunctionComponent message={this.state.message} />
        <CustomPureClass message={this.state.message} />
      </div>
    );
  }
}

export default PureApp;
