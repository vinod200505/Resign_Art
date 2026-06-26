import { Product, GalleryItem, Testimonial } from './types';

// Absolute imports of our high-quality generated assets
import brandLogo from './assets/images/brand_logo_emblem_1781203437294.jpg';
import productLineup from './assets/images/product_lineup_1781203453257.jpg';
import dispenserFlatlay from './assets/images/dispenser_flatlay_1781203465865.jpg';
import bathroomShowcase from './assets/images/bathroom_showcase_1781203478747.jpg';
import blackDispenserSolo from './assets/images/black_dispenser_solo_1781203490931.jpg';

export const ASSET_IMAGES = {
  logo: brandLogo,
  lineup: productLineup,
  flatlay: dispenserFlatlay,
  bathroom: bathroomShowcase,
  solo: blackDispenserSolo,
};

export const LUXURY_PRODUCTS: Product[] = [
  {
    id: 'obsidian-veda',
    name: 'Obsidian Veda',
    luxuryTag: 'Masterpiece Volcanic',
    tagline: 'Raw-textured obsidian basalt bound in absolute black high-gloss resin',
    description: 'A striking statement of minimalist design. Crafted using raw volcanic basalt particles embedded with gold pyrite flecks, hand-carved and encased in our marine-grade glossy copolymer resin. Outfitted with an industrial-grade brass pump in deep brushed gold.',
    type: 'Basalt Sphere-Cylinder',
    image: ASSET_IMAGES.solo,
    colorHex: '#121212',
    accentHex: '#D4AF37',
    materials: ['Natural Ground Basalt', 'Anti-Yellowing Crystalline Resin', 'Solid Precision Brass'],
    dimensions: '16.5cm Height × 7.2cm Diameter',
    capacity: '250ml',
    features: ['High-friction tactile grip', 'Fully waterproof and rust-proof seal', 'Heavy structural core for high stability', 'Cured for 72 hours for absolute durability'],
  },
  {
    id: 'alabaster-pebble',
    name: 'Alabaster Pebble',
    luxuryTag: 'Optic Purity',
    tagline: 'Hand-arranged Carrara quartz quartzites captured in glass-like optical clarity',
    description: 'Inspired by pristine Alpine glacial streams. Individually hand-selected Alabaster and Carrara silica pebbles are arranged with aesthetic focus, then fused using crystal-clear glass resin that refracts natural light beautifully. Outfitted with a premium copper-based rose gold pump.',
    type: 'Opulent Round Column',
    image: ASSET_IMAGES.flatlay,
    colorHex: '#EAEAEA',
    accentHex: '#B76E79',
    materials: ['Pristine Quartz Pebbles', 'Optically Clear Glass Resin', 'Polished Copper Pump'],
    dimensions: '16.8cm Height × 7.4cm Diameter',
    capacity: '250ml',
    features: ['Individually composed stone layout', 'Refractive crystalline resin housing', 'Perfect resistance against highly humid bath air', 'Lead-free heavy brass core pump internals'],
  },
  {
    id: 'rose-gold-aurelia',
    name: 'Rose Gold Aurelia',
    luxuryTag: 'Heritage Collection',
    tagline: 'Sleek cylindrical monolith showcasing natural layered stone stratification',
    description: 'An exploration of geothermal beauty. Features layers of raw sedimentary cream rocks juxtaposed against a striking black volcanic cap, simulating deep-earth fault lines, highlighted by beautiful warm rose gold plating. Ideal for upscale contemporary washrooms.',
    type: 'Bespoke Layered Monolith',
    image: ASSET_IMAGES.lineup,
    colorHex: '#DDD6C8',
    accentHex: '#B76E79',
    materials: ['Pebble Calcite Shards', 'Basalt Aggregate Cap', 'Lustrous Rose Gold Base'],
    dimensions: '17.2cm Height × 7.5cm Diameter',
    capacity: '300ml',
    features: ['Dual-tone stone fusion design', 'Scratch-resistant protective outer gloss', 'Spec-weighted bottom base', 'Non-marking premium rubber protective pads'],
  },
  {
    id: 'carrara-geo-square',
    name: 'Carrara Geo-Square',
    luxuryTag: 'Architectural Select',
    tagline: 'Bespoke square-blocked hand-arranged marble travertine cubic accessory',
    description: 'A favorite of contemporary luxury architects. Each travertine marble chip is individually squared, calibrated, and embedded into a modern cubic geo-block. Unites pure geometry with coarse natural pebble calcites for an elite structural accent.',
    type: 'Geo-Block Rectangular',
    image: ASSET_IMAGES.lineup,
    colorHex: '#ECE7DB',
    accentHex: '#D4AF37',
    materials: ['Select Italian Travertine', 'Reinforced Acrylic Gloss Resin', 'Brushed Gold Hardware'],
    dimensions: '15.2cm Height × 7.8cm Width',
    capacity: '280ml',
    features: ['Bold geometric square profile', 'Anti-fungal and moisture-block casing', 'Whisper-quiet pneumatic pump action', 'Easy-clean high luxury finish'],
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: ASSET_IMAGES.bathroom,
    title: 'The Ritz Presidential Suite',
    category: 'Hotel Project',
    location: 'Singapore'
  },
  {
    id: 'gal-2',
    image: ASSET_IMAGES.flatlay,
    title: 'Amara Hillside Sanctuary',
    category: 'Private Residence',
    location: 'Los Angeles'
  },
  {
    id: 'gal-3',
    image: ASSET_IMAGES.lineup,
    title: 'Alba Serene Hydro-Spa',
    category: 'Wellness Center',
    location: 'Zurich'
  },
  {
    id: 'gal-4',
    image: ASSET_IMAGES.solo,
    title: 'Maison de Verre Design Salon',
    category: 'Showroom Interior',
    location: 'Paris'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'RESIN ART dispensers transformed our master baths from generic high-end spaces into rich, bespoke sanctuaries. The natural stone texture paired with gold-infused resin is an absolute artistic masterstroke.',
    author: 'Alessandra Moretti',
    role: 'Principal Interior Architect, Moretti & Co.',
    rating: 5,
    location: 'Milano'
  },
  {
    id: 'test-2',
    quote: 'Our guests in the Presidential Duplexes immediately notice these dispensers. They are heavy, beautifully texturized, and feel like a piece of bespoke sculptural art on the vanity rather than a standard bathroom accessory.',
    author: 'Jean-Luc Dubois',
    role: 'General Manager, L‘Horizon Palace Hotel',
    rating: 5,
    location: 'Côte d’Azur'
  },
  {
    id: 'test-3',
    quote: 'The customization process is stellar. I requested a specific palette of warm amber and slate basalt to match our ocean villa stones. The team hand-crafted a set that blends absolutely flawlessly with the brass fittings.',
    author: 'Marcus Vance',
    role: 'Luxury Home Owner & Art Collector',
    rating: 5,
    location: 'Malibu'
  }
];

export const RESIN_FEATURES = [
  {
    title: 'Handcrafted Excellence',
    desc: 'Each masterwork undergoes a meticulous 72-hour artistic mold, hand-pour, and diamond polishing sequence.'
  },
  {
    title: 'Premium Materials',
    desc: 'We combine authentic volcanic basalt, Alabaster quartzites, and gold foil with yellow-resistant crystalline esters.'
  },
  {
    title: 'Elegant Aesthetics',
    desc: 'A structural union of rough textures and polished surfaces, designed to serve as the crown jewel of your vanity.'
  },
  {
    title: 'Unique Designs',
    desc: 'Since natural stone pebbles are unique, no two art accessories are ever identical. Your collection is completely singular.'
  }
];
