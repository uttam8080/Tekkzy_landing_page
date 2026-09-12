import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Star, 
  Globe, 
  ArrowUpRight, 
  Quote, 
  X, 
  CheckCircle2, 
  Building2, 
  ShoppingBag, 
  Utensils, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { WaveDivider } from './WaveDivider';

import { TextReveal } from './TextReveal';

export interface ClientData {
  id: string;
  name: string;
  domain: string;
  logoText: string;
  logoBg: string;
  category: 'Hospitality' | 'E-Commerce' | 'Tech' | 'Creative';
  categoryLabel: string;
  quote: string;
  author: string;
  role: string;
  metrics: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
  gradient: string;
  colorAccent: string;
}

const clientsData: ClientData[] = [
  {
    id: 'happyprancer',
    name: 'Happyprancer',
    domain: 'happyprancer.com',
    logoText: 'HAPPY PRANCER',
    logoBg: 'from-blue-600 via-indigo-600 to-violet-700',
    category: 'E-Commerce',
    categoryLabel: 'E-Commerce & Retail',
    quote:
      'The digital marketing strategies and web identity created for us transformed our entire online presence. Our website traffic and customer engagement soared within weeks!',
    author: 'Elena Vance',
    role: 'Founder & CEO',
    metrics: [
      { label: 'Traffic Growth', value: '+340%' },
      { label: 'Active Shoppers', value: '45K+' },
      { label: 'Conversion Rate', value: '4.8%' },
    ],
    deliverables: ['E-Commerce Platform', 'Digital Marketing Campaign', 'Brand Identity', 'SEO Engine'],
    gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    colorAccent: '#3B82F6',
  },
  {
    id: 'onebite',
    name: 'OneBite Cafe',
    domain: 'onebitebpt.awsaiapp.com',
    logoText: 'ONEBITE CAFE',
    logoBg: 'from-emerald-500 via-teal-600 to-cyan-700',
    category: 'Hospitality',
    categoryLabel: 'Hospitality & Dining',
    quote:
      'Tekkzy has been a game-changer for our cafe. Their web application and digital marketing services significantly boosted our online bookings. The personal dashboard makes managing orders a breeze!',
    author: 'Marcus Chen',
    role: 'Managing Director',
    metrics: [
      { label: 'Monthly Orders', value: '18.5K' },
      { label: 'Customer Retention', value: '89%' },
      { label: 'Order Growth', value: '+210%' },
    ],
    deliverables: ['Web Booking App', 'Admin Dashboard', 'Payment Gateway Integration', 'Local SEO'],
    gradient: 'from-[#06B6D4] to-[#10B981]',
    colorAccent: '#10B981',
  },
  {
    id: 'disha',
    name: 'Disha Hotel & Restaurant',
    domain: 'dishahotel.com',
    logoText: 'DISHA HOTEL',
    logoBg: 'from-amber-500 via-rose-600 to-purple-700',
    category: 'Hospitality',
    categoryLabel: 'Hospitality & Management',
    quote:
      'Hotel management has never been easier since we adopted the custom AWSAIApp platform. The streamlined guest dashboard and integrated payments vastly improved our operational efficiency.',
    author: 'Rajesh Sharma',
    role: 'General Manager',
    metrics: [
      { label: 'Direct Bookings', value: '+165%' },
      { label: 'Guest Rating', value: '4.9/5' },
      { label: 'Check-in Time', value: '-60%' },
    ],
    deliverables: ['Hotel Management System', 'POS & Payment Gateway', 'Multi-language Portal', 'Staff Analytics'],
    gradient: 'from-[#F59E0B] to-[#EC4899]',
    colorAccent: '#F59E0B',
  },
  {
    id: 'nexacraft',
    name: 'NexaCraft AI',
    domain: 'nexacraft.io',
    logoText: 'NEXACRAFT',
    logoBg: 'from-cyan-600 via-blue-600 to-indigo-700',
    category: 'Tech',
    categoryLabel: 'Tech & SaaS',
    quote:
      'Their design team turned our complex AI architecture into a sleek, high-converting product showcase. Our user acquisition doubled in the first quarter.',
    author: 'Sarah Jenkins',
    role: 'VP of Product',
    metrics: [
      { label: 'User Signups', value: '85K+' },
      { label: 'SaaS ARR Growth', value: '+310%' },
      { label: 'Platform Uptime', value: '99.99%' },
    ],
    deliverables: ['SaaS Product UI/UX', 'Interactive Demo Dashboard', 'Design System', 'API Documentation'],
    gradient: 'from-[#06B6D4] to-[#6366F1]',
    colorAccent: '#06B6D4',
  },
  {
    id: 'aurastudio',
    name: 'Aura Studio',
    domain: 'aurastudio.design',
    logoText: 'AURA STUDIO',
    logoBg: 'from-pink-500 via-purple-600 to-indigo-800',
    category: 'Creative',
    categoryLabel: 'Creative & Media',
    quote:
      'Working with this team gave our agency a modern digital facade that wins enterprise contracts. The micro-animations and typography elevate our portfolio instantly.',
    author: 'Julian Thorne',
    role: 'Creative Director',
    metrics: [
      { label: 'Lead Inquiries', value: '+280%' },
      { label: 'Avg Deal Size', value: '+150%' },
      { label: 'Client Satisfaction', value: '100%' },
    ],
    deliverables: ['Portfolio Website', 'Custom 3D Animations', 'Brand Guidelines', 'Content Strategy'],
    gradient: 'from-[#EC4899] to-[#8B5CF6]',
    colorAccent: '#EC4899',
  },
];

const marqueeLogos = [
  { name: 'HAPPY PRANCER', icon: ShoppingBag, color: 'text-blue-400' },
  { name: 'ONEBITE CAFE', icon: Utensils, color: 'text-emerald-400' },
  { name: 'DISHA HOTEL', icon: Building2, color: 'text-amber-400' },
  { name: 'NEXACRAFT AI', icon: Cpu, color: 'text-cyan-400' },
  { name: 'AURA STUDIO', icon: Sparkles, color: 'text-pink-400' },
  { name: 'VELOCITY LABS', icon: TrendingUp, color: 'text-purple-400' },
  { name: 'ZENITH HEALTH', icon: Globe, color: 'text-teal-400' },
];

const techStackList = [
  {
    name: 'TypeScript',
    icon: (
      <svg className="w-full h-full rounded" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4 8h8M8 8v10M13.5 15.5c1 .8 2.3 1.2 3.5 1.2 1.5 0 2.5-.6 2.5-1.7 0-2.3-5.5-1.5-5.5-4.7 0-1.7 1.4-2.8 3.5-2.8 1.2 0 2.2.3 3 .8v2.4c-.9-.6-1.9-.9-2.9-.9-1.3 0-2.1.5-2.1 1.4 0 2.2 5.5 1.4 5.5 4.7 0 1.8-1.4 2.9-3.7 2.9-1.4 0-2.7-.4-3.8-1.1v-2.1z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'React / React Native',
    icon: (
      <svg className="w-full h-full" viewBox="-11.5 -10.23 23 20.46" fill="none">
        <circle cx="0" cy="0" r="2.1" fill="#0284C7" />
        <g stroke="#0284C7" strokeWidth="1.25" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.5v2.5h5v.8H5.6C3.4 8.8 2 10.6 2 13.5c0 3 1.6 4.7 4.5 4.7h1.5v-2.3c0-2.1 1.7-3.8 3.8-3.8h5v-.8c0-2.8-1.7-4.5-4.9-4.5V2zm-1.8 1.6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB" />
        <path d="M12.1 22c3.1 0 4.9-1.4 4.9-3.5V16h-5v-.8h6.4c2.2 0 3.6-1.8 3.6-4.7 0-3-1.6-4.7-4.5-4.7H16v2.3c0 2.1-1.7 3.8-3.8 3.8h-5v.8c0 2.8 1.7 4.5 4.9 4.5V22zm1.8-1.6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M7.5 7.5v9h2.3V11.2l6.2 5.3h1.8V7.5h-2.3v5.3L9.3 7.5H7.5z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Swift',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M21.5 15.5c-3.1 3.5-7.7 5.5-12.5 5.5 5.2-2.3 8.8-6.3 10-11.5-2.2 2-5 3.1-8 3.1 4.5-3.3 6.6-7.8 6.5-10.6-2.5 2.5-6 4.3-9.5 4.8C9.5 5 11 3 13 2 9.5 3 6.5 5.5 5 9c1.5-.7 3.3-.9 5-.5-3.5 1.5-6 4.5-7 8.5 2-.8 4.2-1 6.5-.5-4.5 2.5-6.5 6.5-6.5 6.5 4.2.7 8.5.2 12.5-1.5 2.3-.9 4.3-2.3 6-4z" fill="#F05138" />
      </svg>
    ),
  },
  {
    name: 'Kotlin',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M2 2h20L12 12l10 10H2V2z" fill="#7F52FF" />
        <path d="M2 2l10 10L2 22V2z" fill="#0095D5" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 2L3 12.5l3.2 3.2L19.9 2h-6.4z" fill="#42A5F5" />
        <path d="M13.5 12l-5.3 5.3 3.2 3.2 2.1-2.1L19.9 12h-6.4z" fill="#0D47A1" />
        <path d="M8.2 17.3l3.2 3.2 2.1-2.1-3.2-3.2-2.1 2.1z" fill="#01579B" />
      </svg>
    ),
  },
  {
    name: 'Dart',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h7l9 9-4.5 4.5L4 4z" fill="#0175C2" />
        <path d="M11 4l9 9-4.5 7L6.5 11 11 4z" fill="#00B4AB" />
        <path d="M4 4l7 7-4.5 4.5L2 11 4 4z" fill="#53C5F8" />
      </svg>
    ),
  },
  {
    name: 'Vue.js',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h4.5L12 13 17.5 3H22L12 21 2 3z" fill="#42B883" />
        <path d="M6.5 3L12 13 17.5 3H14L12 6.5 10 3H6.5z" fill="#35495E" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#339933" />
        <path d="M12 4.4L18.6 8v7.6L12 19.3 5.4 15.6V8L12 4.4z" fill="#121619" />
        <path d="M10 9v6h1.8v-3.5l2 3.5h1.7V9h-1.8v3.5l-2-3.5H10z" fill="#339933" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg className="w-full h-full rounded" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 14.5c0 2 1.3 3.5 3 3.5 1.7 0 2.7-.9 2.7-2.3V8H11v7.6c0 .7-.4 1.1-1 1.1-.6 0-.9-.4-.9-1V14.5H7zm7.5 1.2c1 .8 2.2 1.3 3.5 1.3 1.5 0 2.4-.6 2.4-1.7 0-2.3-5.2-1.5-5.2-4.6 0-1.7 1.3-2.7 3.3-2.7 1.2 0 2.2.3 3 .8v2.2c-.9-.5-1.9-.8-2.9-.8-1.2 0-1.9.5-1.9 1.3 0 2.1 5.2 1.4 5.2 4.6 0 1.8-1.4 2.9-3.6 2.9-1.4 0-2.7-.4-3.7-1.1v-2.2z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.3 1.4 2.9 3 6.3 3 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.4-2.9-3-6.3-3zM5.4 12c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8 1.3 1.4 2.9 3 6.3 3 3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.4-2.9-3-6.3-3z" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    name: 'Golang',
    icon: (
      <svg className="w-full h-full rounded" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00ADD8" />
        <path d="M5 12c0-2.8 2.2-5 5-5 2.1 0 3.8 1.2 4.6 3h-2.4c-.6-.7-1.3-1.1-2.2-1.1-1.7 0-3 1.3-3 3.1s1.3 3.1 3 3.1c1 0 1.8-.5 2.3-1.3H10v-1.8h4.8v4.5C13.8 16.6 12 17 10 17c-2.8 0-5-2.2-5-5zm12.5-5c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zm0 1.9c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.7-1.6-1.6-1.6z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.4 9.2.2-.4.4-.9.6-1.5-.7-.3-1.4-.7-2-1.2.3-.5.7-1 1.2-1.4-.4-.7-.7-1.5-.8-2.3 1.1.2 2.2.2 3.2-.2-.2-.6-.3-1.3-.3-2 0-3.3 2.7-6 6-6s6 2.7 6 6c0 .7-.1 1.4-.3 2 1 .4 2.1.4 3.2.2-.1.8-.4 1.6-.8 2.3.5.4.9.9 1.2 1.4-.6.5-1.3.9-2 1.2.2.6.4 1.1.6 1.5 3.8-1.4 6.4-5 6.4-9.2 0-5.5-4.5-10-10-10z" fill="#336791" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C11.5 2 8 8 8 13.5c0 4.5 3 7.5 4 8.5 1-1 4-4 4-8.5C16 8 12.5 2 12 2z" fill="#47A248" />
        <path d="M12 2.5v19c.7-.7 3.5-3.5 3.5-8 0-5-3-10-3.5-11z" fill="#499D4A" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'GraphQL',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z" stroke="#E10098" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="2" r="2" fill="#E10098" />
        <circle cx="20.7" cy="7" r="2" fill="#E10098" />
        <circle cx="20.7" cy="17" r="2" fill="#E10098" />
        <circle cx="12" cy="22" r="2" fill="#E10098" />
        <circle cx="3.3" cy="17" r="2" fill="#E10098" />
        <circle cx="3.3" cy="7" r="2" fill="#E10098" />
        <path d="M12 4.5v15M4.5 8l15 8M4.5 16l15-8" stroke="#E10098" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M22.5 11c-.3 0-1.5 0-2.3.8-.5-.3-1.4-.5-2.4-.4-.5-1.2-1.6-2-3-2.1-.2-.8-.8-1.5-1.6-1.9-.3-.1-.6-.2-1-.2h-.2V5h-3v2H7V5H4v2H2v6.5C2 17.5 5 20 10.5 20c6.5 0 10.5-3.5 11.5-8.5.5-.1.8-.3 1-.5h.2c.2 0 .5-.2.5-.5 0-.3-.4-.5-1.2-.5z" fill="#2496ED" />
        <rect x="5" y="8" width="2" height="2" fill="#FFFFFF" />
        <rect x="8" y="8" width="2" height="2" fill="#FFFFFF" />
        <rect x="11" y="8" width="2" height="2" fill="#FFFFFF" />
        <rect x="8" y="5.5" width="2" height="2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'AWS Cloud',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M7 16c2.5 1.5 6.5 2.2 10 .5.5-.2 1.1.3.8.8-2 2-6.5 2.7-10.8 1.2-.6-.2-.6-.8 0-.9v-1.6z" fill="#FF9900" />
        <path d="M18.5 14.5l2 2.5-3 .8 1-3.3z" fill="#FF9900" />
        <path d="M5.5 12.5C4 12 3 10.8 3 9.3 3 7.5 4.5 6 6.5 6c.5 0 1 .1 1.5.3C9 4.8 10.8 4 13 4c3.3 0 6 2.5 6.3 5.7 1.5.5 2.7 1.8 2.7 3.3 0 2-1.7 3.5-3.8 3.5H7c-.6 0-1.1-.1-1.5-.4" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M4 17.5L6.5 2.5l4 7.5L8 14.5 4 17.5z" fill="#FFA000" />
        <path d="M4 17.5l8 4.5 8-4.5-4-15L4 17.5z" fill="#F57C00" opacity="0.5" />
        <path d="M12 22l8-4.5-3-14.5-5 19z" fill="#FFCA28" />
      </svg>
    ),
  },
  {
    name: 'PHP',
    icon: (
      <svg className="w-full h-full rounded-full" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
        <path d="M6 10h2.5c.8 0 1.5.4 1.5 1.2 0 1-.8 1.3-1.5 1.3H7.2V14H6V10zm1.2 1.8h1.2c.3 0 .6-.1.6-.5 0-.3-.3-.5-.6-.5H7.2v1zM11 10h1.2v1.5h1.6V10H15v4h-1.2v-1.5h-1.6V14H11V10zm5 0h2.5c.8 0 1.5.4 1.5 1.2 0 1-.8 1.3-1.5 1.3h-1.3V14H16V10zm1.2 1.8h1.2c.3 0 .6-.1.6-.5 0-.3-.3-.5-.6-.5h-1.2v1z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M3 3l1.8 16.5L12 22l7.2-2.5L21 3H3z" fill="#E34F26" />
        <path d="M12 4.5v15.8l5.8-2L19.2 4.5H12z" fill="#EF652A" />
        <path d="M12 8.5H7.5l.3 3.5h4.2v-3.5zm0 5.5H8l.2 2 3.8 1v-3z" fill="#FFFFFF" />
        <path d="M12 8.5h4.5l-.4 4.5H12V11.5h3.2l.2-1.5H12V8.5zm0 5.5v3l3.8-1 .3-3.2H12v1.2z" fill="#EBEBEB" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#DC382D" />
        <path d="M2 12l10 5 10-5" stroke="#DC382D" strokeWidth="2" fill="none" />
        <path d="M2 17l10 5 10-5" stroke="#DC382D" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

export const ExperienceBand: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedClientModal, setSelectedClientModal] = useState<ClientData | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const filteredClients = activeCategory === 'All'
    ? clientsData
    : clientsData.filter((c) => c.category === activeCategory);

  useEffect(() => {
    if (!isAutoplay || filteredClients.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % filteredClients.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, filteredClients.length]);

  useEffect(() => {
    setActiveSlide(0);
  }, [activeCategory]);

  const currentClient = filteredClients[activeSlide] || filteredClients[0];

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveSlide((prev) => (prev + 1) % filteredClients.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveSlide((prev) => (prev - 1 + filteredClients.length) % filteredClients.length);
  };

  return (
    <section id="about" className="relative bg-[#121619] text-white overflow-hidden -mt-8 sm:-mt-12 md:-mt-16 z-20 pt-0 pb-0">
      {/* Wave Transition Top */}
      <WaveDivider variant="cream-to-dark" />

      {/* Ambient Lighting & Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#3B82F6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#C59A58]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* --- UPPER BLACK GAP: CONTINUOUS PROGRAMMING LANGUAGES MARQUEE (ENLARGED & TOUCHING SECTION DIVIDER) --- */}
      <div className="relative w-full z-20 -mt-6 sm:-mt-10 md:-mt-14 pt-0 pb-4 sm:pb-6 overflow-hidden">
        {/* Subtle Side Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#121619] via-[#121619]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#121619] via-[#121619]/90 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track - Moving Right to Left */}
        <div className="flex w-max animate-tech-marquee space-x-4 sm:space-x-6 items-center py-2">
          {[...techStackList, ...techStackList, ...techStackList].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              title={tech.name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-white border-2 border-white/90 hover:border-[#EC4899] hover:ring-4 hover:ring-[#EC4899]/30 hover:shadow-[0_0_35px_rgba(236,72,153,0.75)] hover:scale-110 transition-all duration-300 group cursor-pointer flex-shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-2 sm:pt-4 pb-10 sm:pb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[#25D366] text-[11px] font-bold tracking-[0.2em] uppercase">
              Trusted By Industry Leaders
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            <TextReveal text="Our Clients & Success Stories" mode="words" delay={0.1} />
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed"
          >
            Empowering businesses with custom Web apps, brand identities, and digital marketing.
          </motion.p>
        </div>

        {/* --- 1. INFINITE CLIENT LOGO MARQUEE --- */}
        <div className="relative w-full overflow-hidden mb-8 py-2.5 border-y border-white/10 bg-[#171C20]/60 backdrop-blur-md">
          {/* Subtle Side Fades */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#121619] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#121619] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee space-x-6 sm:space-x-10 items-center">
            {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/40 hover:bg-white/10 transition-all duration-300 group cursor-default whitespace-nowrap"
                >
                  <IconComp className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-black tracking-wider text-gray-200 group-hover:text-white">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 2. FEATURED CLIENT SPOTLIGHT CAROUSEL --- */}
        {currentClient && (
          <div className="relative max-w-5xl mx-auto">
            
            {/* Animated Progress Timer Line */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                key={activeSlide + '-progress'}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#3B82F6]"
              />
            </div>

            {/* Glowing Main Container Card - COMPACT HEIGHT */}
            <div className="relative bg-[#1A2026]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden group">
              
              {/* Corner Decorative Gradients */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-[#25D366]/20 to-transparent rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-[#3B82F6]/20 to-transparent rounded-br-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Showcase Column */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentClient.id + '-logo-box'}
                      initial={{ opacity: 0, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="w-full max-w-xs flex flex-col items-center"
                    >
                      {/* Logo Badge Container - Reduced Height */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className={`relative w-full h-36 sm:h-44 bg-gradient-to-br ${currentClient.logoBg} rounded-xl p-5 flex flex-col items-center justify-center shadow-xl border border-white/20 relative group-hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] transition-all duration-400`}
                      >
                        <div className="text-center">
                          <span className="text-[10px] uppercase font-extrabold tracking-widest text-white/80 block mb-1">
                            {currentClient.categoryLabel}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight border-2 border-white/40 px-3.5 py-1.5 rounded-lg backdrop-blur-md bg-black/20 font-mono">
                            {currentClient.logoText}
                          </h3>
                        </div>

                        <div className="absolute bottom-2.5 right-3 text-white/60 text-[11px] flex items-center gap-1 font-sans">
                          <span>{currentClient.domain}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </motion.div>

                      {/* Quick CTA button */}
                      <button
                        onClick={() => setSelectedClientModal(currentClient)}
                        className="mt-3 text-xs font-bold text-[#25D366] hover:text-white flex items-center gap-1.5 transition-colors group/cta"
                      >
                        <span>View Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                      </button>
                    </motion.div>
                  </AnimatePresence>

                </div>

                {/* Right Content & Metrics Column - Compact spacing */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentClient.id + '-details'}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Category Tag & Name */}
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-white/10 text-[#25D366] border border-[#25D366]/30">
                          {currentClient.categoryLabel}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {currentClient.name}
                        </h3>
                      </div>

                      {/* Testimonial Quote - Compact */}
                      <div className="relative bg-white/5 border border-white/10 rounded-xl p-4 shadow-inner">
                        <Quote className="w-5 h-5 text-[#25D366]/40 mb-1" />
                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed italic mb-2 font-light">
                          &ldquo;{currentClient.quote}&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">
                            {currentClient.author}
                          </span>
                          <span className="text-gray-400">
                            {currentClient.role}
                          </span>
                        </div>
                      </div>

                      {/* Key Impact Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {currentClient.metrics.map((m, idx) => (
                          <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.08 }}
                            whileHover={{ y: -2 }}
                            className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-center hover:border-[#25D366]/40 shadow-sm transition-all"
                          >
                            <div className="text-lg sm:text-xl font-black bg-gradient-to-r from-[#25D366] to-[#10B981] bg-clip-text text-transparent">
                              {m.value}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                              {m.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Deliverables tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentClient.deliverables.map((item, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 border border-white/10 text-gray-300 hover:border-white/30 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                            {item}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </AnimatePresence>

                </div>

              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between mt-4 px-1">
              <div className="text-[11px] text-gray-400 font-mono">
                0{activeSlide + 1} / 0{clientsData.length}
              </div>

              {/* Dots indicator for stories */}
              <div className="flex items-center gap-1.5">
                {clientsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoplay(false);
                      setActiveSlide(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeSlide ? 'w-6 bg-[#25D366]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to client story ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-[#25D366] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Previous client"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-[#25D366] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Next client"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* --- 4. INTERACTIVE CLIENT SPOTLIGHT MODAL --- */}
      <AnimatePresence>
        {selectedClientModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#1A2026] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedClientModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className={`w-full h-32 bg-gradient-to-r ${selectedClientModal.logoBg} rounded-2xl p-6 flex items-center justify-between mb-6 shadow-lg`}>
                <div>
                  <span className="text-xs font-bold text-white/80 uppercase tracking-widest block mb-1">
                    {selectedClientModal.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-black text-white font-mono">
                    {selectedClientModal.logoText}
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/20 text-xs font-mono text-white/90">
                  {selectedClientModal.domain}
                </div>
              </div>

              {/* Modal Title & Story */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  Case Study: {selectedClientModal.name} Transformation
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedClientModal.quote}
                </p>
              </div>

              {/* Detailed Metrics */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Verified Key Metrics & Impact
                </h5>
                <div className="grid grid-cols-3 gap-3">
                  {selectedClientModal.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-[#25D366]">{m.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mb-6">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Solutions Delivered
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {selectedClientModal.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedClientModal(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`https://${selectedClientModal.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center gap-1.5 hover:shadow-lg hover:shadow-[#25D366]/20 transition-all"
                >
                  <span>Visit Client Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* Wave Transition Bottom */}
      <WaveDivider variant="dark-to-cream-inverted" />
    </section>
  );
};

