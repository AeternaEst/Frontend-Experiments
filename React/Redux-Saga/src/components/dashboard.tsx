import React from "react";
import { fetchAndSubscribe } from "../utils/react-redux-utils";
import { userActions } from "../actions/user-actions";
import { userSelectors } from "../selectors/user-selectors";
import Loader from "./widgets/loader";

const DashBoard: React.FC = () => {
  const {
    data: criticalMessage,
    isLoading: isLoadingMessage,
  } = fetchAndSubscribe(
    userActions.fetchCriticalMessageAction,
    userSelectors.criticalmessage,
    userSelectors.isLoadingCriticalMessage,
    []
  );
  return (
    <div className="dashboard">
      <h3>DashBoard</h3>
      {isLoadingMessage && <Loader text="loading message" />}
      {!isLoadingMessage && criticalMessage}
    </div>
  );
};

export default DashBoard;
