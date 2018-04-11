import React, { Component } from 'react';
import alasys from '../assets/alasys.png';

class Alasys extends Component {
  render() {
    return (
      <div className="Alasys">
        <h1 className="Title">alasys</h1>
        <img className="Image-big-alasys" src={alasys} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Alasys;
