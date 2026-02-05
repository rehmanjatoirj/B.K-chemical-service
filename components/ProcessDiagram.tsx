
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Zap, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <Search />, title: "Site Inspection", desc: "We identify leakage sources using moisture meters." },
  { icon: <Zap />, title: "Surface Prep", desc: "Scrubbing and cleaning to ensure chemical bonding." },
  { icon: <Shield />, title: "Chemical Coating", desc: "Multi-layer specialized waterproofing application." },
  { icon: <CheckCircle />, title: "Final Testing", desc: "Flood testing to guarantee zero seepage." }
];

const ProcessDiagram: React.FC = () => {
  return (
    <div className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white font-black text-4xl sm:text-5xl"
          >
            How We Protect Your Walls
          </motion.h2>
          <p className="text-blue-100 mt-4 text-lg">Our systematic 4-step professional process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 border-t-2 border-dashed border-blue-400 z-0"></div>
              )}
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 relative z-10 hover:bg-white transition-all duration-500 group">
                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h4 className="text-white group-hover:text-slate-900 font-bold text-xl mb-3">{step.title}</h4>
                <p className="text-blue-100 group-hover:text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 border-4 border-blue-400/30 rounded-full"
      />
    </div>
  );
};

export default ProcessDiagram;
