import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Award,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { allServices } from "../data/servicesData";
import { useLenis } from "lenis/react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  // Close mobile menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle mobile menu scroll locking to enable smooth inner-scrolling and prevent background scroll leakage
  useEffect(() => {
    if (lenis) {
      if (mobileMenuOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [mobileMenuOpen, lenis]);

  // Helper to determine if a route is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    // Services should remain active even on individual detail pages
    if (path === "/services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-305 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
            : "bg-white/95 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl sm:mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex flex-col">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-3xl font-bold text-primary flex items-center gap-1 group"
            >
              <span className="group-hover:text-accent transition-colors duration-300">
                RAKS
              </span>
              <span className="text-accent">&</span>
              <span className="group-hover:text-accent transition-colors duration-300">
                Company
              </span>
            </Link>
            <span>Chartered Accountants</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {/* Home */}
            <Link
              to="/"
              className={`nav-link relative py-1.5 transition-colors ${
                isActive("/")
                  ? "text-accent font-semibold"
                  : "text-slate-700 hover:text-accent"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full"></span>
              )}
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              className={`nav-link relative py-1.5 transition-colors ${
                isActive("/about")
                  ? "text-accent font-semibold"
                  : "text-slate-700 hover:text-accent"
              }`}
            >
              About Us
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full"></span>
              )}
            </Link>

            {/* Leadership */}
            <Link
              to="/leadership"
              className={`nav-link relative py-1.5 transition-colors ${
                isActive("/leadership")
                  ? "text-accent font-semibold"
                  : "text-slate-700 hover:text-accent"
              }`}
            >
              Leadership
              {isActive("/leadership") && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full"></span>
              )}
            </Link>

            {/* Dynamic Services Hover Dropdown Menu */}
            <div className="relative group py-1.5">
              <Link
                to="/services"
                className={`nav-link relative py-1.5 flex items-center gap-1 transition-colors ${
                  isActive("/services")
                    ? "text-accent font-semibold"
                    : "text-slate-700 hover:text-accent"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className="opacity-60 group-hover:rotate-180 transition-transform duration-300"
                />
                {isActive("/services") && (
                  <span className="absolute bottom-0 left-0 w-[calc(100%-18px)] h-[2px] bg-accent rounded-full"></span>
                )}
              </Link>

              {/* Hover Dropdown Mega-Menu Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[22rem] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50 p-3">
                {/* <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2 flex justify-between items-center"> */}
                  {/* <span>Our Practice Areas</span> */}
                  {/* <Link to="/services" className="text-accent hover:underline flex items-center gap-0.5 lowercase text-[10px]">
                    view all <ExternalLink size={10} />
                  </Link> */}
                {/* </div> */}

                <div
                  className="space-y-1  overflow-y-auto custom-scrollbar"
                  data-lenis-prevent
                >
                  {allServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="mt-0.5 text-accent/80 bg-accent/10 p-1.5 rounded-lg shrink-0 group-hover/item:bg-accent group-hover/item:text-white transition-colors duration-300 scale-90">
                        {service.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover/item:text-primary transition-colors leading-tight mb-0.5 font-sans">
                        {service.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${isActive("/contact") ? "bg-accent text-primary" : "bg-primary text-white hover:bg-accent hover:text-primary"} hover:shadow-[0_4px_15px_rgba(15,23,42,0.15)] active:scale-95`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Open Trigger */}
          <button
            type="button"
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto"
            data-lenis-prevent
          >
            <Link
              to="/"
              className={`nav-link block text-lg font-medium p-2 rounded-xl transition-colors ${
                isActive("/")
                  ? "text-accent bg-accent/5 font-semibold"
                  : "text-slate-800"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link block text-lg font-medium p-2 rounded-xl transition-colors ${
                isActive("/about")
                  ? "text-accent bg-accent/5 font-semibold"
                  : "text-slate-800"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/leadership"
              className={`nav-link block text-lg font-medium p-2 rounded-xl transition-colors ${
                isActive("/leadership")
                  ? "text-accent bg-accent/5 font-semibold"
                  : "text-slate-800"
              }`}
            >
              Leadership
            </Link>

            {/* Mobile Accordion Services Section */}
            <div className="rounded-xl border border-slate-150">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left text-lg font-medium p-4 flex justify-between items-center transition-colors rounded-xl ${
                  isActive("/services")
                    ? "text-accent bg-accent/5 font-semibold"
                    : "text-slate-800 bg-slate-50/50"
                }`}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-accent" : "text-slate-450"}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="bg-slate-50 py-2 border-t border-slate-100 rounded-b-xl">
                  {/* Main services landing link */}
                  <Link
                    to="/services"
                    className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-2.5 hover:text-accent"
                  >
                    <span>Services Overview</span>
                    <ExternalLink size={12} />
                  </Link>
                  <hr className="border-slate-100 my-1 mx-4" />

                  {allServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-6 py-3 hover:bg-accent/10 transition-colors"
                    >
                      <div className="text-accent shrink-0 scale-75">
                        {service.icon}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-tight">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`block text-lg font-medium p-3 rounded-xl transition-all duration-300 ${isActive("/contact") ? "bg-accent text-primary font-semibold" : "bg-primary text-white hover:bg-accent hover:text-primary"} hover:shadow-[0_4px_15px_rgba(15,23,42,0.15)]`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
