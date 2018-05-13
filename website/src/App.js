import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Skills from './components/skills.jsx'
import About from './components/about.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Home />
        <section className="background-image" id="tubing">&nbsp;</section>
        <Skills />
        <About />

      </div>
    );
  }
}

export default App;
