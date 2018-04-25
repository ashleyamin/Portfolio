import React, { Component } from 'react';
import up2us from '../assets/up2us.jpg';
import brainstorm from '../assets/sports/brainstorm.png';
import coaches from '../assets/sports/coaches.JPG';
import cover from '../assets/sports/cover.jpg';
import timeline from '../assets/sports/timeline.png';
import prototype from '../assets/sports/prototype.png';
import context from '../assets/sports/context.png';
import overview from '../assets/sports/overview.png';
import process1 from '../assets/sports/process.png';
import process2 from '../assets/sports/process2.png';
import process3 from '../assets/sports/process3.png';
import output from '../assets/sports/output.png';
import how from '../assets/sports/how.png';



class Sports extends Component {
  render() {
    return (
      <div className="Sports">
        <h1 className="Title">up2us sports</h1>
        <p className="tagline-sports">Strategy: Design Research, Ideation, Prototyping</p>
        <div className="project-description-long-sports">
          Up2Us Sports is the nationwide leader in sports-based youth development (SBYD).
          Up2Us Sports hardnesses the power of sports to reduce youth violence, promote health,
          and inspire academic success for kids in every community. Up2Us Sports partnered
          with us to explore opportunities to enhance the training experience for Up2US Sports Coaches.
          <br />
          <br />
          <br />
          We conducted ethnographic research, exploring the training experience of coaches and
          embedding ourselves in the a week long training event experience. We synthesized insights
          from fieldwork and facilitated a collaborative ideation session with the Up2Us Sports team.
          We evaluated the ideas for feasibility, desirability and viability and identified the best fit
          idea for prototyping and testing. We built out the idea prototype and tested it with a select
          group of coaches for a week, collecting feedback during and post prototyping.
        </div>
        <img className="Image-big-sports" src={cover} />
        <img className="Image-big-sports" src={timeline} />
        <img className="Image-big-sports" src={context} />
        <img className="Image-big-sports" src={overview} />
        <img className="Image-big-sports" src={process1} />
        <img className="Image-big-sports" src={process2} />
        <img className="Image-big-sports" src={process3} />
        <img className="Image-big-sports" src={coaches} />
        <img className="Image-big-sports" src={how} />
        <img className="Image-big-sports" src={brainstorm} />
        <img className="Image-big-sports" src={prototype} />
        <img className="Image-big-sports" src={output} />
      </div>
    );
  }
}

export default Sports;
