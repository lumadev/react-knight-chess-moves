import React from 'react';
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="chessgame-title">
            <span>Chess Game</span>
          </div>
        </div>
        <div className="links-container">
          <div className="item-link selected">Instructions</div>
          <div className="item-link">The Game</div>
        </div>
        <div className="separator-line"></div>
      </div>
    );
  }
}

export default Header;
