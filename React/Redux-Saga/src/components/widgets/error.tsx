import React from "react";
import { AppError } from "../../types/app-error";

interface ErrorProps {
  error: AppError;
  smallDisplay?: boolean;
}

const ERROR_TITLE = "An error has occured";

const Error: React.FC<ErrorProps> = (props) => {
  return (
    <div className="error">
      {props.smallDisplay && <h5>{ERROR_TITLE}</h5>}
      {!props.smallDisplay && <h1>{ERROR_TITLE}</h1>}
      <p>{`${props.error.name} : ${props.error.code}`}</p>
      <span>{props.error.message}</span>
    </div>
  );
};

export default Error;
