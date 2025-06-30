import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './pages/Landing';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Crisis from './pages/Crisis';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crisis" element={<Crisis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;