/**
 * Types representing entities for the RESIN ART luxury showcase.
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: string;
  image: string;
  colorHex: string;
  accentHex: string;
  materials: string[];
  dimensions: string;
  capacity: string;
  features: string[];
  luxuryTag: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  location: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  location: string;
}

export interface CustomInquiry {
  selectedProduct: string;
  selectedStone: string;
  pumpFinish: string;
  capacityValue: string;
  orderType: string;
  fullName: string;
  contactNumber: string;
  notes: string;
}
