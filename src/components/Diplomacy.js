import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Diplomacy extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">US Diplomacy</h1>
        <img className="Image-essentials" src={essentials} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Diplomacy;
