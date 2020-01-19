import React from 'react';
import Header from '../Header/Header'

class Chess extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="wizard shadow">
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Chess;
