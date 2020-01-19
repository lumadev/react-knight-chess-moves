import React from 'react';
import ArrowRight from '../../../assets/arrow-right.png';

class ButtonNext extends React.Component {
  constructor() {
    super();
    this.state = {
      arrowSrc: ArrowRight
    };
  }

  render() {
    const { goToNextStep } = this.props;
    const { arrowSrc } = this.state;

    return (
      <div onClick={goToNextStep}>
        <img className="arrow-right" src={arrowSrc} alt="Arrow Right" />
      </div>
    );
  }
}

export default ButtonNext;
