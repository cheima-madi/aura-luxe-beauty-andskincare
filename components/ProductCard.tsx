
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.colors[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-gray-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9F9]">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute top-6 left-6 flex flex-col gap-3">
          {product.featured && (
            <span className="bg-[#0A0A0A] text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full">Bestseller</span>
          )}
        </div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-full text-[9px] font-black uppercase tracking-[0.3em] shadow-2xl translate-y-6 group-hover:translate-y-0 transition-all duration-700 text-[#0A0A0A]">
             Discover Details
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[9px] font-black text-[#E5C1CD] uppercase tracking-[0.4em]">{product.category}</span>
          <div className="flex items-center gap-1.5 text-[10px] font-black text-[#0A0A0A]">
             <Star className="w-3 h-3 fill-[#0A0A0A]" />
             <span>4.9</span>
          </div>
        </div>
        <h3 className="font-black text-xl text-[#0A0A0A] group-hover:text-black transition luxury-font leading-tight mb-3 uppercase tracking-tighter">{product.name}</h3>
        <p className="text-xs text-gray-400 mt-1 line-clamp-2 h-10 font-light leading-relaxed">{product.description}</p>
        
        <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
          <span className="text-2xl font-black text-[#0A0A0A]">{product.price.toLocaleString()} DA</span>
          <button 
            onClick={handleQuickAdd}
            className="w-12 h-12 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center hover:bg-[#E5C1CD] hover:text-[#0A0A0A] transition-all shadow-xl active:scale-90"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
