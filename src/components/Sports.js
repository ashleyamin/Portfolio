import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Sports extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">Up2Us Sports</h1>
        <img className="Image-essentials" src={essentials} />
        <p className="project-description">Code: Nodejs, Google Login API</p>
      </div>
    );
  }
}

export default Sports;
