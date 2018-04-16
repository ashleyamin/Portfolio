import React, { Component } from 'react';
import essentials from '../assets/essentials.png';
import code from '../assets/essentials/code.jpeg';
import customize from '../assets/essentials/customize.png';
import edit from '../assets/essentials/edit.png';
import future from '../assets/essentials/future.jpeg';
import overview from '../assets/essentials/overview.jpeg';
import signup from '../assets/essentials/signup.png';
import start from '../assets/essentials/start.png';
import tech from '../assets/essentials/tech.jpeg';

class Essentials extends Component {
  render() {
    return (
      <div className="Essentials">
        <h1 className="Title">the essentials prototype</h1>
        <p className="project-description">Code: Nodejs, Google Login API</p>
        <div className="project-description-long">
              41% of 50+ consumers faced a major medical event in the past five years.
              A medical event can occur at anytime and you may need the help of a loved
              one to manage the administrative parts of your life when you are unable to do so
              on your own. The Ready Set Plan App prototype was inspired by design research conducted
              about the experience of those caring for aging loved ones and their need to have
              a way to organize themselves and their loved ones, while receiving education/information
              on the new, unknown area of caregiving.
              <br />
              <br />
              <br />
              I built this prototype using HTML/EJS, Node and Express, SQL, pg-promise, and the Google Login
              API for registration/authorization. The main features include the ability to create, read, update and edit
              an item in the list, and create an account and sign in with a username/password and/or google credentials.
            </div>
        <div className="buttons">
          <a className="Learn-more-button" href="http://readysetplan.herokuapp.com/readysetplan" target="_blank">see the project</a>
          <a className="Github-button" href="https://github.com/ashleyamin/ReadySetPlan" target="_blank">see the code</a>
        </div>
        <img className="Image-big-essentials" src={overview} />
        <img className="Image-big-essentials" src={code} />
        <img className="Image-big-essentials" src={tech} />
        <img className="Image-big-essentials" src={start} />
        <img className="Image-big-essentials" src={signup} />
        <img className="Image-big-essentials" src={customize} />
        <img className="Image-big-essentials" src={edit} />
        <img className="Image-big-essentials" src={future} />
    </div>
    );
  }
}

export default Essentials;
