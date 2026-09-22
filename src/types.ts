export interface NewBuildHome {
  id: string;
  title: string;
  community: string;
  city: string;
  price: number;
  formattedPrice: string;
  beds: number;
  baths: number;
  sqft: number;
  status: string;
  badge?: string;
  heroBadge?: string;
  images: string[];
  description: string;
  builder: string;
  highlights: string[];
  features: string[];
  completionTime: string;
  estimatedPayment: string;
}

export interface TikTokTour {
  id: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  duration: string;
  thumbnail: string;
  videoPreviewUrl?: string;
  sound: string;
  date: string;
  tags: string[];
}

export interface LeadFormData {
  name: string;
  phone: string;
  budget: string;
  timeline?: string;
  desiredBeds?: string;
  notes?: string;
}

export interface TourBookingData {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  propertyId: string;
  preApproved?: string;
}
