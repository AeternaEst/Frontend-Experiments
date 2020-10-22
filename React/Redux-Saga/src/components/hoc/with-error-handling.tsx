import React from "react";
import { State } from "../../reducers/root-reducer";
import { AppError } from "../../types/app-error";
import { useSelector } from "react-redux";
import Error from "../widgets/error";

const withErrorHandling = <T extends object>(
  Component: React.ComponentType<T>,
  errorSelector: (state: State) => AppError
): React.ComponentType<T> => {
  return (props) => {
    const error = useSelector(errorSelector);
    return (
      <div className="with-error-handling">
        {error && <Error error={error} />}
        {!error && <Component {...props} />}
      </div>
    );
  };
};

export default withErrorHandling;
