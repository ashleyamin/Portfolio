import React, { Component } from 'react';
import essentials from '../assets/essentials.png';
import up2us from '../assets/up2us.jpg';
import delaware from '../assets/delaware.jpg';
import diplomacy from '../assets/diplomacy.png';
import stoop from '../assets/stoop.png';
import prepare from '../assets/prepare.png';
import caretaker from '../assets/caretaker.png';
import alasys from '../assets/alasys.png';
import adopt from '../assets/adopt.png';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1 className="Title">my projects</h1>
        <p className="Intro">A curated selection of my latest projects in strategy, design and development. <br /> Interested in seeing more, email me.</p>
        <div className="project-container">
          <div className="one-container">
            <img className="Image-essentials" src={essentials} />
            <p className="project-title">The Essentials Prototype</p>
            <p className="project-description">Code: Nodejs, Google Login API</p>
            </div>
            <div className="one-container">
              <img className="Image" src={up2us} />
              <p className="project-title">UP2US Sports</p>
              <p className="project-description">Strategy: Design Research, Ideation</p>
            </div>
            <div className="one-container">
              <img className="Image" src={delaware} />
              <p className="project-title">State Gov, Child Support Services</p>
              <p className="project-description">Design: Customer Interviews, Personas, Journey Maps</p>
            </div>
            <div className="one-container">
              <img className="Image" src={diplomacy} />
              <p className="project-title">U.S. Diplomacy</p>
              <p className="project-description">Strategy: Digital Strategy, Mobile Product Development</p>
            </div>
            <div className="one-container">
              <img className="Image-stoop" src={stoop} />
              <p className="project-title">The Stoop</p>
              <p className="project-description">Code: Ruby and Rails</p>
            </div>
            <div className="one-container">
              <img className="Image" src={prepare} />
              <p className="project-title">Prepare for a Medical Crisis</p>
              <p className="project-description">Design: Wireframing, User Testing</p>
            </div>
            <div className="one-container">
              <img className="Image" src={caretaker} />
              <p className="project-title">Caretaker Support Prototype</p>
              <p className="project-description">Design: Service blueprint, design research</p>
            </div>
            <div className="one-container">
              <img className="Image" src={alasys} />
              <p className="project-title">Alasys</p>
              <p className="project-description">Strategy: New Product Business Case Development and Analysis</p>
            </div>
            <div className="one-container">
              <img className="Image-pet" src={adopt} />
              <p className="project-title">Adopt a Pet</p>
              <p className="project-description">Code: Reactjs, Webpack, Nodejs</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
