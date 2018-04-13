import React, { Component } from 'react';
import alasys from '../assets/alasys.png';
import method from '../assets/alasys/method.png';
import customer from '../assets/alasys/customer.png';
import differentiate from '../assets/alasys/differentiate.png';
import problem from '../assets/alasys/problem.png';
import forces from '../assets/alasys/forces.png';

class Alasys extends Component {
  render() {
    return (
      <div className="Alasys">
        <h1 className="Title">alasys</h1>
        <p className="tagline-alasys">New Product Market Entry Strategy and Analysis</p>
        <div className="project-description-long-alasys">
          ALASYS creates superior functional shelving, that upholds the highest design standards, to fit any space.
          Central to their design philosophy, they value quality and artistic expression, infusing it into everything they do.
          <br />
          <br />
          <br />
          I conducted customer research to understand customer behavior, goals and pain points.
          The insights derived from this research & analysis support decisions that are in tune with customer needs and business imperatives.
          I do this by identifying target customers, developing target personas, understanding key customer experiences and needs, understanding industry trends,
          their drivers, and key strategies being employed by market leaders, while analysing market trends and best practices.
          I developed pricing and revenue model scenarios for four potential market entry approaches, outlining the growth potential and risks for pursuing each strategy and
          recommeding a path forward with detailed next steps for implementation.
        </div>
        <img className="Image-big-alasys" src={alasys} />
        <img className="method" src={method} />
        <img className="customer" src={customer} />
        <img className="customer" src={differentiate} />
        <img className="customer" src={problem} />
        <img className="forces" src={forces} />
      </div>
    );
  }
}

export default Alasys;
