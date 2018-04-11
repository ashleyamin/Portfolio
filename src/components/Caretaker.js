import React, { Component } from 'react';
import caretaker from '../assets/caretaker.png';


class Caretaker extends Component {
  render() {
    return (
      <div className="Caretaker">
        <img className="Image-big-caretaker" src={caretaker} />
        <h1 className="Title">caretaker support prototype</h1>
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Caretaker;
