export interface GolfCourse {
  slug: string;
  name: string;
  location: string;
  description?: string;
  specs: string[];
  image: string;
}

export interface PackageItem {
  slug: string;
  name: string;
  tagline: string;
  inclusions: string[];
  duration: string;
  image: string;
  featured?: boolean;
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface StrengthItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface Director {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
}
