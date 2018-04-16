import React, { Component } from 'react';
import adopt from '../assets/adopt.png';
import code from '../assets/adopt/code.png';
import manage from '../assets/adopt/manage.png';
import routes from '../assets/adopt/routes.jpeg';


class Adopt extends Component {
  render() {
    return (
      <div className="Adopt">
        <img className="Image-big-adopt-cover" src={adopt} />
        <h1 className="Title">adopt a pet prototype</h1>
        <p className="project-description">Code: Reactjs, Webpack, Nodejs</p>
        <div className="project-description-long">
              A CRUD App, using React and utilizing the Pet Finder API. A user can search for
              dogs to adopt by breed and zipcode. When the user finds a dog they may like,
              they can save it to a favorites list and edit their interest in the dog, add notes
              and/or remove from the puppy from the favorites list.
              <br />
              <br />
              A group project in our web development immersive program at general assembly, we
              used Trello for project management, developed whiteboard sketches for each screen,
              and defined our React routes and components prior to jumping into development.
              The PuppyFinder App was built collaboratively using React on the front end,
              webpack as the build manager, Node.js and the Express framework on the backend,
              with postgres as the database.
        </div>
        <a className="Learn-more-button" href="https://puppyfinderapp.herokuapp.com/" target="_blank">see the project</a>
        <a className="Github-button" href="https://github.com/ashleyamin/Puppy-Finder" target="_blank">see the code</a>
        <img className="Image-big-adopt" src={manage} />
        <img className="Image-big-adopt" src={routes} />
        <img className="Image-big-adopt" src={code} />
      </div>
    );
  }
}

export default Adopt;
