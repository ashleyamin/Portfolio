import React, { Component } from 'react';
import '../App.css';
import github from '../assets/github-logo.png';
import google from '../assets/google-plus.png';
import instagram from '../assets/instagram-logo.png';
import linkedin from '../assets/linkedin-logo.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="Contact">
          <li><img className="Logo" src={github} /></li>
          <li><img className="Logo" src={google} /></li>
          <li><img className="Logo" src={instagram} /></li>
          <li><img className="Logo" src={linkedin} /></li>
        </ul>
        <p className="Copyright">ASHLEY AMIN 2018</p>
      </div>
    );
  }
}

export default Footer;
