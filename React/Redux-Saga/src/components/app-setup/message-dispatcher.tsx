import React, { useCallback } from "react";
import { deprecatedReducerTwoActions } from "../../reducers/app-setup/deprecated-reducer-two";
import { State } from "../../reducers/root-reducer";
import { useDispatch, useSelector } from "react-redux";

const MessageDispatcher: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: State) => state.counterState.counter);

  const setMessage = useCallback(() => {
    dispatch(deprecatedReducerTwoActions.setMessage("Hello World"));
  }, []);

  return (
    <div className="message-dispatcher">
      <h3>Message Dispatcher</h3>
      <p>Current Counter: {counter}</p>
      <button type="button" onClick={setMessage}>
        Set Message
      </button>
    </div>
  );
};

export default MessageDispatcher;
