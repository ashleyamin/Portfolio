import React, { Component } from 'react';
import aalogo from '../assets/logo.png';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="AA-Logo" src={aalogo} />
        <ul className="Menu">
          <li>expertise</li>
          <li>process</li>
          <li>projects</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    );
  }
}

export default Header;
