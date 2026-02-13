
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div>
          <h2 className="text-2xl font-black text-white luxury-font mb-6 tracking-widest uppercase">AURA <span className="text-[#E5C1CD]">LUXE</span></h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            The world's most prestigious makeup and skincare destination. Authentic luxury brands, curated for your specific radiance.
          </p>
          <div className="flex space-x-6">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#E5C1CD] transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-[#E5C1CD] transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#E5C1CD] transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">About Us</h3>
          <ul className="space-y-4 text-gray-300 text-xs font-bold uppercase tracking-widest">
            {/* Links deactivated as per user request */}
            <li className="cursor-default text-gray-500">Our Heritage</li>
            <li className="cursor-default text-gray-500">Atelier Boutique</li>
            <li className="cursor-default text-gray-500">Beauty Collective</li>
            <li className="cursor-default text-gray-500">Concierge Service</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Support</h3>
          <ul className="space-y-4 text-gray-300 text-xs font-bold uppercase tracking-widest">
            <li className="cursor-default text-gray-500">Shipping Boutique</li>
            <li className="cursor-default text-gray-500">Luxury Returns</li>
            <li className="cursor-default text-gray-500">Beauty FAQs</li>
            <li className="cursor-default text-gray-500">Terms & Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">The Salon</h3>
          <ul className="space-y-6 text-gray-400 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-4 text-[#E5C1CD] flex-shrink-0" />
              <span>Plaza de la Radiance, Algiers, DZ</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-4 text-[#E5C1CD] flex-shrink-0" />
              <span>+213 555 90 80 70</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-4 text-[#E5C1CD] flex-shrink-0" />
              <span>concierge@auraluxe.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-10 border-t border-white/10 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
        <p>&copy; {new Date().getFullYear()} Aura Luxe International. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
