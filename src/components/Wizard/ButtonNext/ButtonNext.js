import React from 'react';
import ArrowRight from '../../../assets/arrow-right.png';

const ButtonNext = ({ goToNextStep }) => {
  return (
    <div onClick={goToNextStep}>
      <img className="arrow-right" src={ArrowRight} alt="Arrow Right" />
    </div>
  );
};

export default ButtonNext;
