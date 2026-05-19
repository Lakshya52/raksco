import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#080f1d] text-slate-400 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="font-serif text-2xl font-bold text-white flex items-center gap-1 mb-6">
              Raks<span className="text-gold">&</span>Company
            </Link>
            <p className="leading-relaxed mb-6 text-slate-400 max-w-sm">
              A firm of Chartered Accountants providing professional services in audit, taxation, and financial advisory.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Insights</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 hover:text-gold transition-colors">
              <Link to="/services">Major Services</Link>
            </h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-gold transition-colors">Tax Advisory & Compliance</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Audit & Assurance</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Financial Advisory</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Risk Management</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span>123 Financial District, Suite 500<br />Business Hub, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold shrink-0" size={20} />
                <span>contact@raksco.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Raks & Company Chartered Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
