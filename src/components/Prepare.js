import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Prepare extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">Prepare for a Medical Crisis</h1>
        <img className="Image-essentials" src={essentials} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Prepare;
