import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Wor</h1>
    </div>
    // <main>
    //   <Navbar />
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Contact />
    // </main>
  );
}

