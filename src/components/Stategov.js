import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Stategov extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">Child Care Support for State Gov</h1>
        <img className="Image-essentials" src={essentials} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Stategov;
