import React from "react";
import { connect } from "react-redux";
import { deprecatedReducerOneActions } from "../../reducers/app-setup/deprecated-reducer-one";
import { State } from "../../reducers/root-reducer";
import { Dispatch } from "redux";

interface CounterDispatcherProps {
  increment: () => void;
  message: string;
}

const CounterDispatcher: React.FC<CounterDispatcherProps> = (props) => {
  return (
    <div className="counter-dispatcher">
      <h3>Counter Dispatcher</h3>
      <p>Current Message: {props.message}</p>
      <button type="button" onClick={props.increment}>
        Increment
      </button>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    message: state.messageState.message,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(deprecatedReducerOneActions.increment),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterDispatcher);
