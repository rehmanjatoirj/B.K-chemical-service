
import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { Phone, Mail, MapPin, User, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Shahnawaz will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Get a Free Site Visit</h3>
            <p className="text-lg text-slate-600 mb-10">
              Dealing with persistent leakage or termites? Don't wait until the damage gets worse. 
              Contact B.K Chemical Service today for a professional evaluation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Proprietor</h4>
                  <p className="text-slate-600">{CONTACT_DETAILS.proprietor}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-slate-600 hover:text-blue-600 font-semibold">{CONTACT_DETAILS.phone}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-slate-600 hover:text-blue-600">{CONTACT_DETAILS.email}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600 max-w-xs">{CONTACT_DETAILS.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    placeholder="03xx xxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                    <option>Bathroom Leakage</option>
                    <option>Roof Waterproofing</option>
                    <option>Termite Proofing</option>
                    <option>Civil Work</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    placeholder="Describe your problem..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
