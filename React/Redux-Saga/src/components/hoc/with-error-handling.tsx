import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../reducers/root-reducer";
import { AppError } from "../../types/app-error";
import Error from "../widgets/error";

// eslint-disable-next-line @typescript-eslint/ban-types
const withErrorHandling = <T extends object>(
  Component: React.ComponentType<T>,
  errorSelector: (state: State) => AppError
): React.ComponentType<T> => (props) => {
  const error = useSelector(errorSelector);

  const errorComponent = (
    <div className="with-error-handling">
      {error && <Error error={error} />}
      {!error && <Component {...props} />}
    </div>
  );

  return errorComponent;
};

export default withErrorHandling;
