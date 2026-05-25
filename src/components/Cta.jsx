import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
    return (
        <>

            {/* Call to Action Mini */}
            <div className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden" >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Professional Inquiries</h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                        For professional consultations and service inquiries, please reach out to our office.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded font-semibold text-lg transition-colors duration-300 shadow-xl">
                        Contact Us <ArrowRight size={20} />
                    </Link>
                </div>
            </div >
        </>
    )
}

export default Cta