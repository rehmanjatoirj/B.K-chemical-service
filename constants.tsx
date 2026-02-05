
import React from 'react';
import { 
  Droplets, 
  ShieldAlert, 
  Home, 
  Hammer, 
  Waves, 
  Bug, 
  ThermometerSnowflake, 
  Trash2, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Service, ContactInfo } from './types';

export const CONTACT_DETAILS: ContactInfo = {
  phone: "03123074381",
  email: "askarichemicalservice@gmail.com",
  address: "Shop# 51, Al-Syed Tower, Block- 13 -D/l, Gulshan-e-Iqbal, Karachi",
  proprietor: "Shahnawaz"
};

export const SERVICES: Service[] = [
  {
    id: 'bathroom-leakage',
    title: 'Bathroom Leakage Solution',
    description: 'Advanced chemical coatings and tile grouting to stop bathroom seepage permanently without dismantling.',
    icon: <Droplets className="w-8 h-8" />,
    category: 'waterproofing'
  },
  {
    id: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    description: 'Expert treatment for basement walls and floors to prevent ground water ingress and dampness.',
    icon: <Building2 className="w-8 h-8" />,
    category: 'waterproofing'
  },
  {
    id: 'roof-waterproofing',
    title: 'Roof Waterproofing',
    description: 'Multi-layer chemical membrane treatment to protect your roof from heavy Karachi rains and heat.',
    icon: <Home className="w-8 h-8" />,
    category: 'waterproofing'
  },
  {
    id: 'renovation',
    title: 'Home & Office Renovation',
    description: 'Complete interior and exterior renovation services to give your property a fresh, modern look.',
    icon: <Home className="w-8 h-8" />,
    category: 'civil'
  },
  {
    id: 'civil-work',
    title: 'Professional Civil Work',
    description: 'Quality construction, masonry, plastering, and general repair works by skilled labor.',
    icon: <Hammer className="w-8 h-8" />,
    category: 'civil'
  },
  {
    id: 'water-tank-leakage',
    title: 'Water Tank Leakage Repair',
    description: 'Food-grade chemical lining for underground and overhead tanks to stop leaks and contamination.',
    icon: <Waves className="w-8 h-8" />,
    category: 'waterproofing'
  },
  {
    id: 'termite-proofing',
    title: 'Termite Proofing (Deemak)',
    description: 'Pre and post-construction termite treatments with long-term guarantees using eco-friendly chemicals.',
    icon: <ShieldAlert className="w-8 h-8" />,
    category: 'pest-control'
  },
  {
    id: 'heat-insulation',
    title: 'Heat Insulation',
    description: 'Roof heat proofing coatings that can reduce indoor temperature by up to 5-8 degrees Celsius.',
    icon: <ThermometerSnowflake className="w-8 h-8" />,
    category: 'waterproofing'
  },
  {
    id: 'tank-cleaning',
    title: 'Professional Tank Cleaning',
    description: 'High-pressure cleaning and chlorination of water tanks for hygienic water storage.',
    icon: <Trash2 className="w-8 h-8" />,
    category: 'cleaning'
  },
  {
    id: 'pest-control',
    title: 'Pest Control Services',
    description: 'Comprehensive fumigation and pest control for cockroaches, bed bugs, and rodents.',
    icon: <Bug className="w-8 h-8" />,
    category: 'pest-control'
  }
];
