import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navigation from './componants/Navigation';
import Home from './componants/Home';
import About from './componants/About';

import Projects from './componants/Projects';
import Skills from './componants/Skills';
import Contact from './componants/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
     
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
