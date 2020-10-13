import React from "react";
import { State } from "../../reducers/root-reducer";
import { AppError } from "../../types/app-error";
import { useSelector } from "react-redux";

const withErrorHandling = <T extends object>(
  Component: React.ComponentType<T>,
  errorSelector: (state: State) => AppError
): React.ComponentType<T> => {
  return (props) => {
    const error = useSelector(errorSelector);
    return (
      <div className="with-error-handling">
        {error && (
          <div className="with-error-handling__error">
            <h1>An error has occured</h1>
            <p>{`${error.name} : ${error.code}`}</p>
            <span>{error.message}</span>
          </div>
        )}
        {!error && <Component {...props} />}
      </div>
    );
  };
};

export default withErrorHandling;
