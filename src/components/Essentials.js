import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Essentials extends Component {
  render() {
    return (
      <div className="Essentials">
        <img className="Image-big-essentials" src={essentials} />
        <h1 className="Title">the essentials prototype</h1>
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Essentials;
