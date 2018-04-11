import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Caretaker extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">Caretaker Support</h1>
        <img className="Image-essentials" src={essentials} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Caretaker;
