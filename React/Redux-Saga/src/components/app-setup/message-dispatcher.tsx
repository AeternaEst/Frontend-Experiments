import React from 'react';
import { connect } from 'react-redux'
import { deprecatedReducerTwoActions } from '../../reducers/app-setup/deprecated-reducer-two';

interface MessageDispatcherProps {
    setMessage: (message: string) => void;
    counter: number;
}

const MessageDispatcher: React.FC<MessageDispatcherProps> = (props) => {
    return <div className="message-dispatcher">
        <h3>Message Dispatcher</h3>
        <p>Current Counter: {props.counter}</p>
        <button type="button" onClick={() => props.setMessage("Hello World")}>Set Message</button>
    </div>
}

const mapStateToProps = (state: any) => {
    console.log("mapStateToProps", state);
    return {
      counter: state.counterState.counter
    }
  }
  
const mapDispatchToProps = (dispatch: any) => {
      return {
          setMessage: (message: string) => dispatch(deprecatedReducerTwoActions.setMessage(message))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageDispatcher)