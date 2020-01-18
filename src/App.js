import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="header-container">
          <div class="chessgame-title">
            <span>Chess Game</span>
          </div>
        </div>
        <div class="links-container">
          <div class="item-link selected">Instructions</div>
          <div class="item-link">The Game</div>
        </div>
        <div class="separator-line"></div>
      </div>
      <div class="content">
        <div class="wizard">
          <div class="wizard-steps">
            <div class="steps-wrapper">
              <div class="step completed">
                <span class="step-number">1</span>
                <span class="step-name">Instructions</span>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <span class="step-name">Start the Game</span>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
