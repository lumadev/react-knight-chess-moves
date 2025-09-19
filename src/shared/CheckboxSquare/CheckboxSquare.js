import React from 'react';
import './CheckboxSquare.scss';

const CheckboxSquare = ({ checked, onChange }) => {
  return (
    <div className="checkbox">
      <label className="checkbox-button">
        <input
          type="checkbox"
          className="checkbox-button__input"
          checked={checked}
          onChange={onChange}
        />
        <span className="checkbox-button__control"></span>
      </label>
    </div>
  );
};

export default CheckboxSquare;
