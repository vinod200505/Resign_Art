import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  Feather, 
  Sparkles, 
  Droplet, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Mail, 
  ChevronRight, 
  Check, 
  Info, 
  Maximize2, 
  X, 
  MessageSquare,
  ArrowRight,
  Menu,
  Heart
} from 'lucide-react';

import { LUXURY_PRODUCTS, GALLERY_ITEMS, TESTIMONIALS, RESIN_FEATURES, ASSET_IMAGES } from './data';
import { Product, CustomInquiry } from './types';

export default function App() {
  // Preloaders and State
  const [loading, setLoading] = useState(true);
  const [activeNavbarTab, setActiveNavbarTab] = useState('heritage');
  const [selectedProduct, setSelectedProduct] = useState<Product>(LUXURY_PRODUCTS[0]);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  
  // Customizer State
  const [inquiry, setInquiry] = useState<CustomInquiry>({
    selectedProduct: LUXURY_PRODUCTS[0].name,
    selectedStone: 'Dark Volcanic Obsidian',
    pumpFinish: 'Brushed Royal Gold',
    capacityValue: '250ml',
    orderType: 'Bespoke Private Residence',
    fullName: '',
    contactNumber: '',
    notes: 'Please keep the natural aggregate textures highly pronounced near the neck of the dispenser.'
  });

  const [inquirySent, setInquirySent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Parallax and Floating Particle Coords
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 1.8s Elegant Intro preloader simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Format WhatsApp Link
  const generateWhatsAppLink = () => {
    const phone = "919000000000"; // Placeholder luxury brand contact number
    const baseText = `*RESIN ART — Luxury Inquiry*\n\n` +
      `• *Masterpiece Model*: ${inquiry.selectedProduct}\n` +
      `• *Selected Stone finish*: ${inquiry.selectedStone}\n` +
      `• *Hardware Finish*: ${inquiry.pumpFinish}\n` +
      `• *Volume/Capacity*: ${inquiry.capacityValue}\n` +
      `• *Application*: ${inquiry.orderType}\n` +
      `• *Patron Name*: ${inquiry.fullName || 'Connoisseur'}\n` +
      `• *Special Request*: "${inquiry.notes}"\n\n` +
      `_Generated from the RESIN ART Digital Catalog. Please verify availability and production timeline._`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(baseText)}`;
  };

  // Submit Inquiry handler
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.fullName) {
      alert("Please provide your name to personalize your hand-poured masterpiece.");
      return;
    }
    // Launch actual WhatsApp window
    window.open(generateWhatsAppLink(), '_blank');
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 5 * 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 1. CINEMATIC INTRO LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F0F0F]">
          <div className="relative flex flex-col items-center">
            {/* Elegant Glow Aura */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#D4AF37]/10 to-[#B76E79]/5 blur-3xl" />
            
            <div className="mb-6 tracking-[12px] text-xs font-mono uppercase text-[#D4AF37] shimmer-text">
              Artisanal Studio
            </div>
            
            {/* Luxury Lettermark */}
            <h1 className="text-4xl md:text-5xl font-display font-light text-white tracking-[24px] pl-6 transition-all duration-1000 ease-out">
              RESIN ART
            </h1>
            
            <div className="mt-8 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-[9px] font-mono tracking-[4px] uppercase text-[#888]">Crystalline Stone Fusion</span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>
          
          <div className="absolute bottom-12 text-[10px] font-mono tracking-[3px] text-[#444] uppercase">
            © 2026. Handcrafted In Limited Runs.
          </div>
        </div>
      )}

      {/* BACKGROUND NOISE & GRADIENTS */}
      <div className="fixed inset-0 pointer-events-none z-0 noise-overlay opacity-40" />
      <div className="fixed -top-[20%] left-[20%] w-[60%] h-[50%] bg-radial-gold pointer-events-none z-0" />
      <div className="fixed -bottom-[20%] right-[10%] w-[50%] h-[50%] bg-radial-rose pointer-events-none z-0" />

      {/* 2. PREMIUM DESKTOP NAV BAR */}
      <nav className="fixed top-0 inset-x-0 z-40 transition-all duration-300 glass-morphic border-b border-white-glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo & Trademark */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-md overflow-hidden border border-gold-glass">
              <img 
                src={ASSET_IMAGES.logo} 
                alt="Resin Art Crown Logo" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display text-lg tracking-[6px] text-white">RESIN ART</span>
              <span className="hidden sm:inline-block text-[8px] font-mono tracking-[2px] text-[#D4AF37] uppercase ml-2 px-1 rounded border border-[#D4AF37]/20 bg-black/60">Bespoke</span>
            </div>
          </a>

          {/* Nav Items - Apple-style desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[2px] uppercase text-zinc-400 font-medium">
            <a href="#gallery" className="hover:text-white transition-colors duration-200">The Catalog</a>
            <a href="#story" className="hover:text-white transition-colors duration-200">Our Alchemy</a>
            <a href="#showcase" className="hover:text-white transition-colors duration-200">Showcase</a>
            <a href="#customizer" className="hover:text-white transition-colors duration-200 text-[#D4AF37] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Atelier Live Custom
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors duration-200">Critique</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Inquire</a>
          </div>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="#customizer" 
              className="text-xs tracking-[2px] uppercase font-semibold text-black bg-[#D4AF37] hover:bg-[#F2E3C6] px-5 py-2.5 rounded transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Configure Masterpiece
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden flex p-2 text-zinc-300 hover:text-white transition-colors"
            id="mobile-menu-btn"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-morphic border-t border-white-glass px-6 py-6 space-y-4 text-sm tracking-[2px] uppercase text-zinc-300">
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-zinc-800 hover:text-white">The Catalog</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-zinc-800 hover:text-white">Our Alchemy</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-zinc-800 hover:text-white">Showcase</a>
            <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-zinc-800 text-[#D4AF37] font-semibold">Atelier Live Custom</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-white">Send WhatsApp Inquire</a>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION (With Drift-Particles and Parallex Effect) */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-radial-luxury">
        {/* Cinematic Backdrop Image behind absolute gradient dark layer */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src={ASSET_IMAGES.bathroom} 
            alt="Atmospheric bathroom backdrop" 
            className="w-full h-full object-cover filter brightness-[30%] scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Parallax elements */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 transition-transform duration-1000 ease-out"
          style={{ transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` }}
        >
          {/* Drifting amber & blue fluid nodes */}
          <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-[120px] animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[25%] right-[15%] w-96 h-96 rounded-full bg-[#0A4D68]/8 blur-[150px] animate-pulse duration-[12000ms]" />
          <div className="absolute top-[70%] left-[40%] w-3 h-3 rounded-full bg-[#B76E79]/20 blur-md animate-bounce duration-[10s]" />
          <div className="absolute top-[40%] right-[30%] w-2 h-2 rounded-full bg-[#D4AF37]/30 blur-sm animate-ping duration-[6s]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-20 flex flex-col items-center">
          
          {/* Minimal Stamp */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-morphic-light border border-white-glass text-[9px] uppercase tracking-[4021b7ca-f89a-4f18-9d78-1659356b37c3] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            Bespoke Bathroom Sculptures
          </div>

          {/* Outstanding Center Logo */}
          <div className="mb-10 relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] opacity-30 blur-xl animate-pulse" />
            <img 
              src={ASSET_IMAGES.logo} 
              alt="RESIN ART Imperial Icon" 
              className="w-40 sm:w-48 mx-auto rounded-xl shadow-2xl border-2 border-gold-glass transform hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              id="hero-logo-img"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-light tracking-[0.2em] text-white leading-tight uppercase mb-6">
            Crafted To Elevate <br />
            <span className="text-gold-gradient font-semibold">Everyday Living</span>
          </h2>

          <p className="max-w-2xl text-sm sm:text-lg text-zinc-300 font-light tracking-wide leading-relaxed mb-12">
            Handmade Resin Art Pieces Crafted with Natural Stone Aggregates. Transforming basic cleansing routines into a highly curated tactile ceremony.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
            <a 
              href="#gallery" 
              className="w-full sm:w-auto px-10 py-4 rounded bg-transparent hover:bg-white text-white hover:text-black border border-white text-xs uppercase tracking-[3px] font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Collection 
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a 
              href="#customizer" 
              className="w-full sm:w-auto px-10 py-4 rounded bg-[#D4AF37] hover:bg-[#F2E3C6] text-black text-xs uppercase tracking-[3px] font-bold transition-all duration-300 shadow-lg shadow-black/40 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" /> Live Builder
            </a>
          </div>

          {/* Bottom stats indicators (Apple styled) */}
          <div className="grid grid-cols-3 gap-6 pt-24 border-t border-white-glass w-full mt-16 text-left max-w-4xl">
            <div>
              <p className="text-[10px] font-mono text-[#D4AF37] tracking-[2px] uppercase">Craftsmanship</p>
              <p className="text-xl md:text-3xl font-display font-light text-white mt-1">100% Manual</p>
              <p className="text-xs text-zinc-500 mt-1">Never machined, completely individual</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-rose-300 tracking-[2px] uppercase">Composition</p>
              <p className="text-xl md:text-3xl font-display font-light text-white mt-1">Quartz & Basalt</p>
              <p className="text-xs text-zinc-500 mt-1">Fused in yellow-resistant esters</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-teal-300 tracking-[2px] uppercase">Core Protection</p>
              <p className="text-xl md:text-3xl font-display font-light text-white mt-1">Impervious</p>
              <p className="text-xs text-zinc-500 mt-1">100% waterproof and salt-resistant</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BRAND STORY SECTION ("Where Art Meets Function" Split) */}
      <section id="story" className="relative py-28 border-t border-white-glass bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Split Left - Gorgeous Image with overlapping metal labels */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B76E79] opacity-20 blur-lg transition duration-1000 group-hover:opacity-30" />
              <div className="relative rounded-xl overflow-hidden border border-white-glass aspect-[4/3] bg-zinc-900">
                <img 
                  src={ASSET_IMAGES.flatlay} 
                  alt="Raw stone and resin infusion flatlay setup" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="story-flatlay-img"
                />
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-6 -right-6 glass-morphic border border-gold-glass p-5 rounded shadow-2xl max-w-xs hidden sm:block">
                <p className="text-[10px] font-mono text-[#D4AF37] tracking-[2px] uppercase mb-1">Alchemy Process</p>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  "Every grain and pebble is manually laid by sight to balanced negative spaces prior to polymerization."
                </p>
              </div>
            </div>

            {/* Split Right - Text and Narrative block */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase">The Atelier Philosophy</p>
                <h3 className="text-3xl md:text-5xl font-display font-light text-white tracking-wide">
                  Where Natural Art <br />
                  <span className="italic text-rose-light">Meets Humdrum Function</span>
                </h3>
              </div>

              <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base space-y-4">
                Every bathroom is historically cold, dominated by flat ceramic tiles and mirror glass. We set out to introduce organic visual depth. 
                <br /><br />
                By fusing raw, stratified volcanic basalt stones and crystalline quartz riverbed pebbles into flawless optical resin cylinders, we transform the mundane action of cleansing into an absolute tactile ceremony. Your dispenser is heavy, texturized, elegant, and completely impervious to water or soap chemicals.
              </p>

              {/* Check features block */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] mt-0.5" />
                  <span className="text-xs text-zinc-300">Individually Sculpted</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] mt-0.5" />
                  <span className="text-xs text-zinc-300">Optically Refractive Resin</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] mt-0.5" />
                  <span className="text-xs text-zinc-300">Weatherproof Marine Coat</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#D4AF37] mt-0.5" />
                  <span className="text-xs text-zinc-300">Gold Plated Core Hardware</span>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="#customizer" 
                  className="inline-flex items-center gap-3 text-xs tracking-[3px] uppercase text-[#D4AF37] hover:text-white transition-colors group font-semibold"
                >
                  Commission custom colors
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. EXTRA ENHANCEMENT: "THE ART OF EVERYDAY LUXURY" (Cinematic Apple-style Banner) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-t border-b border-white-glass bg-black">
        {/* Full-width Cinematic asset */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSET_IMAGES.bathroom} 
            alt="Cinematic luxury bathroom backdrop" 
            className="w-full h-full object-cover filter brightness-[25%] contrast-110"
            referrerPolicy="no-referrer"
            id="cinematic-banner-img"
          />
          {/* Vignette Gradients */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0F0F0F] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0F0F0F] to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8 flex flex-col items-center">
          <div className="tracking-[8px] text-[10px] sm:text-xs font-mono uppercase text-[#D4AF37] shimmer-text">
            Bespoke Edition
          </div>
          
          <h3 className="text-4xl sm:text-6xl md:text-8xl font-display font-light text-white tracking-[12px] uppercase leading-tight">
            THE ART OF <br />
            <span className="text-gold-gradient font-bold tracking-[8px]">EVERYDAY LUXURY</span>
          </h3>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="max-w-xl text-xs sm:text-base text-zinc-400 font-light leading-relaxed tracking-wider">
            Designed for high-end boutique hotels, wellness centers, and patrons of premium architecture. Clean lines, weighted stability, and stunning stone refractures that respond to the morning sun.
          </p>

          <div className="pt-6">
            <button 
              onClick={() => {
                const configElement = document.getElementById('customizer');
                configElement?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full glass-morphic border border-gold-glass hover:border-white text-zinc-200 hover:text-white transition-all text-[11px] uppercase tracking-[3px] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              id="cinematic-action-btn"
            >
              Witness Live Commission
            </button>
          </div>
        </div>
      </section>

      {/* 6. FEATURED COLLECTION (Luxury Soap Dispensers Gallery with Hover Zoom & Premium Layout) */}
      <section id="gallery" className="relative py-28 bg-radial-luxury">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase">Summer Collection</p>
              <h3 className="text-3xl md:text-5xl font-display font-light text-white tracking-wide">
                Featured Stone <span className="text-gold-gradient font-semibold">& Resin Masterpieces</span>
              </h3>
            </div>
            <p className="max-w-md text-zinc-400 font-light text-sm tracking-wide leading-relaxed">
              Discover unique stone structures and marine-grade copolymer finishes calibrated for modern washbasins. Select an item to configure.
            </p>
          </div>

          {/* Catalog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LUXURY_PRODUCTS.map((prod) => {
              const worksWithTheme = prod.accentHex === '#D4AF37';
              return (
                <div 
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    const updateInquiry = { ...inquiry, selectedProduct: prod.name };
                    if (prod.id === 'obsidian-veda') {
                      updateInquiry.selectedStone = 'Dark Volcanic Obsidian';
                    } else if (prod.id === 'alabaster-pebble') {
                      updateInquiry.selectedStone = 'Snow Alabaster Quartz';
                    } else {
                      updateInquiry.selectedStone = 'Calcite Marble Aggregate';
                    }
                    setInquiry(updateInquiry);
                    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative rounded-xl overflow-hidden glass-morphic border transition-all duration-500 cursor-pointer flex flex-col justify-between h-[480px] hover:-translate-y-2 ${
                    selectedProduct.id === prod.id ? 'border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.12)]' : 'border-white-glass hover:border-zinc-700'
                  }`}
                  id={`product-card-${prod.id}`}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-black/60 border-b border-white-glass">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mapping over the product */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent pointer-events-none" />

                    {/* Luxury Tag Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-mono tracking-[2px] uppercase bg-black/80 text-[#D4AF37] px-2.5 py-1 rounded border border-gold-glass">
                        {prod.luxuryTag}
                      </span>
                    </div>

                    {/* Highlight Circle indicator on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <div className="h-12 w-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono">{prod.type}</span>
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: prod.colorHex }} />
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: prod.accentHex }} />
                        </div>
                      </div>

                      <h4 className="text-xl font-display font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                        {prod.name}
                      </h4>

                      <p className="text-zinc-400 font-light text-xs mt-2 line-clamp-3 leading-relaxed">
                        {prod.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white-glass/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500 uppercase tracking-widest">Bespoke run</span>
                      <span className="text-[#D4AF37] uppercase tracking-[1px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                        Select Craft <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. PRODUCT SHOWCASE SECTION (Apple-Style Details focus with large product image) */}
      <section id="showcase" className="relative py-28 border-t border-white-glass bg-black/60">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center space-y-4 mb-16">
            <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase font-semibold">Anatomy of Elegance</p>
            <h3 className="text-3xl md:text-5xl font-display font-light text-white tracking-wide">
              The Artisan <span className="text-gold-gradient font-bold">Product Showcase</span>
            </h3>
            <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box (Specs Listing) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-xl glass-morphic border-gold-glass">
                <span className="text-[9px] font-mono text-[#D4AF37] tracking-[2px] uppercase">Selected Model Specs:</span>
                <h4 className="text-2xl font-display text-white font-medium mt-1 mb-3">{selectedProduct.name}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">{selectedProduct.description}</p>
                <div className="h-[1px] bg-white-glass my-3" />
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Dimensions:</span>
                    <span className="text-zinc-200 font-mono text-[11px]">{selectedProduct.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Standard Volume:</span>
                    <span className="text-[#D4AF37] font-mono text-[11px]">{selectedProduct.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Form Structure:</span>
                    <span className="text-zinc-200 font-mono text-[11px]">{selectedProduct.type}</span>
                  </div>
                </div>
              </div>

              {/* Hardware Selection Spotlight */}
              <div className="p-6 rounded-xl glass-morphic-light border border-white-glass">
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-gold-glass">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-[1.5px] text-zinc-100">Pneumatic Seal</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Heavy gold & rose-gold copper pumps loaded with anti-clog valves.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Box (Large Showcase Image Panel with clickable hot spots) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#D4AF37]/5 to-[#B76E79]/5 blur-3xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white-glass max-w-md w-full bg-zinc-950 aspect-[3/4]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  id="showcase-product-img"
                />

                {/* Aesthetic Glass Title overlays */}
                <div className="absolute bottom-6 inset-x-6 glass-morphic border border-white-glass p-5 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-[3px] font-mono text-[#D4AF37]">{selectedProduct.luxuryTag}</p>
                    <p className="text-base text-white font-display font-medium">{selectedProduct.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedProduct.colorHex }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedProduct.accentHex }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box (Feature Checklist Highlights) */}
            <div className="lg:col-span-3 space-y-6">
              <h5 className="text-xs uppercase font-mono text-[#D4AF37] tracking-[3px] font-semibold">Artisan Highlights:</h5>
              <div className="space-y-4">
                {selectedProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="h-5 w-5 rounded-full border border-[#D4AF37]/30 bg-black flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">{feat}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('customizer');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-center px-4 py-3 rounded-md bg-transparent hover:bg-neutral-800 text-white border border-zinc-700 text-xs uppercase tracking-[2px] font-semibold transition-all"
                  id="configure-accent-btn"
                >
                  Select Base Matrix
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE RESIN ART (Luxury Icon Columns) */}
      <section id="why" className="relative py-28 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase font-semibold">Curated Specifications</p>
            <h3 className="text-3xl md:text-4xl font-display text-white tracking-wide font-light">
              Why Collectors Choose <span className="text-gold-gradient font-bold">RESIN ART</span>
            </h3>
            <div className="h-[1px] w-20 bg-zinc-700 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESIN_FEATURES.map((feat, idx) => {
              const icons = [
                <Layers className="w-5 h-5 text-[#D4AF37]" />,
                <Feather className="w-5 h-5 text-rose-300" />,
                <Compass className="w-5 h-5 text-teal-300" />,
                <Sparkles className="w-5 h-5 text-amber-300" />
              ];
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-xl glass-morphic border border-white-glass hover:border-[#D4AF37]/30 transition-all duration-300 group flex flex-col justify-between h-72"
                  id={`why-card-${idx}`}
                >
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-full bg-black/60 flex items-center justify-center border border-white-glass group-hover:border-[#D4AF37] transition-colors">
                      {icons[idx]}
                    </div>
                    <h4 className="text-lg font-display text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. INTERIOR INSPIRATION SECTION (Pinterest-Quality Luxury Image Grid) */}
      <section id="inspiration" className="relative py-28 bg-radial-luxury">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase font-semibold">Architectural Showcase</p>
              <h3 className="text-3xl md:text-5xl font-display font-light text-white tracking-wide">
                Interior Inspiration <span className="text-gold-gradient font-semibold">& Layouts</span>
              </h3>
            </div>
            <p className="max-w-md text-zinc-400 font-light text-xs sm:text-sm tracking-wide leading-relaxed">
              Witness our limited-production pieces residing seamlessly within elite luxury wellness retreats, boutique spas, and modern spaces.
            </p>
          </div>

          {/* Grid Layout of locations */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedGalleryImg(item.image)}
                className="group relative rounded-xl h-80 overflow-hidden border border-white-glass cursor-pointer"
                id={`gallery-item-${item.id}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glassy overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5 pt-12 text-left">
                  <span className="text-[9px] font-mono text-[#D4AF37] tracking-[1.5px] uppercase">{item.category}</span>
                  <p className="text-sm font-display text-white mt-1">{item.title}</p>
                  
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mt-2 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#B76E79]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex h-8 w-8 rounded-full bg-black/80 items-center justify-center border border-white-glass">
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. REAL-TIME TESTIMONIALS (Glass card blocks with gold and bronze detail styling) */}
      <section id="testimonials" className="relative py-28 border-t border-b border-white-glass bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase font-semibold">Laurels & Critique</span>
            <h3 className="text-3xl md:text-4xl font-display font-light text-white tracking-wider">
              Evaluations from <span className="text-gold-gradient font-bold">Leading Designers</span>
            </h3>
            <div className="h-[1px] w-24 bg-zinc-800 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id}
                className="p-8 rounded-xl glass-morphic border border-white-glass hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-8 relative"
                id={`testimonial-card-${test.id}`}
              >
                {/* Big decorative quotes sign */}
                <div className="absolute top-6 right-6 text-7xl font-serif text-white/5 select-none pointer-events-none">
                  “
                </div>

                <div className="space-y-4">
                  {/* Highly polished Gold Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-sm text-[#D4AF37] text-glow">★</span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white-glass">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#B76E79] flex items-center justify-center font-display font-semibold text-black text-xs">
                    {test.author.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white tracking-wide uppercase">{test.author}</h5>
                    <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{test.role}</p>
                    <p className="text-[9px] text-[#D4AF37] font-mono flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" /> {test.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. INTERACTIVE LIVE CUSTOM ORDERS & BUILDER (An Awwwards Gold Standard) */}
      <section id="customizer" className="relative py-28 bg-radial-luxury">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column - Live Selection Details & Interactive Render */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-morphic p-8 rounded-2xl border-gold-glass">
              <div>
                <p className="text-[10px] font-mono text-[#D4AF37] tracking-[4px] uppercase mb-1">State Selection Render</p>
                <h4 className="text-2xl font-display text-white font-light tracking-wide mb-6">
                  Commission Specification
                </h4>

                {/* Big interactive Preview image */}
                <div className="relative rounded-xl overflow-hidden border border-white-glass aspect-square bg-[#0c0c0c] mb-6">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover transition-all"
                    referrerPolicy="no-referrer"
                    id="customizer-preview-img"
                  />
                  
                  {/* Subtle water droplet graphic badge */}
                  <div className="absolute top-4 right-4 glass-morphic-light border border-white-glass rounded px-2.5 py-1 text-[8px] font-mono uppercase tracking-[1.5px] text-zinc-300">
                    Active Specs
                  </div>
                </div>

                {/* Dynamic Formula description */}
                <div className="space-y-3.5 text-xs text-zinc-300">
                  <p className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500 font-light">Custom Base:</span>
                    <strong className="text-[#D4AF37] font-mono uppercase font-semibold">{inquiry.selectedProduct}</strong>
                  </p>
                  <p className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500 font-light">Stone Texture:</span>
                    <span className="font-mono text-zinc-200">{inquiry.selectedStone}</span>
                  </p>
                  <p className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500 font-light">Metallic Pump:</span>
                    <span className="font-mono text-zinc-200">{inquiry.pumpFinish}</span>
                  </p>
                  <p className="flex justify-between border-b border-zinc-800/80 pb-2">
                    <span className="text-zinc-500 font-light">Capacity Value:</span>
                    <span className="font-mono text-zinc-200">{inquiry.capacityValue}</span>
                  </p>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded bg-black/60 border border-white-glass text-[11px] text-zinc-400 font-light leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Our master artisan will hand-pour, diamond-buff, and assemble this specification in our 72-hour curing cycle. Custom colors are welcome.
                </span>
              </div>
            </div>

            {/* Right Column - Step-by-Step Customizer Controls */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 bg-[#141414] p-8 md:p-12 rounded-2xl border border-white-glass">
              <div className="space-y-3">
                <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase font-semibold">Atelier Commission Generator</p>
                <h3 className="text-3xl font-display text-white font-medium">
                  Designed Exclusively For Your Space
                </h3>
                <p className="text-xs text-zinc-400 font-light tracking-wide leading-relaxed">
                  Calibrate colors, pump metal finishes, and volume sizing. Double-check your options below to construct the absolute baseline of your soap dispenser set.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-6">
                
                {/* Step 1: Select Master Base */}
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase text-zinc-400 tracking-[2px] block">
                    1. Select Master Model Archetype
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {LUXURY_PRODUCTS.map((prod) => (
                      <button
                        type="button"
                        key={prod.id}
                        onClick={() => {
                          setSelectedProduct(prod);
                          const chosenStone = prod.id === 'obsidian-veda' 
                            ? 'Dark Volcanic Obsidian' 
                            : prod.id === 'alabaster-pebble' 
                            ? 'Snow Alabaster Quartz' 
                            : 'Calcite Marble Aggregate';

                          setInquiry({
                            ...inquiry,
                            selectedProduct: prod.name,
                            selectedStone: chosenStone
                          });
                        }}
                        className={`p-4 rounded-lg text-left transition-all border text-xs flex flex-col justify-between ${
                          selectedProduct.name === prod.name 
                            ? 'border-[#D4AF37] bg-black text-[#D4AF37]' 
                            : 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700'
                        }`}
                        id={`customizer-arc-${prod.id}`}
                      >
                        <span className="font-semibold block font-display uppercase tracking-wide">{prod.name}</span>
                        <span className="text-[9px] text-zinc-500 mt-1 block leading-tight">{prod.type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Custom Granite / Pebble options */}
                <div className="space-y-3">
                  <label className="text-[10px] font-mono uppercase text-zinc-400 tracking-[2px] block">
                    2. Select Natural Stone Mix
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    {[
                      'Dark Volcanic Obsidian',
                      'Snow Alabaster Quartz',
                      'Emerald Jade Resin',
                      'Rose Quartz Marble'
                    ].map((stone) => (
                      <button
                        type="button"
                        key={stone}
                        onClick={() => setInquiry({ ...inquiry, selectedStone: stone })}
                        className={`py-3.5 px-2.5 rounded text-center transition-all border uppercase tracking-[1px] text-[10px] ${
                          inquiry.selectedStone === stone 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-medium' 
                            : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-400'
                        }`}
                        id={`custom-stone-${stone.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {stone.split(' ')[0]} {stone.split(' ')[1] || ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Selected Metallic Pump finishes */}
                <div className="space-y-2.5">
                  <label className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-[2px] block">
                    3. Plated Pump Finish
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    {[
                      'Brushed Royal Gold',
                      'Polished Rose Gold',
                      'Stellar Chrome Silver',
                      'Matte Cosmic Black'
                    ].map((pump) => (
                      <button
                        type="button"
                        key={pump}
                        onClick={() => setInquiry({ ...inquiry, pumpFinish: pump })}
                        className={`py-3 px-2 rounded text-center transition-all border text-[10px] tracking-[0.5px] uppercase ${
                          inquiry.pumpFinish === pump 
                            ? 'border-[#D4AF37] bg-white text-black font-semibold' 
                            : 'border-zinc-800 hover:border-zinc-700 bg-[#161616] text-zinc-400'
                        }`}
                        id={`custom-pump-${pump.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {pump}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Sizing & Bulk selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 tracking-[2px] block">
                      Capacity Sizing
                    </label>
                    <select
                      value={inquiry.capacityValue}
                      onChange={(e) => setInquiry({ ...inquiry, capacityValue: e.target.value })}
                      className="w-full bg-[#161616] border border-zinc-800 text-xs rounded p-3 text-zinc-200 outline-none focus:border-[#D4AF37]"
                    >
                      <option value="250ml">250ml (Standard Toilette)</option>
                      <option value="300ml">300ml (Ensuite Spire)</option>
                      <option value="500ml">500ml (Signature Suite Grande)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-400 tracking-[2px] block">
                      Commission Volume Type
                    </label>
                    <select
                      value={inquiry.orderType}
                      onChange={(e) => setInquiry({ ...inquiry, orderType: e.target.value })}
                      className="w-full bg-[#161616] border border-zinc-800 text-xs rounded p-3 text-zinc-200 outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Bespoke Private Residence">Bespoke Private Residence (1-3 Items)</option>
                      <option value="Boutique Hotel Project">Boutique Hotel / Spa Project (20+ Items)</option>
                      <option value="Corporate Gifting & Hospitality">Corporate Gifting (Bulk discount)</option>
                      <option value="Architectural Sample Package">Architectural Spec Sample</option>
                    </select>
                  </div>
                </div>

                {/* Step 5: Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-300 tracking-[2px] block font-medium">
                      Patron Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alessandra Moretti"
                      value={inquiry.fullName}
                      onChange={(e) => setInquiry({ ...inquiry, fullName: e.target.value })}
                      className="w-full bg-[#161616] border border-zinc-800 text-xs rounded p-3 text-zinc-100 outline-none focus:border-[#D4AF37] placeholder-zinc-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-zinc-300 tracking-[2px] block">
                      WhatsApp / Contact (Optional)
                    </label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +39 345 678 9012"
                      value={inquiry.contactNumber}
                      onChange={(e) => setInquiry({ ...inquiry, contactNumber: e.target.value })}
                      className="w-full bg-[#161616] border border-zinc-800 text-xs rounded p-3 text-zinc-100 outline-none focus:border-[#D4AF37] placeholder-zinc-600"
                    />
                  </div>
                </div>

                {/* Additional instructions */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-zinc-400 tracking-[2px] block">
                    Atelier Custom Instructions
                  </label>
                  <textarea
                    rows={2}
                    value={inquiry.notes}
                    onChange={(e) => setInquiry({ ...inquiry, notes: e.target.value })}
                    className="w-full bg-[#161616] border border-zinc-800 text-xs rounded p-3 text-zinc-200 outline-none focus:border-[#D4AF37] placeholder-zinc-600"
                    placeholder="E.g. I prefer more gold flecks visible on the Obsidian basalt aggregate."
                  />
                </div>

                {/* Dispatch Trigger */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded text-xs uppercase tracking-[3px] font-bold text-black bg-[#D4AF37] hover:bg-[#F2E3C6] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Initialize WhatsApp Inquiry 
                  </button>
                  <p className="text-[10px] text-zinc-500 font-mono text-center mt-3">
                    Bypasses billing. Opens standard chat directly with our Artisan Coordinator.
                  </p>
                </div>

              </form>

              {/* Inquiry Sent Toast alert */}
              {inquirySent && (
                <div className="p-4 rounded bg-[#0A4D68]/20 border border-[#0A4D68] text-xs text-zinc-200 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>
                    WhatsApp link constructed and opened. Our concierge is awaiting your specification. Thank you!
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* 12. LUXURY CONTACT & SOCIAL PANEL */}
      <section id="contact" className="relative py-28 border-t border-white-glass bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left box - Info */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[11px] font-mono text-[#D4AF37] tracking-[4px] uppercase">Immediate Response</p>
                <h3 className="text-3xl md:text-5xl font-display text-white font-light">
                  Initiate Conversation <br />
                  <span className="italic text-rose-light">With Our Studio Coordinator</span>
                </h3>
              </div>

              <p className="text-zinc-400 font-light text-sm tracking-wide leading-relaxed">
                Whether you are procuring custom stone items for a luxury bathroom restoration, a private yacht commission, or custom hospitality setups, we are fully structured to deliver flawless premium support via chat or private inquiry.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="h-9 w-9 rounded-full bg-zinc-900 border border-white-glass flex items-center justify-center text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase tracking-[1px]">Studio Headquarter</span>
                    <span className="text-zinc-200">Milan | Zurich | Los Angeles Atelier</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="h-9 w-9 rounded-full bg-zinc-900 border border-white-glass flex items-center justify-center text-[#D4AF37]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase tracking-[1px]">Patron Email Desk</span>
                    <span className="text-zinc-200">concierge@resinart-studio.luxury</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right box - Highly styled interaction options panel */}
            <div className="p-8 md:p-12 rounded-2xl glass-morphic border border-gold-glass space-y-6">
              <h4 className="text-xl font-display text-white font-medium">
                Atelier Communications Protocol
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Select your preferred digital avenue. All inquiries route directly to specialized design representatives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Premium WhatsApp Button */}
                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-lg border border-white-glass bg-zinc-900/60 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all flex flex-col justify-between h-36 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block tracking-[1px]">Direct Support</span>
                    <span className="text-sm text-white font-semibold group-hover:text-gold-light">WhatsApp Atelier</span>
                  </div>
                </a>

                {/* Premium Instagram Button */}
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-lg border border-white-glass bg-zinc-900/60 hover:bg-[#B76E79]/10 hover:border-[#B76E79] transition-all flex flex-col justify-between h-36 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B76E79] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block tracking-[1px]">Porfolio Feed</span>
                    <span className="text-sm text-white font-semibold group-hover:text-rose-light">Direct Instagram</span>
                  </div>
                </a>

              </div>

              {/* Anti-spam stamp */}
              <div className="text-[10px] text-zinc-500 font-mono text-center flex items-center justify-center gap-1.5 pt-2">
                <Check className="w-3.5 h-3.5 text-teal-400" />
                <span>Verified Direct Patron Channels • No Spam Admitted</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 13. LUXURY DARK FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-white-glass py-16 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white-glass">
            
            {/* Brand column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded border border-gold-glass overflow-hidden bg-black">
                  <img src={ASSET_IMAGES.logo} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="font-display text-base tracking-[4px] text-white">RESIN ART</span>
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[3px] text-[#D4AF37]">
                Luxury Crafted By Hand
              </p>
              <p className="text-zinc-600 font-light leading-relaxed">
                Reconceptualizing bath accessories as natural geologic sculptures capped in museum crystalline polymer.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-white font-semibold">The Portfolio</span>
              <ul className="space-y-2 font-light">
                <li><a href="#gallery" className="hover:text-white transition-colors">Stone Soap Dispensers</a></li>
                <li><a href="#customizer" className="hover:text-white transition-colors">Custom Earth Textures</a></li>
                <li><a href="#inspiration" className="hover:text-white transition-colors">Architectural Inlay</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">Atelier Curing Process</a></li>
              </ul>
            </div>

            {/* Inquiries Desk */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-white font-semibold">Inquiries Desk</span>
              <ul className="space-y-2 font-light">
                <li><a href="#customizer" className="hover:text-white transition-colors">Atelier Portal</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Wholesale Partnerships</a></li>
                <li><a href="#showcase" className="hover:text-white transition-colors">Sample Spec Kits</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors font-semibold text-[#D4AF37]">Submit Critique</a></li>
              </ul>
            </div>

            {/* Environmental Stewardship */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-white font-semibold">Stewardship</span>
              <p className="text-zinc-600 font-light leading-relaxed">
                All raw quartz pebbles and volcanic aggregates are gathered ethically under local mineral protection schemas. Fusions use local non-toxic resins.
              </p>
            </div>

          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 font-mono text-[10px] text-zinc-600">
            <p>© 2026 RESIN ART Inc. All rights reserved. Made under luxury artisan charter.</p>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" /> Instagram
              </a>
              <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> WhatsApp Desk
              </a>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-500 uppercase tracking-widest font-semibold flex items-center gap-1">
                Awwwards Nominee <Heart className="w-3 h-3 text-[#B76E79] fill-[#B76E79]" />
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* 14. SIMPLE INTERACTIVE IMAGE LIGHTBOX */}
      {selectedGalleryImg && (
        <div 
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          id="gallery-lightbox-modal"
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden border border-white-glass bg-[#0c0c0c]">
            <img 
              src={selectedGalleryImg} 
              alt="Bespoke resin work zoomed" 
              className="max-w-full max-h-[85vh] object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/80 flex items-center justify-center text-white border border-white-glass hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
