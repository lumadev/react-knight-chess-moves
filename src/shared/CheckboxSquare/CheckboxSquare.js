import React from 'react';
import './CheckboxSquare.scss'

class CheckboxSquare extends React.Component {
  render() {
    return (
      <div className="checkbox">
        <label className="checkbox-button">
          <input
              type="checkbox"
              className="checkbox-button__input" 
              onChange={this.props.onChange}
              checked={this.props.checked}/>
          <span className="checkbox-button__control"></span>
        </label>
      </div>
    )
  }
}

export default CheckboxSquare;
