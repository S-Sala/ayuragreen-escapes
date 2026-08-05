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
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "ella",
    name: "Ella & Nine Arch Bridge",
    tagline: "Mountain Paradise & Misty Peaks",
    description: "Marvel at the world-famous Nine Arch Railway Bridge in Ella and hike through serene tea plantations and waterfalls.",
    image: "https://images.unsplash.com/photo-1566296537600-247ba48b9212?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "kandy",
    name: "Temple of the Tooth (Kandy)",
    tagline: "Cultural Heartland of Sri Lanka",
    description: "Visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa) nestled by the tranquil Kandy Lake in the central highlands.",
    image: "https://images.unsplash.com/photo-1625736338592-f70d62db94ea?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "galle-fort",
    name: "Galle Fort",
    tagline: "Colonial Charm & Coastal Sophistication",
    description: "Stroll along 17th-century Dutch ramparts, iconic lighthouse, chic boutiques, and cobblestone seaside alleys.",
    image: "https://images.unsplash.com/photo-1627885721868-80979bf33fb7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    tagline: "Little England in Tea Country",
    description: "Experience cool highland breezes, manicured golf links, and historic British colonial tea estates.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "bentota",
    name: "Bentota",
    tagline: "Golden Sands & Luxury River Safari",
    description: "Unwind on golden beaches, private mangrove lagoons, and world-class luxury water sports resorts.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "mirissa",
    name: "Mirissa",
    tagline: "Whale Watching & Sunset Escapes",
    description: "Cruise blue waters for majestic blue whale sightings and coconut tree hill ocean views.",
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "yala",
    name: "Yala National Park",
    tagline: "Wild Leopard Safaris",
    description: "Embark on exciting wildlife safaris home to the world's highest density of wild leopards.",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "trincomalee",
    name: "Trincomalee",
    tagline: "Pristine Eastern Beaches & Links Golf",
    description: "Explore natural deep-water harbors, Koneswaram Temple cliffs, and coastal golf greens.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PACKAGES: PackageItem[] = [
  {
    slug: "family-holiday",
    name: "Family Holiday",
    tagline: "Fun-filled adventures for families.",
    duration: "7 - 10 Days",
    inclusions: [
      "Family-friendly luxury accommodation",
      "Child-safe wildlife safaris in Yala",
      "Cultural & village interactive experiences",
      "Dedicated family travel designer",
      "Private air-conditioned transportation"
    ],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "luxury-escape",
    name: "Luxury Escape",
    tagline: "Premium accommodation and personalized experiences.",
    duration: "8 - 12 Days",
    featured: true,
    inclusions: [
      "Private luxury villa & personal butler service",
      "Chauffeured luxury vehicle touring",
      "Fine-dining & sunset cruise reservations",
      "Helicopter transfer option",
      "VIP airport meet & greet fast track"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "wellness-retreat",
    name: "Wellness Retreat",
    tagline: "Ayurveda, yoga, meditation, and relaxation.",
    duration: "7 - 14 Days",
    inclusions: [
      "Doctor-led Ayurveda health consultation",
      "Daily guided yoga & meditation sessions",
      "Organic customized wellness cuisine",
      "Herbal baths & traditional stress management",
      "Tranquil jungle & ocean resort stay"
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "golf-holiday",
    name: "Golf Holiday",
    tagline: "Luxury golf holidays with championship courses.",
    duration: "7 - 10 Days",
    featured: true,
    inclusions: [
      "Guaranteed tee times at Victoria, Nuwara Eliya & Royal Colombo",
      "Private caddie & golf cart arrangements",
      "5-star golf resort accommodations",
      "Golf equipment handling & transportation",
      "Post-round spa & wellness relaxation"
    ],
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "corporate-retreat",
    name: "Corporate Retreat",
    tagline: "Executive meetings, incentives, and networking.",
    duration: "3 - 5 Days",
    inclusions: [
      "5-star conference venues & technical setup",
      "Executive team building & leadership workshops",
      "Corporate golf networking day",
      "Dedicated event manager & VIP transfers",
      "Gala award dinner arrangements"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "beach-escape",
    name: "Beach Escape",
    tagline: "Relax on Sri Lanka's pristine tropical beaches.",
    duration: "5 - 8 Days",
    inclusions: [
      "Oceanfront luxury suite accommodations",
      "Private whale watching catamaran cruise",
      "Romantic beachfront candlelit dinner",
      "Surfing & water sports assistance",
      "Coastal spa treatments"
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "tailor-made-tours",
    name: "Tailor-Made Tours",
    tagline: "Customized itineraries designed according to your interests, travel style, and budget.",
    duration: "Flexible Pacing",
    inclusions: [
      "Personalized itinerary with 1-on-1 travel consultant",
      "Combination of Golf, Wellness, Culture & Safaris",
      "Choice of luxury villas, boutique, or heritage hotels",
      "Flexible schedule and dedicated chauffeur guide",
      "24/7 concierge assistance"
    ],
    image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Richard & Clara Vance",
    location: "London, United Kingdom",
    role: "Golf & Luxury Travelers",
    quote: "AyuraGreen Escapes arranged an immaculate 10-day golf tour across Victoria Kandy and Nuwara Eliya. The tee-time coordination, chauffeured transfers, and hotel selections were flawless. Playing golf in Sri Lanka's tea hills was an unforgettable experience!",
    avatar: "RV",
    rating: 5
  },
  {
    id: "2",
    name: "Elena & David Sterling",
    location: "Sydney, Australia",
    role: "Destination Wedding Couple",
    quote: "We chose Bentota for our oceanfront wedding. The AyuraGreen team transformed our dream into reality — every floral arch, sunset dining table, and guest transfer was handled with extraordinary care and true Sri Lankan warmth.",
    avatar: "ES",
    rating: 5
  },
  {
    id: "3",
    name: "Markus Vance",
    location: "Frankfurt, Germany",
    role: "Corporate Executive Retreat",
    quote: "Our executive retreat combined strategic leadership meetings with afternoon golf at Royal Colombo and wellness therapy. AyuraGreen's attention to corporate detail and VIP concierge service set a new benchmark for DMC excellence.",
    avatar: "MV",
    rating: 5
  }
];

export const DIRECTORS: Director[] = [
  {
    name: "Mr. Gayan Karunaratne",
    role: "Director",
    bio: "Seasoned business leader with extensive expertise in strategic business development, corporate partnerships, international trade, project management, and CRM. Focuses on innovative tourism solutions combining luxury travel, wellness, golf tourism, and destination management, building long-term strategic partnerships across hotel networks, resorts, and corporate clients.",
    expertise: [
      "Business Development",
      "Corporate Strategy",
      "Destination Management",
      "International Partnerships",
      "Tourism Marketing",
      "Golf Tourism",
      "Project Management",
      "Corporate Event Planning"
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Dr. Sharmini Perera",
    role: "Director",
    bio: "Accomplished leader with deep expertise in healthcare, wellness, preventive medicine, and holistic wellbeing. Develops authentic wellness journeys integrating traditional Ayurveda, mindfulness, healthy living, nature therapy, and luxury hospitality in collaboration with top wellness resorts and medical professionals.",
    expertise: [
      "Wellness Tourism",
      "Preventive Healthcare",
      "Ayurveda & Holistic Wellness",
      "Health Education",
      "Sustainable Wellness Programs",
      "Customer Experience",
      "Medical & Wellness Partnerships"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  }
];

export const SUSTAINABILITY_COMMITMENTS = [
  "Supporting Local Communities & Artisans",
  "Responsible & Ethical Wildlife Tourism",
  "Eco-friendly & Single-Use Plastic Reduction",
  "Preservation of Cultural Heritage Sites",
  "Sustainable Hospitality Partnerships",
  "Ethical Business Practices",
  "Environmental & Forest Conservation",
  "Promoting Local Sri Lankan Businesses"
];
