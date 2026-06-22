export interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
}
