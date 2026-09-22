import { NewBuildHome } from '../types';

export const FEATURED_PROPERTIES: NewBuildHome[] = [
  {
    id: 'sugar-land-sovereign',
    title: 'The Sovereign at Riverstone',
    community: 'Riverstone Enclave',
    city: 'Sugar Land, TX 77479',
    price: 506990,
    formattedPrice: '$506,990',
    beds: 4,
    baths: 3.5,
    sqft: 2829,
    status: 'Ready for Quick Move-In',
    badge: '🔥 $10,000 Closing Credit Special',
    heroBadge: 'Flex Room Downstairs + Huge Game Room Upstairs',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85', // Luxury modern Texas exterior
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80', // Chef kitchen with quartz island
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', // Living room soaring ceiling
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80', // Master bath freestanding tub
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80', // Game room / upstairs retreat
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80', // Covered Texas patio & yard
    ],
    description: 'The premier Sugar Land modern floorplan featuring a private flex room on the first floor perfect for a home office or guest retreat, paired with a massive second-story entertainment game room. Includes $10,000 in dedicated builder closing cost assistance through MI Realty Group.',
    builder: 'Highland Signature Collection',
    highlights: [
      'Downstairs Flex Room / Executive Study',
      'Huge 2nd Floor Game Room & Pre-Wired Media Room',
      '2-Story Vaulted Great Room with Designer Linear Fireplace',
      'Gourmet Island Kitchen with 42" Soft-Close Shaker Cabinets',
      'Full Texas Covered Patio with Gas Grill Hookup',
      'Top-Tier Fort Bend ISD Schools (Clements & Austin High zones)'
    ],
    features: [
      'Tankless Water Heater',
      'Smart Home Automation Package',
      '16-SEER Energy Star HVAC',
      'EV Charger Pre-Wire in 2.5-Car Garage',
      'Full Sprinkler System & Sod Included'
    ],
    completionTime: 'Move-In Ready / 30-Day Close',
    estimatedPayment: '$3,180/mo (with $10k builder rate buy-down)'
  },
  {
    id: 'aliane-grandview',
    title: 'The Grandview Modern',
    community: 'Aliana Reserve Corridor',
    city: 'Sugar Land / Richmond Border, TX 77407',
    price: 629000,
    formattedPrice: '$629,000',
    beds: 5,
    baths: 4.5,
    sqft: 3450,
    status: 'Under Construction (Est. 45 Days)',
    badge: '3-Car Tandem Garage + Chef Kitchen',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85', // Luxury modern exterior
      'https://images.unsplash.com/photo-1600573472583-04e4604d5ff6?auto=format&fit=crop&w=1200&q=80', // Grand entry staircase
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80', // Custom luxury kitchen
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', // Resort pool & evening patio
    ],
    description: 'Commanding curb appeal with modern white brick and dark architectural bronze accents. Features dual bedrooms downstairs, a soaring 21-foot ceiling rotunda foyer, and a sprawling walk-in scullery pantry.',
    builder: 'Toll Brothers Master Collection',
    highlights: [
      'Two Bedrooms Downstairs with Ensuite Baths',
      'Butler Pantry & Walk-In Kitchen Scullery',
      'Extended Covered Outdoor Living with Outdoor Fireplace',
      'Cathedral Primary Suite with Frameless Glass Walk-In Shower',
      '3-Car Tandem Garage with Workshop Bay'
    ],
    features: [
      'Double Iron Front Doors',
      'Engineered Hardwoods throughout Main Level',
      'Spray Foam Insulation Envelope',
      'Surround Sound Multi-Zone Wiring'
    ],
    completionTime: 'Delivery in 45 Days',
    estimatedPayment: '$3,890/mo'
  },
  {
    id: 'telfair-avalon',
    title: 'The Avalon Estate',
    community: 'Telfair Luxury Enclave',
    city: 'Sugar Land, TX 77479',
    price: 749500,
    formattedPrice: '$749,500',
    beds: 5,
    baths: 5.0,
    sqft: 4120,
    status: 'Model Home Showcase Available',
    badge: 'Custom Courtyard & Wine Cellar',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85', // Modern luxury estate
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80', // Dining and wine gallery
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', // Master retreat
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80', // Estate evening lawn
    ],
    description: 'An architectural masterpiece in prestigious Sugar Land. Boasting a private courtyard entrance, temperature-controlled glass wine display, secondary caterer kitchen, and private cinema room upstairs.',
    builder: 'Coventry Premier Custom',
    highlights: [
      'Private Interior Gated Courtyard',
      'Dual Primary Luxury Suites (1st & 2nd Floors)',
      'Custom Glass Wine Display Room in Formal Dining',
      'Acoustically Treated Home Theater & Wet Bar',
      'Oversized Pool-Ready 85-Foot Homesite'
    ],
    features: [
      'Sub-Zero & Wolf Commercial Appliance Package',
      'Custom Automated Motorized Window Shades',
      'Circulating Instant Hot Water System',
      'Full Security Camera & Intercom System'
    ],
    completionTime: 'Immediate Occupancy',
    estimatedPayment: '$4,650/mo'
  }
];

export const SUGAR_LAND_COMMUNITIES = [
  { name: 'Riverstone', homesCount: '14 New Builds', priceFrom: '$490K+' },
  { name: 'Aliana & Harvest Green', homesCount: '19 New Builds', priceFrom: '$460K+' },
  { name: 'Telfair / Sweetwater', homesCount: '8 Custom Builds', priceFrom: '$680K+' },
  { name: 'Imperial Sugar Land', homesCount: '11 Urban Estates', priceFrom: '$520K+' },
  { name: 'Sienna / Missouri City', homesCount: '22 Waterfronts', priceFrom: '$430K+' }
];
