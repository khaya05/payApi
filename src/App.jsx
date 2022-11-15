import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Pricing,Contact } from './pages';
import { Navbar, Footer } from './components';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
