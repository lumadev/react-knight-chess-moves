import React from 'react';
import './Alert.scss';

const Alerts = ({ message, closeAlert }) => {
  return (
    <div className="error-message">
      {message}
      <span className="close-alert" onClick={closeAlert}>x</span>
    </div>
  );
};

export default Alerts;
