export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  sqft: string;
  image: string;
  description?: string;
  year?: string;
  location?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconType: 'architectural' | 'residential' | 'commercial' | 'interior' | 'renovation' | 'management';
}

export interface BlogPost {
  id: string;
  title: string;
  date: {
    month: string;
    day: string;
  };
  image: string;
  category: string;
  readTime: string;
  excerpt: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconType: 'projects' | 'satisfaction' | 'team' | 'quality';
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget: string;
  timeline: string;
  location: string;
  description: string;
}

export interface PremiumServiceItem {
  number: string;
  title: string;
  description: string;
  extendedDetails?: string[];
  deliverables?: string[];
}
