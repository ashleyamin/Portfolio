import React, { Component } from 'react';
import delaware from '../assets/delaware.jpg';

class Stategov extends Component {
  render() {
    return (
      <div className="Stategov">
        <img className="Image-big-stategov" src={delaware} />
        <h1 className="Title">state gov, child care services</h1>
        <p className="project-description">Design: User Research, Personas, Journey Maps</p>
      </div>
    );
  }
}

export default Stategov;
