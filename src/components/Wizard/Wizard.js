import React from 'react';
import Header from '../Header/Header'
import Step1Component from './Step1/Step1'
import Step2Component from './Step2/Step2'
import Step3Component from './Step3/Step3'
import './Wizard.scss'

class Wizard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1
    };
  }

  handleClickStep = (step) => {
    this.setState({
      currentStep: step
    });
  }

  goToNextStep() {
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  }

  goToPreviousStep() {
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  }

  render() {
    const { currentStep } = this.state;

    return (
      <div>
        <Header />
        <div className="content">
          <div className="wizard shadow">
            <div className="wizard-steps">
              <div className="steps-wrapper">
                <div 
                  onClick={() => this.handleClickStep(1)}
                  className={currentStep >= 1 ? 'step completed': 'step'}>

                  <span className="step-number">1</span>
                  <span className="step-name">Introduction</span>
                </div>
                <div 
                  onClick={() => this.handleClickStep(2)}
                  className={currentStep >= 2 ? 'step completed': 'step'}>

                  <span className="step-number">2</span>
                  <span className="step-name">Rules</span>
                </div>
                <div 
                  onClick={() => this.handleClickStep(3)}
                  className={currentStep === 3 ? 'step completed': 'step'}>

                  <span className="step-number">3</span>
                  <span className="step-name">Start the Game</span>
                </div>
              </div>
              <div className="line"></div>
              { currentStep === 1 ? <Step1Component goToNextStep={this.goToNextStep.bind(this)} /> : '' }
              { 
                currentStep === 2 ? <Step2Component 
                goToPreviousStep={this.goToPreviousStep.bind(this)}
                goToNextStep={this.goToNextStep.bind(this)} /> : '' 
              }
              { currentStep === 3 ? <Step3Component 
                goToPreviousStep={this.goToPreviousStep.bind(this)}
                goToNextStep={this.goToNextStep.bind(this)} /> : '' 
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
