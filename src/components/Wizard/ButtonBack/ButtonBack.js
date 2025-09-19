import React from 'react';
import ArrowLeft from '../../../assets/arrow-left.png';
import ArrowLeftIce from '../../../assets/arrow-left-ice.png';

const ButtonBack = ({ goToPreviousStep, ice }) => {
  const arrowSrc = ice ? ArrowLeftIce : ArrowLeft;

  return (
    <div onClick={goToPreviousStep}>
      <img className="arrow-back" src={arrowSrc} alt="Arrow Back" />
    </div>
  );
};

export default ButtonBack;
