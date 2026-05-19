import React from 'react';
import { Calculator, Briefcase, TrendingUp, ShieldCheck, Scale, Globe, FileText, PieChart, ArrowRight, Landmark, BookOpen, Building2, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: <Calculator size={32} />,
      title: "Tax Advisory & Compliance",
      description: "Comprehensive direct and indirect tax services to ensure compliance with the Income Tax Act and related regulations.",
      features: ["Corporate Tax Planning", "International Taxation", "Transfer Pricing", "Tax Assessments", "Appeals & Litigation"]
    },
    {
      icon: <Briefcase size={32} />,
      title: "Audit & Assurance",
      description: "Independent audit and assurance services conducted in accordance with the Standards on Auditing prescribed by ICAI.",
      features: ["Statutory Audits", "Internal Audits", "Tax Audits", "Information Systems Audit", "Concurrent Audits"]
    },
    {
      icon: <Receipt size={32} />,
      title: "GST Advisory & Compliance",
      description: "End-to-end Goods and Services Tax (GST) support, ranging from registration to regular filings and representation.",
      features: ["GST Registration", "Monthly/Annual Return Filings", "GST Audits", "Refund Claims", "Advisory & Assessments"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Financial Advisory",
      description: "Professional advisory services for corporate restructuring, valuations, and strategic financial planning.",
      features: ["Mergers & Acquisitions", "Business Valuation", "Due Diligence", "Financial Modeling", "Capital Structuring"]
    },
    {
      icon: <BookOpen size={32} />,
      title: "Accounting & Bookkeeping",
      description: "Systematic maintenance of books of accounts and preparation of financial statements as per applicable accounting standards.",
      features: ["Day-to-day Bookkeeping", "Preparation of Financial Statements", "MIS Reporting", "Payroll Processing", "Fixed Asset Verification"]
    },
    {
      icon: <Building2 size={32} />,
      title: "Startup Advisory & Registration",
      description: "Guidance for new ventures on entity structuring, registration, and initial regulatory compliances.",
      features: ["Company/LLP Incorporation", "Startup India Registration", "MSME/Udyam Registration", "Founders' Agreements", "Initial Compliances"]
    },
    {
      icon: <Scale size={32} />,
      title: "Corporate Law Advisory",
      description: "Professional services to ensure compliance with the Companies Act, 2013 and related corporate laws.",
      features: ["ROC Filings", "Secretarial Audits", "Corporate Governance", "Drafting Resolutions", "Winding Up Proceedings"]
    },
    {
      icon: <Landmark size={32} />,
      title: "FEMA & RBI Compliance",
      description: "Advisory and compliance services under the Foreign Exchange Management Act for inbound and outbound investments.",
      features: ["FDI Compliances", "ODI Compliances", "FCGPR & FCTRS Filings", "FLA Returns", "RBI Approvals"]
    },
    {
      icon: <FileText size={32} />,
      title: "Income Tax & Wealth Planning",
      description: "Personalized income tax return filing, assessment support, and succession planning for individuals and HUFs.",
      features: ["ITR Filing", "Capital Gains Planning", "Wealth Management", "Estate Planning", "Trust Formation"]
    },
    {
      icon: <PieChart size={32} />,
      title: "Project Reports & CMA Data",
      description: "Preparation of project reports and Credit Monitoring Arrangement (CMA) data for project evaluation.",
      features: ["Project Reports", "CMA Data Preparation", "Working Capital Assessment", "Project Viability Studies", "Financial Projections"]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Risk Management",
      description: "Identification and assessment of enterprise risks along with the implementation of robust internal control frameworks.",
      features: ["Enterprise Risk Assessment", "Internal Financial Controls (IFC)", "SOP Development", "Fraud Investigation", "Compliance Reviews"]
    },
    {
      icon: <Globe size={32} />,
      title: "Management Consultancy Services",
      description: "Professional advisory and strategic financial leadership for organizations requiring specialized financial management.",
      features: ["Financial Strategy", "Cash Flow Management", "Budgeting & Forecasting", "MIS Development", "Performance Metrics (KPIs)"]
    }
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-24 text-white mt-[-6rem] pt-[12rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Areas of Practice
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our <span className="text-gold">Services</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional services in auditing, taxation, and financial advisory provided in compliance with ICAI guidelines.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-xl shadow-soft border border-slate-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-primary transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-primary mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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

export default Services;
