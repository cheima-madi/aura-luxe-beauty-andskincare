
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, Check, Info, Star, Heart, Share2 } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(SAMPLE_PRODUCTS.find(p => p.id === id));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) {
      const found = SAMPLE_PRODUCTS.find(p => p.id === id);
      if (found) {
        setProduct(found);
        setSelectedColor(found.colors[0]);
      }
    }
  }, [id, product]);

  if (!product) return <LoadingSpinner />;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex justify-between items-center mb-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition"
        >
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Collections
        </button>
        <button className="text-gray-400 hover:text-black transition">
           <Share2 className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Image Gallery */}
        <div className="space-y-8">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-sm relative group">
             <img 
               src={product.images[activeImage]} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               alt={product.name} 
             />
             <div className="absolute inset-0 bg-black/5"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-black scale-95 shadow-lg' : 'border-transparent opacity-60'}`}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="bg-[#F9F9F9] p-10 rounded-[2.5rem] space-y-6">
            <div className="flex items-start gap-4">
               <Info className="w-5 h-5 text-black mt-1" />
               <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-black mb-1">Details & Benefits</h4>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    {product.dimensions} | {product.description}
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Info & Actions */}
        <div className="flex flex-col">
          <div className="mb-10 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-6">
               <div className="flex text-pink-600">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-pink-600" />)}
               </div>
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">4.8 (890 reviews)</span>
            </div>
            <span className="text-[11px] font-black text-pink-600 uppercase tracking-[0.3em] block mb-3">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 luxury-font leading-tight tracking-tighter">{product.name}</h1>
            <p className="text-3xl font-black text-black mb-8">{product.price.toLocaleString()} DA</p>
            <p className="text-gray-500 leading-relaxed font-light text-lg">{product.description}</p>
          </div>

          <div className="space-y-12 mb-12">
            {/* Color/Shade Selection */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[10px] font-black text-black uppercase tracking-widest">Choose Variation</h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Shade: {selectedColor}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      selectedColor === color 
                      ? 'bg-black text-white shadow-xl scale-105' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-10">
               <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-black uppercase tracking-widest">Quantity</h3>
                  <div className="flex items-center space-x-4 border border-gray-200 rounded-full px-5 py-2.5 bg-white shadow-sm w-fit">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-8 flex items-center justify-center font-bold text-gray-400 hover:text-black transition text-lg">-</button>
                    <span className="w-8 text-center font-black text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} className="w-8 h-8 flex items-center justify-center font-bold text-gray-400 hover:text-black transition text-lg">+</button>
                  </div>
               </div>
               <div className="flex-grow pt-8">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-pink-600 transition">
                     <Heart className="w-4 h-4" /> Add to Wishlist
                  </button>
               </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-gray-900 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" /> Add to Bag
            </button>
          </div>

          {/* Luxury Benefits */}
          <div className="grid grid-cols-2 gap-8 p-10 bg-gray-50 border border-gray-100 rounded-[2.5rem]">
            <div className="space-y-1">
              <Truck className="w-5 h-5 text-gray-400 mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest">Fast Delivery</p>
              <p className="text-[8px] text-gray-400 uppercase tracking-[0.2em]">3-5 Business Days</p>
            </div>
            <div className="space-y-1">
              <Check className="w-5 h-5 text-gray-400 mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest">100% Authentic</p>
              <p className="text-[8px] text-gray-400 uppercase tracking-[0.2em]">Official Brand Retailer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
