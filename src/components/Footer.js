import React, { Component } from 'react';
import '../App.css';
import github from '../assets/github-logo.png';
import google from '../assets/google-plus.png';
import instagram from '../assets/instagram-logo.png';
import linkedin from '../assets/linkedin-logo.png';
import medium from '../assets/medium.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="Contact">
          <li><a className="Contact-link" href="https://github.com/ashleyamin" target="_blank"><img className="Logo" src={github} /></a></li>
          <li><a className="Contact-link" href="mailto:ashley.starks@gmail.com"><img className="Logo" src={google} /></a></li>
          <li><a className="Contact-link" href="https://medium.com/@ashleyamin" target="_blank"><img className="Logo" src={medium} /></a></li>
          <li><a className="Contact-link" href="https://www.linkedin.com/in/ashleyamin/" target="_blank"><img className="Logo" src={linkedin} /></a></li>
        </ul>
        <p className="Copyright">ASHLEY AMIN 2018</p>
      </div>
    );
  }
}

export default Footer;
