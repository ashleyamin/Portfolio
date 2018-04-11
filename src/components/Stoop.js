import React, { Component } from 'react';
import stoop from '../assets/stoop.png';


class Stoop extends Component {
  render() {
    return (
      <div className="Stoop">
        <img className="Image-big-stoop" src={stoop} />
        <h1 className="Title">the stoop app</h1>
        <p className="project-description">Code: Ruby and Rails</p>
        <div className="project-description-long">
        The Stoop App is a collaborative tool that assists individuals in identifying
        and sharing experiences about civictech, government and community provided benefits, products
        and services in NYC. I built this using Ruby on Rails and a custom set of data utilizing three
        related table structures.
        </div>
        <a className="Learn-more-button" href="http://thestoop.herokuapp.com/" target="_blank">see the project</a>
        <a className="Github-button" href="https://github.com/ashleyamin/The-Stoop" target="_blank">see the code</a>
      </div>
    );
  }
}

export default Stoop;
