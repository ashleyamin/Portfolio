import React, { Component } from 'react';
import prepare from '../assets/prepare.png';


class Prepare extends Component {
  render() {
    return (
      <div className="Prepare">
        <img className="Image-big-prepare" src={prepare} />
        <h1 className="Title">Prepare for a Medical Crisis</h1>
        <p className="project-description">Design: Wireframing, User Testing</p>
      </div>
    );
  }
}

export default Prepare;
