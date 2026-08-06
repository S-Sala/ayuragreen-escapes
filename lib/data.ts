import { GolfCourse, PackageItem, Destination, Testimonial, StrengthItem, Director } from './types';

export const COMPANY_FACTS = {
  name: "AyuraGreen Escapes (Pvt) Ltd",
  tagline: "Luxury • Wellness • Golf • Corporate • Authentic Sri Lanka",
  golfTagline: "Golf. Relax. Explore Sri Lanka.",
  golfCampaign: "Tee Off in Paradise",
  golfSwingLine: "Your perfect swing in Sri Lanka",
  weddingTagline: "Where love meets paradise",
  weddingCampaign: "Say 'I do' in an island of endless romance",
  positioning: "Crafting unforgettable journeys through the heart of Sri Lanka with personalized experiences, luxury hospitality, wellness, golf, and corporate travel solutions.",
  phone: "+94 77 215 8888",
  whatsapp: "+94772158888",
  email: "info@ayuragreenescapes.com",
  website: "https://coruscating-wisp-db5332.netlify.app/",
  location: "Sri Lanka",
  vision: "To become Sri Lanka's most trusted luxury destination management company, recognized globally for creating exceptional travel experiences that inspire, rejuvenate, and connect people with authentic Sri Lanka.",
  mission: "To provide innovative, personalized, and sustainable travel solutions through exceptional service, strategic partnerships, and local expertise while exceeding client expectations.",
};

export const CORE_VALUES = [
  { title: "Excellence in Service", description: "Delivering world-class hospitality and seamless travel execution." },
  { title: "Integrity & Professionalism", description: "Upholding transparency and trust in every partnership." },
  { title: "Sustainability", description: "Protecting Sri Lanka's pristine nature and vibrant local cultures." },
  { title: "Innovation", description: "Crafting bespoke travel concepts tailored to modern luxury standards." },
  { title: "Customer-Centric Approach", description: "Placing guest comfort and satisfaction at the core of all services." },
  { title: "Authentic Hospitality", description: "Sharing genuine Sri Lankan warmth and cultural richness." }
];

export const STRENGTHS: StrengthItem[] = [
  { id: "1", num: "01", title: "Customized Tour Planning", description: "Bespoke itineraries crafted to match individual guest desires, travel styles, and preferences." },
  { id: "2", num: "02", title: "Luxury & Standard Travel Options", description: "Flexible luxury villas, boutique hotels, and standard accommodation networks across Sri Lanka." },
  { id: "3", num: "03", title: "Experienced Licensed Tour Guides", description: "Multilingual expert guides sharing rich historical insight and local culture." },
  { id: "4", num: "04", title: "Comfortable Modern Transport", description: "Chauffeured luxury sedans, SUVs, and executive coaches maintained to high safety standards." },
  { id: "5", num: "05", title: "Golf & Wellness Specialists", description: "Dedicated desks for championship golf reservations and certified Ayurveda retreats." },
  { id: "6", num: "06", title: "Corporate Event Management", description: "End-to-end MICE solutions, executive retreats, team building, and leadership workshops." },
  { id: "7", num: "07", title: "Sustainable Tourism Practices", description: "Eco-friendly touring, community support, and wildlife conservation commitments." },
  { id: "8", num: "08", title: "Trusted Hotel & Resort Network", description: "Strategic partnerships with premier 5-star resorts, private villas, and wellness centers." },
  { id: "9", num: "09", title: "Airport Meet & Greet Services", description: "VIP fast-track arrival, luggage assistance, and seamless private transfers." },
  { id: "10", num: "10", title: "24/7 Customer Support", description: "Round-the-clock dedicated guest assistance throughout your journey." },
  { id: "11", num: "11", title: "Professional Multilingual Assistance", description: "Concierge and trip design available in multiple international languages." },
  { id: "12", num: "12", title: "Competitive Pricing", description: "Uncompromising 5-star quality with optimal direct DMC value." }
];

export const GOLF_COURSES: GolfCourse[] = [
  {
    slug: "victoria-golf-resort",
    name: "Victoria Golf Resort",
    location: "Kandy",
    description: "Established in 1893, Victoria Golf Resort is one of Asia's oldest and most scenic golf courses, set amidst the misty hills of Kandy. A must-play for every golf enthusiast featuring breathtaking views of the Knuckles Range and Victoria Reservoir.",
    specs: ["18 Holes", "Par 70", "5,682 Yards", "Historic Course (Over 130 Years)", "Knuckles Mountain Views", "Modern Clubhouse & Pro Shop"],
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "nuwara-eliya-golf-club",
    name: "Nuwara Eliya Golf Club",
    location: "Nuwara Eliya",
    description: "Established in 1889, one of the oldest and most scenic golf courses in Asia. Nestled at 1,830 meters (6,000 feet) above sea level in Sri Lanka's tea country, it features an 18-hole, par-71 layout covering 100 acres.",
    specs: ["18 Holes", "Par 71", "Length 6,000 Yards", "Elevation 1,830m (6,000ft)", "100 Acres", "Tea Country Climate"],
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "royal-colombo-golf-club",
    name: "Royal Colombo Golf Club",
    location: "Colombo",
    description: "The historic sanctuary in the heart of Sri Lanka's capital city, featuring lush fairways, heritage colonial charm, and world-class golfing facilities.",
    specs: ["Length 6,560 yards (Black tees)", "Par 71 (Men), 72 (Ladies)", "Greens: Tifeagle Grass", "Fairways: Cow/Crab Grass", "Slope: 136"],
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "eagles-golf-links",
    name: "Eagle's Golf Links",
    location: "Trincomalee",
    description: "A stunning 18-hole links-style course along Sri Lanka's eastern coastline, designed to challenge and inspire golfers of all levels with its natural beauty and strategic layout.",
    specs: ["18 Holes, Links-Style", "Length 6,802 yards (5,737m)", "Par 72", "Greens: Tifeagle Grass", "Fairways: Seashore Paspalum"],
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "shangri-la-hambantota",
    name: "Shangri-La Hambantota Golf Resort & Spa",
    location: "Hambantota",
    description: "Sri Lanka's premier resort golf course designed by Rodney Wright, weaving through coconut palm plantations, sand dunes, and ocean views.",
    specs: ["Par 70", "6,107 yards (Championship)", "5,570 yards (Men's)", "4,045 yards (Women's)", "Greens: Tifeagle Bermuda", "Fairways: Seashore Paspalum"],
    image: "https://images.unsplash.com/photo-1593111774601-dfbce320652d?auto=format&fit=crop&w=1200&q=80"
  }
];

export const DESTINATIONS: Destination[] = [
  {
    slug: "sigiriya",
    name: "Sigiriya Rock Fortress",
    tagline: "The 8th Wonder of the Ancient World",
    description: "Ascend the iconic 5th-century lion rock fortress surrounded by royal water gardens and ancient frescoes.",
    image: "/images/destinations/sigiriya.jpg"
  },
  {
    slug: "ella",
    name: "Ella & Nine Arch Bridge",
    tagline: "Mountain Paradise & Misty Peaks",
    description: "Marvel at the world-famous Nine Arch Railway Bridge in Ella and hike through serene tea plantations and waterfalls.",
    image: "/images/destinations/ella.jpg"
  },
  {
    slug: "kandy",
    name: "Temple of the Tooth (Kandy)",
    tagline: "Cultural Heartland of Sri Lanka",
    description: "Visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa) nestled by the tranquil Kandy Lake in the central highlands.",
    image: "/images/destinations/kandy.jpg"
  },
  {
    slug: "galle-fort",
    name: "Galle Fort",
    tagline: "Colonial Charm & Coastal Sophistication",
    description: "Stroll along 17th-century Dutch ramparts, iconic lighthouse, chic boutiques, and cobblestone seaside alleys.",
    image: "/images/destinations/galle.jpg"
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    tagline: "Little England in Tea Country",
    description: "Experience cool highland breezes, manicured golf links, and historic British colonial tea estates.",
    image: "/images/destinations/nuwara-eliya.jpg"
  },
  {
    slug: "bentota",
    name: "Bentota",
    tagline: "Golden Sands & Luxury River Safari",
    description: "Unwind on golden beaches, private mangrove lagoons, and world-class luxury water sports resorts.",
    image: "/images/destinations/bentota.jpg"
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    tagline: "Whale Watching & Sunset Escapes",
    description: "Cruise blue waters for majestic blue whale sightings and coconut tree hill ocean views.",
    image: "/images/destinations/mirissa.jpg"
  },
  {
    slug: "yala",
    name: "Yala National Park",
    tagline: "Wild Leopard Safaris",
    description: "Embark on exciting wildlife safaris home to the world's highest density of wild leopards.",
    image: "/images/destinations/yala.jpg"
  }
];

export const PACKAGES: PackageItem[] = [
  {
    slug: "family-holiday",
    name: "Exclusive Family Tour Package",
    duration: "10 Days / 9 Nights",
    tagline: "Child-friendly, safe, and engaging island adventures for all ages.",
    badgeTop: "★ MOST POPULAR",
    badgeTopType: "gold",
    price: "$1,250",
    featured: true,
    inclusions: [
      "Colombo City Tour & Gangaramaya Temple",
      "Pinnawala Elephant Orphanage & Sigiriya Rock Fortress",
      "Kandy Temple of the Tooth & Cultural Dance Show",
      "Scenic Ella Train Journey & Nine Arch Bridge",
      "Yala National Park Wildlife Safari",
      "Mirissa Beach Relaxation & Whale Watching"
    ],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "luxury-escape",
    name: "Luxury Escapes Tour Package",
    duration: "12 Days / 11 Nights",
    tagline: "Uncompromising luxury, elegance, and privacy with unique experiences.",
    badgeTop: "★ MOST POPULAR",
    badgeTopType: "gold",
    price: "$2,450",
    featured: true,
    inclusions: [
      "5-Star Resort Stays (Ceylon Tea Trails, Cape Weligama, Anantaya)",
      "Helicopter Transfer Options & Private Guided Excursions",
      "Private Butler Services & Gourmet Dining Experiences",
      "Exclusive Wildlife Safari with Expert Naturalist",
      "Private Golf Round at Victoria Golf Resort Kandy"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "wellness-retreat",
    name: "Sri Lanka Wellness Retreat Package",
    duration: "7 Days / 6 Nights",
    tagline: "Curated Ayurveda detox consultations, daily yoga, and organic meals.",
    price: "$1,180",
    featured: false,
    inclusions: [
      "Ayurveda Doctor Consultations & Daily Panchakarma Treatments",
      "Daily Morning & Evening Yoga & Mindfulness Meditation",
      "Herbal Bath, Steam, and Organic Detox Diet Plan",
      "Nature Walk & Botanical Forest Therapy",
      "Eco-Wellness Resort Accommodation"
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "golf-holiday",
    name: "Championship Golf Package",
    duration: "5 Days / 4 Nights",
    tagline: "Experience the finest golf courses in Kandy, Nuwara Eliya, and Colombo.",
    badgeTop: "NEW",
    badgeTopType: "forest",
    price: "$980",
    featured: true,
    inclusions: [
      "Rounds of Golf at Victoria, Nuwara Eliya & Royal Colombo",
      "Luxury Club House Transfers & Caddie Services",
      "5-Star Hotel Accommodation & Fine Dining",
      "Private Buggies & Caddie Services Included"
    ],
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "corporate-retreat",
    name: "Corporate Travel & MICE Retreat Package",
    duration: "5 Days / 4 Nights",
    tagline: "Executive MICE conferences, leadership workshops, and team building",
    featured: false,
    inclusions: [
      "5-Star Conference Venue & AV Technology Setup",
      "Experiential Outdoor Team Building & Leadership Workshops",
      "Gala Dinner & Cultural Entertainment Show",
      "Corporate Golf Tournament at Victoria Golf Resort",
      "VIP Airport Transfers & Luxury Coach Logistics",
      "Dedicated Event Manager Desk"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "beach-escape",
    name: "Tropical Beach & Lagoon Escape",
    duration: "6 Days / 5 Nights",
    tagline: "Golden sands, sunset ocean cruises, whale watching, and beach relaxation",
    featured: false,
    inclusions: [
      "Oceanfront Resort Stays in Bentota & Mirissa",
      "Private Bentota River Safari & Water Sports",
      "Sunset Catamaran Cruise & Beach Firepit Dinner",
      "Mirissa Whale Watching Boat Excursion",
      "Galle Dutch Fort Heritage Walking Tour",
      "Luxury Chauffeured Airport Transfers"
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "tailor-made-tours",
    name: "Tailor-Made Sri Lanka Tour",
    duration: "Flexible (5 to 21 Days)",
    tagline: "Fully customized itinerary built around your exact schedule and interests",
    featured: false,
    inclusions: [
      "Personalized 1-on-1 Consultation with Travel Designer",
      "Choice of Accommodation (Boutique, Villa, 5-Star)",
      "Flexible Daily Schedule & Custom Activity Selection",
      "Dedicated Chauffeur Guide & Private Vehicle",
      "Special Requests (Dietary, Accessibility, Private Charters)",
      "24/7 Guest Assistance Desk"
    ],
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "David & Sarah Jenkins",
    location: "United Kingdom",
    role: "Golf & Wellness Guests",
    quote: "Our 10-day tour with AyuraGreen Escapes was pure perfection. Playing Victoria Golf Resort in the morning and relaxing with authentic Ayurveda treatments in the evening was a dream come true. Flawless DMC service!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    location: "Singapore",
    role: "Executive Corporate Retreat",
    quote: "We hosted our Asia-Pacific leadership summit with AyuraGreen Escapes. The MICE logistics, luxury transport, and corporate golf tournament execution were world-class. Highly recommended for corporate travel.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "3",
    name: "Elena & Marco Rossi",
    location: "Italy",
    role: "Honeymoon & Destination Wedding",
    quote: "Saying 'I do' on Bentota beach under a golden sunset arranged by AyuraGreen Escapes was magical. Every detail from floral arches to guest transportation was handled with genuine Sri Lankan warmth.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
  }
];

export const DIRECTORS: Director[] = [
  {
    name: "Rishan Sala",
    role: "Managing Director & CEO",
    bio: "Rishan Sala leads AyuraGreen Escapes with a vision to redefine Sri Lankan luxury tourism. With extensive expertise in Destination Management (DMC), golf travel, and corporate events, he ensures every journey offers world-class hospitality, authenticity, and seamless execution.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    expertise: ["Luxury Destination Management", "Golf Tourism", "Corporate MICE Events", "Strategic Partnerships"]
  },
  {
    name: "Dr. Sharmini Perera",
    role: "Executive Director — Healthcare & Wellness",
    bio: "Dr. Sharmini Perera oversees AyuraGreen Escapes' wellness and medical tourism portfolio. With decades of medical and holistic wellness leadership, she ensures all Ayurveda retreats, detox programs, and spa stays adhere to authentic medical and doctor-certified standards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    expertise: ["Ayurveda & Medical Tourism", "Holistic Wellness Retreats", "Doctor-Led Health Programs", "Guest Care"]
  }
];

export const SUSTAINABILITY_COMMITMENTS = [
  "Plastic-Free Guided Tours & Eco-Friendly Refillable Bottles",
  "Support for Local Heritage Craft Communities & Artisans",
  "Carbon-Offsetting Partnerships for Chauffeur Fleet Operations",
  "Ethical Wildlife Safaris Adhering to Strict National Park Codes"
];
