
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import ProcessDiagram from './components/ProcessDiagram';
import { CONTACT_DETAILS } from './constants';
import { MapPin, Phone, Mail, ShieldCheck, Heart, ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 text-white mb-8">
            <div className="bg-blue-600 p-2 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight uppercase">B.K CHEMICAL</span>
          </div>
          <p className="text-sm leading-relaxed mb-8 opacity-70">
            Pioneering the chemical service industry in Karachi since 2008. We bring global technology to local problems.
          </p>
          <div className="flex space-x-4">
             {[Instagram, Facebook, Linkedin].map((Icon, i) => (
               <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all">
                 <Icon size={18} />
               </a>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Specializations</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center group">Bathroom Seepage <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center group">Foundation Proofing <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center group">Deemak Treatment <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center group">Water Tank Lining <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" /></a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Company</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Shahnawaz</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Guarantee</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px]">Contact Us</h4>
          <ul className="space-y-6 text-sm font-bold">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-blue-500 flex-shrink-0" />
              <span className="leading-snug opacity-70">{CONTACT_DETAILS.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-blue-500 flex-shrink-0" />
              <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-white transition-colors">{CONTACT_DETAILS.phone}</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-blue-500 flex-shrink-0" />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-white transition-colors break-all">{CONTACT_DETAILS.email}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
        <p className="opacity-40">&copy; {new Date().getFullYear()} B.K CHEMICAL SERVICE. ALL RIGHTS RESERVED.</p>
        <p className="mt-6 md:mt-0 flex items-center space-x-2 text-slate-500">
          <span>MADE FOR SHAHNAWAZ</span>
          <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop" 
                      className="rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-700" 
                      alt="Industry Tools" 
                    />
                    <div className="bg-blue-600 p-8 rounded-[40px] text-white">
                      <p className="text-5xl font-black mb-2 tracking-tighter italic">500+</p>
                      <p className="text-[10px] font-black uppercase tracking-widest">Successful Projects</p>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="bg-slate-100 p-8 rounded-[40px] text-slate-900">
                      <p className="text-4xl font-black mb-2">100%</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">German Chemicals</p>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1621155802521-7053075249f0?q=80&w=2070&auto=format&fit=crop" 
                      className="rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-700" 
                      alt="Construction" 
                    />
                  </div>
                </div>
                
                {/* 2D Background Circle */}
                <div className="absolute -top-10 -left-10 w-full h-full bg-blue-50 rounded-full -z-10 animate-pulse" />
              </motion.div>
              
              <div className="mt-16 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8">The Professional Choice</h2>
                  <h3 className="text-5xl sm:text-6xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tighter">
                    Built on <span className="gradient-text">Trust</span>, Mastered in <span className="gradient-text">Karachi</span>.
                  </h3>
                  <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
                    Shahnawaz (Proprietor) established B.K Chemical with one mission: to eliminate the common construction woes of Karachi homes using superior technology and honest workmanship. 
                  </p>
                  
                  <div className="space-y-6 mb-16">
                     {[
                       "Lifetime Seepage Protection Guarantee",
                       "Professional Grade Polyurethane Coatings",
                       "Highly Skilled Supervised Technicians",
                       "Transparent Pricing, No Hidden Costs"
                     ].map((item, i) => (
                       <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-4 group p-5 bg-slate-50 rounded-3xl hover:bg-blue-50 transition-colors"
                       >
                          <div className="bg-white text-blue-600 p-2 rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                             <ShieldCheck size={20} />
                          </div>
                          <span className="text-slate-800 font-bold text-sm uppercase tracking-wider">{item}</span>
                       </motion.div>
                     ))}
                  </div>
                  
                  <motion.a 
                    href="#contact" 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-600 font-black text-sm uppercase tracking-[0.3em] group"
                  >
                    Schedule site visit 
                    <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <ProcessDiagram />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
