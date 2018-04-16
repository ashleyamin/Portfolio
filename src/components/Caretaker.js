import React, { Component } from 'react';
import caretaker from '../assets/caretaker.png';
import actionplan from '../assets/caretaker/actionplan.png';
import direction from '../assets/caretaker/direction.png';
import future from '../assets/caretaker/future.png';
import prototype1 from '../assets/caretaker/prototype1.png';
import prototype2 from '../assets/caretaker/prototype2.png';
import prototype3 from '../assets/caretaker/prototype3.png';
import serviceblueprint from '../assets/caretaker/serviceblueprint.png';


class Caretaker extends Component {
  render() {
    return (
      <div className="Caretaker">
        <h1 className="Title">caretaker support service prototype</h1>
        <p className="tagline-caretaker">Design: Service Design, User Research, Prototyping</p>
        <div className="project-description-long-caretaker">
          Healthcare costs continue to rise while the personal responsibility to save for retirement and manage spending
          increases. The complexity of both the healthcare and financial systems makes it essential to
          have the right information at the right time, and support from experts, in aging.
          <br />
          <br />
          <br />
          I conducted customer research to understand customer behavior, goals and pain points. I developed
          various prototypes, including a service blueprint, facebook chatbot, and custom action plan
          to visualize the product and service concepts. I tested the prototypes with
          people to gain feedback, uncover unmet needs and assumptions. Ultimately, I learned that
          a solution to this challenge must address immediate health and financial needs,
          as well as features/services that include and support the caregiver.
          <br />
          <br />
          This product and service continues to be developed, please contact me for more information.
        </div>
        <img className="Image-big-caretaker" src={caretaker} />
        <img className="Image-big-caretaker" src={direction} />
        <img className="Image-big-caretaker" src={prototype2} />
        <img className="Image-big-caretaker" src={serviceblueprint} />
        <img className="Image-big-caretaker-action" src={actionplan} />
        <img className="Image-big-caretaker" src={prototype3} />
        <img className="Image-big-caretaker" src={future} />
      </div>
    );
  }
}

export default Caretaker;
