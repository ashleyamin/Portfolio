import React, { Component } from 'react';
import up2us from '../assets/up2us.jpg';

class Sports extends Component {
  render() {
    return (
      <div className="Sports">
        <img className="Image-big-sports" src={up2us} />
        <h1 className="Title">up2us sports</h1>
        <p className="project-description">Strategy: Design Research, Ideation</p>
      </div>
    );
  }
}

export default Sports;
