import React from 'react';
import WizardContent from '../WizardContent'
import './styles.scss'

class Wizard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: null
    };
  }

  render() {
    return (
      <div className="content">
        <div className="wizard shadow">
          <div className="wizard-steps">
            <div className="steps-wrapper">
              <div className="step completed">
                <span className="step-number">1</span>
                <span className="step-name">Introduction</span>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <span className="step-name">Rules</span>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <span className="step-name">Start the Game</span>
              </div>
            </div>
            <div class="line"></div>
            <WizardContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
