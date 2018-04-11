import React, { Component } from 'react';
import adopt from '../assets/adopt.png';

class Adopt extends Component {
  render() {
    return (
      <div className="Adopt">
        <img className="Image-big-adopt" src={adopt} />
        <h1 className="Title">adopt a pet</h1>
        <p className="project-description">Code: Nodejs, Google Login API</p>
        <div className="project-description-long">
              Making it easier to find and adopt more puppies!
              A group project in our web development immersive program, the PuppyFinder App was built
              collaboratively using React on the front end, Webpack as the build manager, Node.js and the Express
              framework on the backend, with postgres as the database.
        </div>
        <a className="Learn-more-button" href="https://puppyfinderapp.herokuapp.com/" target="_blank">see the project</a>
        <a className="Github-button" href="https://github.com/ashleyamin/Puppy-Finder" target="_blank">see the code</a>
      </div>
    );
  }
}

export default Adopt;
