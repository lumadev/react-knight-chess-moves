import React from 'react';

class Chess extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div className="content">
        <div className="wizard shadow">
          assdasda
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
