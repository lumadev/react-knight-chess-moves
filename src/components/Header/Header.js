import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/home" className="item-link selected">Instructions</Link>
          <Link to="/game" className="item-link">The Game</Link>
        </div>
        <div className="separator-line"></div>
      </div>
    );
  }
}

export default Header;
