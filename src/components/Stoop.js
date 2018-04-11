import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Stoop extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">The Stoop App</h1>
        <img className="Image-essentials" src={essentials} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Stoop;
