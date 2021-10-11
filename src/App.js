import './index.css';
import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components//About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
 
class App extends React.Component {
  render() {
    return (
        <Router>
          <Route path="/">
            <Navbar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/">
            <About />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
          <Route path="/">
            <Skills />
          </Route>
          <Route path="/">
            <Contact />
          </Route>
        </Router>
    );
  }
}

export default App;
