import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <p className="Intro">A curated selection of my latest projects in strategy, design and development. <br /> Interested in seeing more, <a className="email-link" href="mailto:ashley.starks@gmail.com">email me</a>.</p>
        <div className="project-container">
          <div className="one-container">
            <img className="Image-essentials" src={essentials} />
            <p className="project-title"><Link className="project-title" to='/essentials'>The Essentials Prototype</Link></p>
            <p className="project-description">Code: Nodejs, Google Login API</p>
            </div>
            <div className="one-container">
              <img className="Image" src={up2us} />
              <p className="project-title"><Link className="project-title" to='/up2us'>UP2US Sports</Link></p>
              <p className="project-description">Strategy: Design Research, Ideation</p>
            </div>
            <div className="one-container">
              <img className="Image" src={delaware} />
              <p className="project-title"><Link className="project-title" to='/stategov'>Children and Family Services</Link></p>
              <p className="project-description">Design: User Research, Personas, Journey Maps</p>
            </div>
            <div className="one-container">
              <img className="Image" src={diplomacy} />
              <p className="project-title"><Link className="project-title" to='/diplomacy'>U.S. Diplomacy</Link></p>
              <p className="project-description">Strategy: Digital Strategy, Mobile Product Development</p>
            </div>
            <div className="one-container">
              <img className="Image-stoop" src={stoop} />
              <p className="project-title"><Link className="project-title" to='/stoop'>The Stoop App Prototype</Link></p>
              <p className="project-description">Code: Ruby and Rails</p>
            </div>
            <div className="one-container">
              <img className="Image" src={caretaker} />
              <p className="project-title"><Link className="project-title" to='/caretaker'>Caretaker Support Service Prototype</Link></p>
              <p className="project-description">Design: Service Design, User Research, Prototyping</p>
            </div>
            <div className="one-container">
              <img className="Image" src={alasys} />
              <p className="project-title"><Link className="project-title" to='/alasys'>Alasys</Link></p>
              <p className="project-description">Strategy: New Product Market Entry Strategy and Analysis</p>
            </div>
            <div className="one-container">
              <img className="Image-pet" src={adopt} />
              <p className="project-title"><Link className="project-title" to='/adoptapet'>Adopt a Pet Prototype</Link></p>
              <p className="project-description">Code: Reactjs, Webpack, Nodejs</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
