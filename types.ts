
// Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'waterproofing' | 'civil' | 'pest-control' | 'cleaning';
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  proprietor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
