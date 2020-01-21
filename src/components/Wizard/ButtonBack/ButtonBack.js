import React from 'react';
import ArrowLeft from '../../../assets/arrow-left.png';

class ButtonBack extends React.Component {
  constructor() {
    super();
    this.state = {
      arrowSrc: ArrowLeft
    };
  }

  render() {
    const { goToPreviousStep } = this.props;
    const { arrowSrc } = this.state;

    return (
      <div onClick={goToPreviousStep}>
        <img className="arrow-back" src={arrowSrc} alt="Arrow Back" />
      </div>
    );
  }
}

export default ButtonBack;
