import React from 'react';
import HeaderStep from '../HeaderStep/HeaderStep'
import './Step3.scss'

class Step3 extends React.Component {
  render() {
    return (
      <div>
        <HeaderStep />
        <div className="ready-container">
          <span class="ready-text">Ready?</span>
          <button class="button-start">Start The Game</button>
        </div>
      </div>
    );
  }
}

export default Step3;
