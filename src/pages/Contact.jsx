import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PopupModal } from 'react-calendly';
import BookConsultationCta from '../components/BookConsultationCta';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  useGSAP(() => {
    // Hero Elements Fade In
    gsap.from(".contact-hero-fade", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Contact Grid Animations on scroll
    gsap.from(".contact-info-panel", {
      x: -40,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid-container",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".contact-form-panel", {
      x: 40,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-grid-container",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-header-hero py-20 text-white mt-[-6rem] pt-[12rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-header-hero"></div>
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1400&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute backdrop-blur-sm inset-0 bg-gradient-to-r from-header-hero via-header-hero/90 to-header-hero/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 contact-hero-fade">Contact <span className="text-accent">Us</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto contact-hero-fade">
            Get in touch with our team of Chartered Accountants. We are here to help you navigate your financial landscape.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 contact-grid-container">
          {/* Contact Information */}
          <div className="lg:col-span-1 contact-info-panel">
            <div className="bg-[oklch(0.27_0.13_266.24)] p-10 md:p-12 rounded-[2rem] shadow-2xl border border-slate-800 text-white relative overflow-hidden h-full flex flex-col">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/30 rounded-full blur-[80px]"></div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-4xl font-serif text-white mb-6">Let's Talk</h3>
                <p className="text-slate-300 text-justify mb-12 leading-relaxed font-light text-lg">
                  Whether you are planning a capital raise, need structured debt advisory, require project finance documentation, or are seeking to transform your business — the first step is a conversation. We respond to all enquiries within 24 hours.
                </p>

                <div className="space-y-8 text-slate-300 mt-auto">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-slate-900 text-accent rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1.5 tracking-wide text-lg">Our Office</h4>
                      <span className="leading-relaxed font-light">214, 2nd Floor, Vishal Chambers, Noida Sector 18, Uttar Pradesh - 201301</span>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-slate-900 text-accent rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1.5 tracking-wide text-lg">Phone Number</h4>
                      <p className="leading-relaxed font-light">+91 120 444 5816</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-slate-900 text-accent rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1.5 tracking-wide text-lg">Email Address</h4>
                      <p className="leading-relaxed font-light hover:text-white transition-colors cursor-pointer">contact@raksco.in</p>
                      <p className="leading-relaxed font-light hover:text-white transition-colors cursor-pointer">support@raksco.in</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-slate-900 text-accent rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1.5 tracking-wide text-lg">Business Hours</h4>
                      <p className="leading-relaxed font-light">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 contact-form-panel">
            <div className="bg-white p-8 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full">
              <div className="mb-10">
                <span className="text-accent uppercase tracking-widest text-xs font-bold mb-3 block">Get in touch</span>
                <h3 className="text-4xl font-serif text-primary mb-3">Send Us a Message</h3>
                <p className="text-slate-500 text-lg">Please fill out the form below and we will get back to you shortly.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 shadow-sm"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 shadow-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Service Required</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 appearance-none shadow-sm font-medium text-slate-700" defaultValue="">
                      <option value="" disabled>Select a service...</option>
                      <option value="Tax Advisory & Compliance">Tax Advisory & Compliance</option>
                      <option value="Audit & Assurance">Audit & Assurance</option>
                      <option value="GST Advisory & Compliance">GST Advisory & Compliance</option>
                      <option value="Financial Advisory">Financial Advisory</option>
                      <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                      <option value="Startup Advisory & Registration">Startup Advisory & Registration</option>
                      <option value="Corporate Law Advisory">Corporate Law Advisory</option>
                      <option value="FEMA & RBI Compliance">FEMA & RBI Compliance</option>
                      <option value="Income Tax & Wealth Planning">Income Tax & Wealth Planning</option>
                      <option value="Project Reports & CMA Data">Project Reports & CMA Data</option>
                      <option value="Risk Management">Risk Management</option>
                      <option value="Management Consultancy Services">Management Consultancy Services</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                  <textarea
                    rows="6"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 resize-none shadow-sm"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_4px_20px_rgba(25,38,121,0.2)] hover:shadow-[0_8px_30px_rgba(25,38,121,0.3)] hover:-translate-y-1 mt-4">
                  Send Message <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <BookConsultationCta onBookClick={() => setCalendlyOpen(true)} />
      </div>

      <PopupModal
        url="https://calendly.com/lakshyachandaliya7/30min"
        onModalClose={() => setCalendlyOpen(false)}
        open={calendlyOpen}
        rootElement={document.getElementById('root')}
      />
    </div>
  );
}

export default Contact;
