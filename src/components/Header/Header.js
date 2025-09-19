import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header-container">
        <div className="chessgame-title">
          <span>Chess Game</span>
        </div>
      </div>
      <div className="links-container">
        <Link
          to="/home"
          className={`item-link ${location.pathname === '/home' ? 'selected' : ''}`}
        >
          Instructions
        </Link>
        <Link
          to="/game"
          className={`item-link ${location.pathname === '/game' ? 'selected' : ''}`}
        >
          The Game
        </Link>
      </div>
      <div className="separator-line"></div>
    </div>
  );
};

export default Header;
