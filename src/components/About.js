import React, { Component } from 'react';
import about from '../assets/aboutme.png';

class About extends Component {
  render() {
    return (
      <div className="About">
        <p className="Manifesto-intro">I believe in the underdogs and the hustlers,
          the early birds and the night owls, friends in low places, flyover country
           and the resiliency of the American spirit.
        </p>
        <p className="Manifesto">
           I believe this is going to be
           your best year yet. I believe in simplicity. I believe in family first.
           I believe creativity is the fuel that drives us and expertise is relative.
           I believe in building bridges, not walls. I believe in checklists.
           I believe in yes. I believe in getting back up. I believe in beating the odds.
           I believe all of us deserve a level playing field. I believe in questioning everything.
           I believe success is earned through hard work. I believe in setting goals, crushing them
           and setting more goals. I believe heart is the difference between those who attempt
           and those who achieve.
        </p>
        <p className="Manifesto-outro">I believe in humanity.</p>
        <div className="About-container">
          <p className="About-title">ashley amin</p>
          <p className="About-intro">I’m a cuthroat minimalist, making sure every detail is accounted
            for and intentional from strategy to design to code. As a former NCAA Divison
             1 soccer player and team captian, I know discipline, determination, and hard work.
          I’m always in search of new adventures and experiences. When I’m not designing and
          developing, you can find me playing pick up soccer in new york city, snowboarding
           in tahoe or running a half marathon in cleveland.
          </p>
          <img className="About-image" src={about} />
        </div>
      </div>
    );
  }
}

export default About;
