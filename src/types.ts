export type ServiceCategory = 
  | 'maquillaje' 
  | 'peinados' 
  | 'manicure' 
  | 'faciales' 
  | 'coloracion' 
  | 'caritas-pintadas'
  | 'tematico';

export type BookingModality = 'domicilio' | 'local';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  subtitle: string;
  description: string;
  longDescription: string;
  duration: string;
  priceFrom: string;
  image: string;
  secondaryImage?: string;
  iconName: string;
  badge?: string;
  features: string[];
  includes: string[];
  preparationTips: string[];
}

export interface StyleLook {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  vibe: string;
  image: string;
  colorPalette: string[];
  highlights: string[];
  quote: string;
  photographerCredit?: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  timeTaken: string;
  description: string;
  lookDetails: string[];
}

export interface TrendItem {
  id: string;
  title: string;
  category: string;
  season: string;
  readTime: string;
  excerpt: string;
  fullContent: string[];
  image: string;
  keyProducts: string[];
  proTip: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
  tags: string[];
}

export interface LookbookHotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  category: string;
  technique: string;
  serviceId: string;
  description: string;
  image?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  service: string;
  modality: 'A Domicilio' | 'En Estudio';
  comment: string;
  date: string;
}

export interface BookingFormData {
  modality: BookingModality;
  serviceId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  address: string;
  notes: string;
  stylePreference: string;
}
