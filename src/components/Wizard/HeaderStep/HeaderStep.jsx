import React from 'react';
import './HeaderStep.scss';

const HeaderStep = ({ text }) => {
  return (
    <div>
      <div className="green-container"></div>
      {text && (
        <div className="instructions-first-step">
          {text}
        </div>
      )}
    </div>
  );
};

export default HeaderStep;
