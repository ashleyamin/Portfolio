import React, { Component } from 'react';
import Header from './components/Header.js'
import Splash from './components/Splash.js'
import Expertise from './components/Expertise.js'
import Process from './components/Process.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < Splash />
        < Expertise />
        < Process />
        < Projects />
        < About />
        < Footer />
      </div>
    );
  }
}

export default App;
