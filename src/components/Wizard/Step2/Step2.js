import React from 'react';
import HeaderStep from '../HeaderStep/HeaderStep';
import BlackCheck from '../../../assets/black-check.png';
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonNext from '../ButtonNext/ButtonNext';
import PossibleKnightMoves from '../../../assets/possible-knight-moves.png';
import './Step2.scss';

const Step2Component = ({ goToNextStep, goToPreviousStep }) => {
  const text = "Please follow the instructions below";

  return (
    <div>
      <HeaderStep text={text} />
      <div className="todo-card-container">
        <div className="todo-card">
          <ul className="checklist">
            <li className="item-checklist">
              <img className="check-button" src={BlackCheck} alt="checkmark" />
              <div className="text-instruction">Choose a square on the board</div>
            </li>
            <li className="item-checklist">
              <img className="check-button" src={BlackCheck} alt="checkmark" />
              <div className="text-instruction">Tap or click to select</div>
            </li>
            <li className="item-checklist">
              <img className="check-button" src={BlackCheck} alt="checkmark"/>
              <div className="text-instruction">Possible moves will be shown in yellow</div>
            </li>
            <li className="item-checklist">
              <img className="check-button" src={BlackCheck} alt="checkmark" />
              <div className="text-instruction">Second moves will be shown in blue</div>
            </li>
          </ul>
        </div>
        <img className="img-possible-move" src={PossibleKnightMoves} alt="Possible Moves" />
      </div>
      <div className="arrow-buttons-container flex-space-between">
        <ButtonBack goToPreviousStep={goToPreviousStep} />
        <ButtonNext goToNextStep={goToNextStep} />
      </div>
    </div>
  );
};

export default Step2Component;
