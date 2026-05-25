import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Leadership from './pages/Leadership';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-slate-700 bg-white min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
