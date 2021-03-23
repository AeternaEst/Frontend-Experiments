import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers/root-reducer";
import { deperactedSagaActions } from "../../sagas/app-setup/deprecated-saga";

interface CounterDispatcherProps {
  increment: () => void;
  message: string;
}

const CounterDispatcher: React.FC<CounterDispatcherProps> = ({
  message,
  increment,
}) => (
  <div className="counter-dispatcher">
    <h3>Counter Dispatcher</h3>
    <p>
      Current Message:
      {message}
    </p>
    <button type="button" onClick={increment}>
      Increment
    </button>
  </div>
);

const mapStateToProps = (state: State) => ({
  message: state.messageState.message,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(deperactedSagaActions.requestIncrement),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterDispatcher);
