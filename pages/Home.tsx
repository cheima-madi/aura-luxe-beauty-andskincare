
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ArrowRight, Star, ShoppingBag, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS, BRANDS } from '../constants';

const Home: React.FC = () => {
  const featured = SAMPLE_PRODUCTS.filter(p => p.featured).slice(0, 3);

  return (
    <div className="pb-20 bg-[#FCF8F7]">
      {/* Luxury Beauty Hero - Makeup Focused */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000" 
            alt="Aura Luxe Beauty Artistry" 
            className="w-full h-full object-cover brightness-[0.5] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-[10px] font-black tracking-[0.5em] uppercase mb-8 border border-white/20 text-[#E5C1CD]">
              Prestige Beauty Atelier
            </span>
            <h1 className="text-6xl md:text-9xl font-black leading-[1] mb-8 tracking-tighter luxury-font">
              AURA <br />
              <span className="italic font-light text-[#E5C1CD]">LUXE.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Step into a sanctuary of professional makeup and clinical skincare. Curating the world's most desired brands for your unique radiance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/products" className="bg-[#E5C1CD] text-[#0A0A0A] px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2">
                Discover The Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Filter Bar */}
      <div className="bg-white py-20 border-b border-gray-100 overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-14">The Aura Collective</p>
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
            {BRANDS.map(brand => (
              <Link 
                key={brand} 
                to={`/products?brand=${brand}`}
                className="group flex flex-col items-center"
              >
                <span className="text-[#0A0A0A] font-black tracking-tighter text-2xl group-hover:text-[#E5C1CD] transition-colors uppercase luxury-font">{brand}</span>
                <div className="w-0 h-0.5 bg-[#E5C1CD] group-hover:w-full transition-all duration-300 mt-2"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Makeup Arrivals */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Must-Haves</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tighter luxury-font">Iconic Artistry</h3>
          </div>
          <Link to="/products" className="mt-6 md:mt-0 font-black text-[10px] uppercase tracking-widest text-[#0A0A0A] border-b-2 border-[#E5C1CD] pb-2 hover:text-[#E5C1CD] transition-colors">
            See All New Drops
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Skincare Focus Section */}
      <section className="bg-[#0A0A0A] py-32 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                 <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(229,193,205,0.1)] relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      alt="Clinical Skincare Excellence"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all"></div>
                 </div>
              </div>
              <div className="space-y-10 order-1 lg:order-2">
                <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">Science of Glow</h2>
                <h3 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter luxury-font">
                   Dermal <br /><span className="italic font-light text-[#E5C1CD]">Innovation.</span>
                </h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                   Experience the transformative power of Glow Recipe and Drunk Elephant. Scientifically proven, aesthetically driven skincare for the modern era.
                </p>
                <div className="space-y-8 pt-6">
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                         <ShieldCheck className="w-6 h-6 text-[#E5C1CD]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Ethically Sourced Clinical Actives</span>
                   </div>
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-[#E5C1CD]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Curated Luxury Experience</span>
                   </div>
                </div>
                <Link to="/products?category=Skincare" className="inline-block bg-[#E5C1CD] text-black px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest mt-6 hover:scale-105 transition-transform shadow-xl shadow-[#E5C1CD]/20">
                  Explore Skincare Boutique
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-6xl md:text-8xl font-black luxury-font mb-10 tracking-tighter text-[#0A0A0A]">UNVEIL <br /> YOUR LIGHT.</h2>
           <p className="text-gray-500 text-xl font-light mb-14">Join the Aura Luxe collective for early access to exclusive drops from Dior, Chanel, and Rare Beauty.</p>
           <div className="flex flex-wrap justify-center gap-8">
              <Link to="/register" className="bg-[#0A0A0A] text-white px-14 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-black transition shadow-2xl">
                 Become a Member
              </Link>
              <Link to="/products" className="bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A] px-14 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-black hover:text-white transition">
                 Shop All Collections
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
