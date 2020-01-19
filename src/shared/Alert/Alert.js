import React from 'react';
import './Alert.scss'

class Alerts extends React.Component {
  render() {
    return (
      <div className="error-message">{this.props.message}</div>
      // <div className={this.props.type}>{this.props.message}</div>
    );
  }
}

export default Alerts;
