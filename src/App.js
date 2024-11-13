import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
