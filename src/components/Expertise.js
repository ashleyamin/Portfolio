import React, { Component } from 'react';
import strategy from '../assets/strategy.png';
import design from '../assets/design.png';
import code from '../assets/code.png';

class Expertise extends Component {
  render() {
    return (
      <div className="Expertise">
        <h1 className="Title">my expertise</h1>
        <p className="Intro">I'm a designer and developer grounded in business rigor. I am passionate about transforming the way people live, and making a positive impact on business and society, by building meaningful digital products and experiences.</p>
        <div className="area-container">
          <div className="content-container">
            <img className="Icon" src={strategy} />
            <p className="Area">Strategy</p>
            <p className="area-tagline">The best solutions come from well framed problems.</p>
            <br />
            <p className="area-description">I simplify and humanize complex systems to identify untapped opportunities for innovation in context. I work with clients to clarify intent and purpose, and help them determine what to make and do.</p>
          </div>
          <div className="content-container">
            <img className="Icon" src={design} />
            <p className="Area">Design</p>
            <p className="area-tagline">The conscious effort to impose meaningful order.</p>
            <br />
            <p className="area-description">I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I’ve got skills in all phases of the design process.</p>
          </div>
          <div className="content-container">
            <img className="Icon" src={code} />
            <p className="Area">Code</p>
            <p className="area-tagline">It feels good to make ideas a reality.</p>
            <br />
            <p className="area-description">I’m a full-stack web developer, creating solutions with HTML5, CSS3, javascript, nodejs, reactjs, SQL, postgreSQL, and ruby/rails. I love coding from scratch and learning new technologies.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Expertise;
