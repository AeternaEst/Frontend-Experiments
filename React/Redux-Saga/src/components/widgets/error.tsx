import React from 'react';
import { AppError } from '../../types/app-error';

interface ErrorProps {
  error: AppError;
  smallDisplay?: boolean;
}

const ERROR_TITLE = 'An error has occured';

const Error: React.FC<ErrorProps> = ({ smallDisplay, error }) => (
  <div className="error">
    {smallDisplay && <h5>{ERROR_TITLE}</h5>}
    {!smallDisplay && <h1>{ERROR_TITLE}</h1>}
    <p>{`${error.name} : ${error.code}`}</p>
    <span>{error.message}</span>
  </div>
);

export default Error;
