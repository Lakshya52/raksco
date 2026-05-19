import React from 'react';
import { Calculator, Briefcase, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-primary text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 bg-gradient-to-br from-primary/95 to-primary/80 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="City skyline"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
              Chartered Accountants
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Professional <span className="text-gold">Financial</span> Advisory & Compliance.
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Providing professional audit, tax, and advisory services. Committed to upholding the highest standards of professional ethics and integrity as mandated by the Institute of Chartered Accountants of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary justify-center">
                Our Services <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-outline justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-lg text-slate-600">We provide a full spectrum of accounting, tax, and advisory services designed to meet the complex needs of modern enterprises.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Tax Advisory & Compliance</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Strategic tax planning, corporate tax returns, and international tax structuring to optimize your liabilities and ensure total compliance.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Audit & Assurance</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Rigorous statutory and internal audits that provide deep insights, mitigate risks, and build stakeholder trust in your financial reporting.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Financial Advisory</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Mergers and acquisitions, business valuation, and capital restructuring services to drive your strategic growth initiatives.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Risk Management</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Identifying, evaluating, and mitigating operational and financial risks to safeguard your enterprise's future.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                alt="Accounting professionals reviewing documents"
                className="rounded-2xl shadow-soft w-full"
              />
            </div>

            <div>
              <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Firm</span>
              <h2 className="text-4xl md:text-5xl mb-6">Professional Services with Integrity and Ethics</h2>
              <div className="space-y-4 text-lg text-slate-600 mb-8">
                <p>
                  At Raks & Co, we provide comprehensive professional services in the fields of auditing, taxation, and corporate advisory.
                </p>
                <p>
                  Our team of Chartered Accountants is dedicated to maintaining the highest level of professional ethics, delivering services in strict accordance with statutory requirements.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="bg-gold/10 p-1.5 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Proactive advisory, not just reactive compliance</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="bg-gold/10 p-1.5 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Industry-specific deep expertise</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="bg-gold/10 p-1.5 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Unwavering commitment to ethics and confidentiality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl text-white mb-6">Professional Enquiries</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            For professional consultations and service inquiries, please reach out to our office.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded font-semibold text-lg hover:bg-gold transition-colors duration-300 shadow-xl hover:-translate-y-1 transform">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
