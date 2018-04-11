import React, { Component } from 'react';
import essentials from '../assets/essentials.png';

class Essentials extends Component {
  render() {
    return (
      <div className="Essentials">
        <img className="Image-big-essentials" src={essentials} />
        <h1 className="Title">the essentials prototype</h1>
        <p className="project-description">Code: Nodejs, Google Login API</p>
        <div className="project-description-long">
              A medical emergency can happen at anytime. The Ready Set Plan App enables one to
              plan ahead for a medical crisis by providing a list of essential documents one
              should have created and stored for a loved one to access in the event of an emergency.
              Built using HTML/EJS, Node and Express, SQL, pg-promise, and the Google Login API for registration/authorization          </div>
        <a className="Learn-more-button" href="http://readysetplan.herokuapp.com/readysetplan" target="_blank">see the project</a>
        <a className="Github-button" href="https://github.com/ashleyamin/ReadySetPlan" target="_blank">see the code</a>
    </div>
    );
  }
}

export default Essentials;
