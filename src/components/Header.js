import React, { Component } from 'react';
import aalogo from '../assets/logo.png';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link className="project-link" to='/'><img className="AA-Logo" src={aalogo} /></Link>
        <ul className="Menu">
          <li><Link className="project-link" to='/'>expertise + process</Link></li>
          <li><Link className="project-link" to='/projects'>projects</Link></li>
          <li><Link className="about-link" to='/about'>about</Link></li>
          <li><a className="contact-email" href="mailto:ashley.starks@gmail.com">contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
