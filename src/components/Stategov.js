import React, { Component } from 'react';
import overview from '../assets/stategov/overview.jpeg';

class Stategov extends Component {
  render() {
    return (
      <div className="Stategov">
        <h1 className="Title">state government - children and family services</h1>
        <p className="tagline-stategov">Design: User Research, Personas, Journey Maps</p>
        <div className="project-description-long-stategov">
          A state government was implementing a new state-wide technology application to help government workers
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
        <img className="Image-big-stategov" src={overview} />
        <div className="project-description-long-stategov">
          We engaged segments of the user-base to develop user personas that avoid the deep granularity of profile-level role definition
          and focus on qualitative insight into how the system should work from a user perspective. The personas
          gave insight into the work habits, needs, current pain points, technology usage and other characteristics
          relevant to designing the system’s process flows and screens.
          <br />
          <br />
          <br />
          We developed user journey maps that documented the desired touchpoint interactions for the identified personas, both digital
          and with other personas, throughout the end-to-end flow. The journey maps sit above the level of business processes and focused
          on a more holistic understanding of the user experience. They provided an excellent vehicle with which to obtain
          stakeholder buy-in, tell stories to provide context and build empathy among the development team, and both map and prioritize core user requirements.
        </div>
        <div className="disclaimer">Assets and information associated with this project are sensitive, please contact me if interested in learning more. </div>
      </div>
    );
  }
}

export default Stategov;
