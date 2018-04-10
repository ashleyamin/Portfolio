import React, { Component } from 'react';
import about from '../assets/aboutme.png';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1 className="Title">about me</h1>
        <p className="Intro">I’m a cuthroat minimalist, making sure every detail is accounted for and intentional from strategy to design to code.
        As a former NCAA Divison 1 soccer player and team captian, I know discipline, determination, and hard work. I set goals, hit them and set more.
        <br />
        <br />
        <br />
        I’m always in search of new adventures and experiences. When I’m not designing and developing, you can find me
        playing pick up soccer in new york city, snowboarding in tahoe or running a half marathon in cleveland.
        </p>
        <img className="About-image" src={about} />
      </div>
    );
  }
}

export default About;
