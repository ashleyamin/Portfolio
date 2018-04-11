import React, { Component } from 'react';
import alasys from '../assets/alasys.png';

class Alasys extends Component {
  render() {
    return (
      <div className="Alasys">
        <img className="Image-big-alasys" src={alasys} />
        <h1 className="Title">alasys</h1>
        <p className="project-description">Strategy: New Product Market Entry Strategy and Analysis</p>
        <div className="project-description-long">
          ALASYS creates superior functional shelving, that upholds the highest design standards, to fit any space.
          Central to their design philosophy, they value quality and artistic expression, infusing it into everything they do.
          <br />
          <br />
          <br />
          The Strategic Design approach is iterative and robust, allowing for an approach that combines qualitative testing
          with quantitative analysis to support recommendations. I conducted customer research to understand customer behaviour, goals and pain points.
          The insights derived from this research & analysis support decisions that are in tune with customer needs and business imperatives.
          I do this by identifying target customers, developing target personas, understanding key customer experiences and needs, understanding industry trends,
          their drivers, and key strategies being employed by market leaders, while analysing market trends and best practices.
          I developed pricing and revenue model scenarios for four potential market entry approaches, outlining the growth potential and risks for pursuing each strategy.
          And ultimately recommeding a path forward with detailed next steps for implementation.
        </div>
      </div>
    );
  }
}

export default Alasys;
