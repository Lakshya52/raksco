import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PopupModal } from 'react-calendly';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary flex items-center gap-1">
            Raks<span className="text-gold">&</span>Co.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <button
              onClick={() => setCalendlyOpen(true)}
              className="bg-primary hover:bg-gold hover:text-primary text-white px-6 py-2 rounded font-medium transition-colors duration-300"
            >
              Book Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col gap-4">
            <Link to="/" className="nav-link block">Home</Link>
            <Link to="/services" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/about" className="nav-link block" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="nav-link block">Contact</Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCalendlyOpen(true);
              }}
              className="bg-primary text-white px-6 py-2 rounded font-medium mt-2 w-full text-center"
            >
              Book Consultation
            </button>
          </div>
        )}
      </header>

      {/* Calendly Popup Modal */}
      <PopupModal
        url="https://calendly.com/lakshyachandaliya7/30min"
        onModalClose={() => setCalendlyOpen(false)}
        open={calendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </>
  );
}

export default Navbar;
