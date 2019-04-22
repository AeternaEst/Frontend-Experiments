import React from 'react';

const ErrorMessage = (props) => {
    const { errorMessage, showError } = props;
    let textClass = "error-message__text " + (showError ? "error-message__text-red" : "");
    return (
        <div className="error-message">
            {
                showError && (
                    <h4 className={textClass}>{errorMessage}</h4>
                )
            }
        </div>
    );
}

export default ErrorMessage;