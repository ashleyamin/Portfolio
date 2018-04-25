import React, { Component } from 'react';
import stoop from '../assets/stoop.png';


class Stoop extends Component {
  render() {
    return (
      <div className="Stoop">
        <img className="Image-big-stoop" src={stoop} />
        <h1 className="Title">the stoop app prototype</h1>
        <p className="tagline-essentials">Code: Ruby and Rails</p>
        <div className="project-description-long-stoop">
        Inspired by the growing number of civic and political activism digital products and services
        available for citizens and organizers, the stoop app prototype intends to be a collaborative tool
        (e.g. Yelp, Product Hunt) that assists individuals in identifying and sharing experiences
        and thoughts on these products in NYC.
        <br />
        <br />
        I built this using Ruby on Rails and a custom set of
        data utilizing three related table structures. The main features include the ability
        to create a new product, create a new experience review, and edit/update the reviews.
        <br />
        <br />
        Future updates will include creating user accounts, product/service owner accounts, and administration
        capabilities for monitoring posts.
        </div>
        <a className="Learn-more-button" href="http://thestoop.herokuapp.com/" target="_blank">see the project</a>
        <a className="Github-button" href="https://github.com/ashleyamin/The-Stoop" target="_blank">see the code</a>
      </div>
    );
  }
}

export default Stoop;
