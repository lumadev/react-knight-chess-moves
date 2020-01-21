import React from 'react';
import ArrowLeft from '../../../assets/arrow-left.png';
import ArrowLeftIce from '../../../assets/arrow-left-ice.png';

class ButtonBack extends React.Component {
  constructor() {
    super();
    this.state = {
      arrowSrc: ArrowLeft,
      arrowIceSrc: ArrowLeftIce
    };
  }

  render() {
    const { goToPreviousStep, ice } = this.props;
    const { arrowSrc, arrowIceSrc } = this.state;

    return (
      <div onClick={goToPreviousStep}>
        <img className="arrow-back" src={ice === true ? arrowIceSrc : arrowSrc} alt="Arrow Back" />
      </div>
    );
  }
}

export default ButtonBack;
