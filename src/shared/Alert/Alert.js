import React from 'react';
import './Alert.scss'

class Alerts extends React.Component {
  render() {
    return (
      <div className="error-message">
        {this.props.message}
        <span className="close-alert" onClick={this.props.closeAlert}>x</span>
      </div>
    );
  }
}

export default Alerts;
