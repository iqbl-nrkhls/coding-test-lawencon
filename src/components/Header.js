import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <div className="wrapper">

        <ul className="justify-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/coin-list">Coin List</Link>
          </li>
        </ul>

      </div>
    </nav>
  </header>
);

export default Header;