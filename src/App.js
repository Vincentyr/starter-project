import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends React.Component {
  render() {
      return (
        <main>
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
    );
  }
}

export default App;

