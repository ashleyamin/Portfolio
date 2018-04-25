import React, { Component } from 'react';
import diplomacy from '../assets/diplomacy.png';


class Diplomacy extends Component {
  render() {
    return (
        <div className="Diplomacy">
          <h1 className="Title">united states diplomacy</h1>
          <p className="tagline-diplomacy">Strategy: Digital Strategy, Mobile Product Development</p>
          <div className="project-description-long-diplomacy">
            A federal government organization was looking to equip it's global workforce with the latest
            technologies to enable mobile diplomacy. We supported the organization's efforts to develop a mobile
            strategy that gave workers access to information and systems anytime, anywhere. We helped the
            organization develop an internal mobile ecosystem capable of supporting rapid mobile adoption.
            <br />
            <br />
            <br />
            In addition to the overall strategy, we developed the foundation of six keys areas of the mobile ecosystem:
            government app store, device agnostic support, public and private application standards, digital asset library,
            internal mobile style guide, and organziation-wide application and mobile device registries.
          </div>
          <img className="Image-big-diplomacy" src={diplomacy} />
          <div className="disclaimer-diplomacy">Assets and information associated with this project are sensitive, please contact me if interested in learning more. </div>
        </div>
    );
  }
}

export default Diplomacy;
