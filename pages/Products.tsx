
import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronDown, Sparkles, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { SAMPLE_PRODUCTS, CATEGORIES, BRANDS } from '../constants';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [category, setCategory] = useState(queryParams.get('category') || 'All');
  const [brand, setBrand] = useState(queryParams.get('brand') || 'All');
  const [search, setSearch] = useState(queryParams.get('search') || '');
  const [sort, setSort] = useState('newest');

  // Sync state with URL params
  useEffect(() => {
    setCategory(queryParams.get('category') || 'All');
    setBrand(queryParams.get('brand') || 'All');
    setSearch(queryParams.get('search') || '');
  }, [location.search]);

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS
      .filter(p => category === 'All' || p.category === category)
      .filter(p => brand === 'All' || p.name.toLowerCase().includes(brand.toLowerCase()))
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price;
        if (sort === 'price-high') return b.price - a.price;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [category, brand, search, sort]);

  const clearFilters = () => {
    setCategory('All');
    setBrand('All');
    setSearch('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
        <div>
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Curation</h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter luxury-font">
            {brand !== 'All' ? brand : category !== 'All' ? category : 'The Collections.'}
          </h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input 
              type="text" 
              placeholder="Search by brand or product..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-full focus:ring-1 focus:ring-black outline-none w-full md:w-80 shadow-sm text-xs font-medium"
            />
          </div>
          <div className="relative">
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none pl-6 pr-12 py-4 bg-white border border-gray-100 rounded-full outline-none focus:ring-1 focus:ring-black text-[10px] font-black uppercase tracking-widest shadow-sm cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-12 shrink-0">
          <div>
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <h3 className="text-[10px] font-black text-black uppercase tracking-[0.3em]">Brands</h3>
              {(category !== 'All' || brand !== 'All' || search) && (
                <button onClick={clearFilters} className="text-[8px] font-black text-pink-600 uppercase flex items-center gap-1">
                  Reset <X className="w-2 h-2" />
                </button>
              )}
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => setBrand('All')}
                className={`block w-full text-left text-[11px] font-bold uppercase tracking-widest transition-all ${brand === 'All' ? 'text-black font-black translate-x-2' : 'text-gray-400 hover:text-gray-600'}`}
              >
                All Brands
              </button>
              {BRANDS.map(b => (
                <button 
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`block w-full text-left text-[11px] font-bold uppercase tracking-widest transition-all ${brand === b ? 'text-black font-black translate-x-2' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {b}
                </button>
              ))}
            </div>

            <h3 className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-8 mt-12 pb-4 border-b border-gray-100">Categories</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setCategory('All')}
                className={`block w-full text-left text-[11px] font-bold uppercase tracking-widest transition-all ${category === 'All' ? 'text-black font-black translate-x-2' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Everything
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`block w-full text-left text-[11px] font-bold uppercase tracking-widest transition-all ${category === cat ? 'text-black font-black translate-x-2' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-pink-50 text-pink-900 p-10 rounded-3xl space-y-4 border border-pink-100">
             <Sparkles className="w-8 h-8 text-pink-600" />
             <h4 className="font-black text-xs uppercase tracking-widest">Find your Glow.</h4>
             <p className="text-[10px] text-pink-700 leading-relaxed font-medium">Chat with our luxury beauty consultant for shade matching and skincare routines tailored for you.</p>
             <button className="text-[9px] font-black uppercase tracking-widest border-b border-pink-900 pt-2">Consult Now</button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-gray-50 rounded-[3rem]">
              <Search className="w-16 h-16 text-gray-200 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-gray-900 luxury-font mb-2">No results found</h3>
              <p className="text-gray-400 font-light">Try adjusting your filters or search keywords.</p>
              <button onClick={clearFilters} className="mt-8 text-[10px] font-black uppercase text-pink-600 border border-pink-600 px-6 py-2 rounded-full">Reset Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
