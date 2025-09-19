import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStep from '../HeaderStep/HeaderStep';
import './Step3.scss';

const Step3 = () => {
  return (
    <div>
      <HeaderStep />
      <div className="ready-container">
        <span className="ready-text">Ready?</span>
        <Link to="/game" className="button-start">Start The Game</Link>
      </div>
    </div>
  );
};

export default Step3;
