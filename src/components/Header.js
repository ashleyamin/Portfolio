import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
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
