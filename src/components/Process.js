import React, { Component } from 'react';
import process from '../assets/process.png';

class Process extends Component {
  render() {
    return (
      <div className="Process">
        <h1 className="Title">my process</h1>
        <p className="Intro">Short, iterative, ideation and innovation. Visualize potential paths forward, tell stories and inspire all. Create the future.<br /><br />

Leading with human centered design, grounded in business rigor, my approach is iterative and collaborative - fostering connections with people to identify new opportunities and speed up the process of creating new solutions.</p>
      <img className="Process-image" src={process} />
      </div>
    );
  }
}

export default Process;
