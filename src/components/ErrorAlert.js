import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div>
      <p className="alert">
        {message}
        <i className="fas fa-exclamation-circle"></i>
      </p>
    </div>
  );
};

export default ErrorAlert;
