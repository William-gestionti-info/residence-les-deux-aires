export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  src: string;
  category: string;
  alt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  visitType?: string;
}
