
import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { ShieldCheck, ArrowRight, MousePointer2, Waves } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* 2D Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 py-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
              <span>Premium Chemical Solutions Karachi</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter"
            >
              Stop The <br />
              <span className="gradient-text">Leakage</span> Forever.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl text-slate-500 mb-12 max-w-xl leading-snug font-medium"
            >
              Advanced German-technology chemical treatments for your home, basement, and roof. 100% Guaranteed.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#services" 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-[24px] font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-200 group"
              >
                Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-[24px] font-black text-sm uppercase tracking-widest hover:border-blue-600 transition-all"
              >
                Free Site Visit
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative z-20 overflow-hidden rounded-[60px] shadow-[0_50px_100px_-20px_rgba(30,64,175,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070&auto=format&fit=crop" 
                alt="Expert chemical technician" 
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Interactive Floaties */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 z-30"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">15+</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Expertise</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-20 bg-blue-600 text-white p-8 rounded-[40px] shadow-2xl z-30 max-w-[200px]"
            >
              <Waves className="mb-4 w-8 h-8 opacity-50" />
              <p className="font-black text-sm uppercase leading-tight">Water Tight Guarantee</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-slate-200 rounded-full p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-full h-2 bg-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
