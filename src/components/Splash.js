import React, { Component } from 'react';
import cover from '../assets/coverimage_pinkhue.png';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <img className="Cover" src={cover} />
      </div>
    );
  }
}

export default Splash;
