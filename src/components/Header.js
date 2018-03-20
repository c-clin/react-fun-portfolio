import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header>
          <nav>
          	<ul>
          		<li>
                <Link to="/">Home</Link></li>
          		<li>
                <Link to="/About">About</Link></li>
          		<li>
                <Link to="/Contact">Contact</Link>
              </li>
          	</ul>
          </nav>
          </header>
      </div>
    );
  }
}

export default Header;
