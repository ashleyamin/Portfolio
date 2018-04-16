import React, { Component } from 'react';
import diplomacy from '../assets/diplomacy.png';


class Diplomacy extends Component {
  render() {
    return (
        <div className="Diplomacy">
          <h1 className="Title">united states diplomacy</h1>
          <p className="tagline-stategov">Strategy: Digital Strategy, Mobile Product Development</p>
          <div className="project-description-long-stategov">
            A federal government organization was implementing a new state-wide technology application to help government workers
            support children and their families while managing an integrated ecosystem of internal government
            organizations, nonprofits, schools, healthcare organizations. With many different types of users
            and environments in which work was being done, it required a deep understanding of behaviors and contexts
            to ensure user needs were met and the technology application served as a tool that made their jobs easier,
            not harder.
            <br />
            <br />
            <br />
            We researched peoples’ behaviors and experiences in context by going directly into the field and gathering
            strategic customer insights through observations and interviews. By conducting research, we developed a nuanced
            view of the users we were designing for that allows us to shape experiences that meet their explicit and
            implicit needs and motivations. At the same time, we were also able to ensure strategic alignment with the business by
            validating our work with stakeholders.
          </div>
          <img className="Image-big-diplomacy" src={diplomacy} />
          <div className="disclaimer">Assets and information associated with this project are sensitive, please contact me if interested in learning more. </div>
        </div>
    );
  }
}

export default Diplomacy;
