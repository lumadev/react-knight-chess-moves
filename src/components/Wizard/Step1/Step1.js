import React from 'react';
import HeaderStep from '../HeaderStep/HeaderStep'
import ButtonNext from '../ButtonNext/ButtonNext'
import Knight from '../../../assets/knight.jpeg';
import './Step1.scss'

class Step1Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      knightSrc: Knight
    };
  }

  render() {
    const { knightSrc } = this.state;
    const { goToNextStep } = this.props;
    const text = "On this game you are going to move the knight on a chess board";

    return (
      <div>
        <HeaderStep text={text} />
        <div className="img-knight-container">
          <img className="img-knight shadow" src={knightSrc} alt="Knight" />
        </div>
        <div className="arrow-buttons-container">
          <ButtonNext goToNextStep={goToNextStep} />
        </div>
      </div>
    );
  }
}

export default Step1Component;
