import React from 'react';
import { Target, Lightbulb, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-24 text-white mt-[-6rem] pt-[12rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">About <span className="text-gold">Raks & Co.</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A firm of Chartered Accountants dedicated to providing professional services with integrity and ethical standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Firm</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Professionalism, Ethics, and Integrity</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Raks & Co is a firm of Chartered Accountants established to provide professional services in the fields of auditing, taxation, and corporate advisory.
              </p>
              <p>
                We are committed to maintaining the highest level of professional ethics and integrity, strictly adhering to the guidelines set forth by the Institute of Chartered Accountants of India (ICAI).
              </p>
              <p>
                Our practice is focused on delivering quality services to our clients, assisting them in meeting their statutory compliances and regulatory requirements efficiently.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gold/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Team collaborating"
              className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">The Principles That Guide Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Precision</h3>
              <p className="text-slate-600 text-sm">Exactitude in every calculation, filing, and strategy we develop.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Integrity</h3>
              <p className="text-slate-600 text-sm">Uncompromising ethical standards and complete transparency.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Innovation</h3>
              <p className="text-slate-600 text-sm">Applying modern technology and agile thinking to traditional finance.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Partnership</h3>
              <p className="text-slate-600 text-sm">Working alongside you as a dedicated extension of your team.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Mini */}
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Professional Inquiries</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              For professional consultations and service inquiries, please reach out to our office.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary px-8 py-4 rounded font-semibold text-lg transition-colors duration-300 shadow-xl">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
