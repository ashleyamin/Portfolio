import React, { Component } from 'react';
import diplomacy from '../assets/diplomacy.png';


class Diplomacy extends Component {
  render() {
    return (
      <div className="Diplomacy">
        <img className="Image-big-diplomacy" src={diplomacy} />
        <h1 className="Title">us diplomacy</h1>
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Diplomacy;
