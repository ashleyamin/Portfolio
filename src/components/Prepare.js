import React, { Component } from 'react';
import prepare from '../assets/prepare.png';


class Prepare extends Component {
  render() {
    return (
      <div className="Prepare">
        <h1 className="Title">Prepare for a Medical Crisis</h1>
        <img className="Image-big-prepare" src={prepare} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Prepare;
