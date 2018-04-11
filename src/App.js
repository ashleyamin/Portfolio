import React, { Component } from 'react';
import Header from './components/Header.js'
import Splash from './components/Splash.js'
import Expertise from './components/Expertise.js'
import Process from './components/Process.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import Essentials from './components/Essentials.js'
import Sports from './components/Sports.js'
import Stategov from './components/Stategov.js'
import Diplomacy from './components/Diplomacy.js'
import Stoop from './components/Stoop.js'
import Prepare from './components/Prepare.js'
import Caretaker from './components/Caretaker.js'
import Alasys from './components/Alasys.js'
import Adopt from './components/Adopt.js'

import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
          <Route exact path="/" component={Splash} />
          <Route exact path="/" component={Expertise} />
          <Route exact path="/" component={Process} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/essentials" component={Essentials} />
          <Route exact path="/up2us" component={Sports} />
          <Route exact path="/stategov" component={Stategov} />
          <Route exact path="/diplomacy" component={Diplomacy} />
          <Route exact path="/stoop" component={Stoop} />
          <Route exact path="/prepare" component={Prepare} />
          <Route exact path="/caretaker" component={Caretaker} />
          <Route exact path="/alasys" component={Alasys} />
          <Route exact path="/adoptapet" component={Adopt} />
        < Footer />
      </div>
    );
  }
}

export default App;
