import React from 'react';
import './HeaderStep.scss'

class HeaderStep extends React.Component {
  render() {
    const hasText = this.props.text !== undefined;

    return (
      <div>
        <div className="green-container"></div>
        { hasText ?
          <div className="instructions-first-step">
            {this.props.text}
          </div> : ''
        }
      </div>
    );
  }
}

export default HeaderStep;
