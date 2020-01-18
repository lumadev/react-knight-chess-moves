import React from 'react';
import Knight from '../../assets/knight.jpeg';
import ArrowRight from '../../assets/arrow-right.png';
import './styles.scss'

class WizardContent extends React.Component {
  constructor() {
    super();
    this.state = {
      knightSrc: Knight,
      arrowSrc: ArrowRight
    };
  }

  render() {
    const {knightSrc, arrowSrc} = this.state;

    return (
      <div className="instructions-container">
        <div className="instructions-first-step">
          On this game you are going to move the knight on a chess board
        </div>
        <div className="green-container"></div>
        <div className="img-knight-container">
          <img className="img-knight shadow" src={knightSrc} />
        </div>
        <div class="arrow-right-container">
          <img class="arrow-right" src={arrowSrc} />
        </div>
      </div>
    );
  }
}

export default WizardContent;
