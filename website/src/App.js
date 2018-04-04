import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Skills from './components/skills.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header/>
        <Home />
        <section class="background-image" id="tubing">&nbsp;</section>
        <Skills/>

      </div>
    );
  }
}

export default App;
