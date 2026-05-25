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
      <div className="bg-primary py-20 text-white mt-[-6rem] pt-[12rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1400&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
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
          <div className="lg:col-span-1 space-y-8 contact-info-panel">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100">
              <h3 className="text-3xl font-serif text-primary ">Send Us a Message</h3>
              <p className="text-slate-500  text-justify my-10 mt-6">Whether you are planning a capital raise, need structured debt advisory, require project finance documentation, or are seeking to transform your business — the first step is a conversation. We respond to all enquiries within 24 hours.</p>
              {/* <h3 className="text-lg font-serif text-primary mb-6">Whether you are planning a capital raise, need structured debt advisory, require project finance documentation, or are seeking to transform your business — the first step is a conversation. We respond to all enquiries within 24 hours.</h3> */}

              <div className="space-y-6 text-slate-600">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Our Office</h4>
                    <span>214, 2nd Floor, Vishal Chambers, Noida Sector 18, Uttar Pradesh - 201301<br /></span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone Number</h4>
                    <p>+91 120 444 5816</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email Address</h4>
                    <p>contact@raksco.in<br />support@raksco.in</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 contact-form-panel">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-soft border border-slate-100">
              {/* <h3 className="text-3xl font-serif text-primary mb-2">Send Us a Message</h3>
              <p className="text-slate-500 mb-8">Whether you are planning a capital raise, need structured debt advisory, require project finance documentation, or are seeking to transform your business — the first step is a conversation. We respond to all enquiries within 24 hours.</p> */}

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-white" defaultValue="">
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
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
