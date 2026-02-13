
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, LogOut, Search, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { BRANDS } from '../constants';

const Navbar: React.FC = () => {
  const { user, isAdmin, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Corrected: Searching now correctly redirects to the products page with query
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled || !isHome ? 'bg-white border-gray-100 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-black tracking-widest transition-colors luxury-font ${
              scrolled || !isHome ? 'text-black' : 'text-white'
            }`}>
              AURA <span className="font-light">LUXE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/products" className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              scrolled || !isHome ? 'text-gray-900 hover:text-pink-600' : 'text-white/80 hover:text-white'
            }`}>New Arrivals</Link>
            
            <div className="relative group" onMouseEnter={() => setIsBrandsOpen(true)} onMouseLeave={() => setIsBrandsOpen(false)}>
              <button className={`text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 ${
                scrolled || !isHome ? 'text-gray-900 hover:text-pink-600' : 'text-white/80 hover:text-white'
              }`}>
                Brands <ChevronDown className="w-3 h-3" />
              </button>
              {isBrandsOpen && (
                <div className="absolute top-full -left-4 w-48 bg-white shadow-xl border border-gray-100 rounded-xl py-4 animate-in fade-in slide-in-from-top-2">
                  {BRANDS.map(brand => (
                    <Link 
                      key={brand} 
                      to={`/products?brand=${brand}`}
                      className="block px-6 py-2 text-xs font-bold text-gray-700 hover:text-pink-600 hover:bg-gray-50 uppercase tracking-widest"
                      onClick={() => setIsBrandsOpen(false)}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/products?category=Skincare" className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              scrolled || !isHome ? 'text-gray-900 hover:text-pink-600' : 'text-white/80 hover:text-white'
            }`}>Skincare</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
                <Search className={`w-4 h-4 absolute left-3 transition-colors ${scrolled || !isHome ? 'text-gray-400' : 'text-white/60'}`} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search beauty..." 
                  className={`pl-10 pr-4 py-2 rounded-full text-xs font-medium w-48 focus:w-64 transition-all duration-300 outline-none border-0 shadow-inner ${
                    scrolled || !isHome ? 'bg-gray-100 text-black' : 'bg-white/10 text-white placeholder:text-white/50 backdrop-blur-md'
                  }`}
                />
            </form>

            <Link to="/cart" className={`relative p-2 transition-transform active:scale-95 ${
              scrolled || !isHome ? 'text-gray-900' : 'text-white'
            }`}>
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-pink-600 text-white text-[8px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`w-9 h-9 rounded-full overflow-hidden border-2 flex items-center justify-center font-black text-xs transition-colors ${
                    scrolled || !isHome ? 'bg-black text-white border-black' : 'bg-white text-black border-white'
                  }`}
                >
                  {user?.name.charAt(0)}
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 overflow-hidden animate-in fade-in zoom-in-95">
                    <p className="px-4 py-2 text-[10px] text-gray-400 font-black uppercase tracking-widest border-b mb-1">Hi, {user?.name}</p>
                    <Link to="/profile" className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 transition">My Profile</Link>
                    <Link to="/orders" className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 transition">My Orders</Link>
                    {isAdmin && <Link to="/admin" className="block px-4 py-2.5 text-xs text-pink-600 font-bold hover:bg-gray-50">Admin Dash</Link>}
                    <hr className="my-1 border-gray-100" />
                    <button onClick={handleLogout} className="flex items-center w-full px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition font-bold uppercase tracking-widest">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                scrolled || !isHome 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-gray-100'
              }`}>
                Sign In
              </Link>
            )}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${
              scrolled || !isHome ? 'text-black' : 'text-white'
            }`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-8 flex flex-col space-y-6 animate-in slide-in-from-right">
          <Link to="/products" className="text-2xl font-black text-black luxury-font" onClick={() => setIsMenuOpen(false)}>Collections</Link>
          <div className="space-y-2 pl-4">
             {BRANDS.slice(0, 4).map(brand => (
               <Link key={brand} to={`/products?brand=${brand}`} className="block text-lg font-bold text-gray-600" onClick={() => setIsMenuOpen(false)}>{brand}</Link>
             ))}
          </div>
          <Link to="/products?category=Skincare" className="text-2xl font-black text-black luxury-font" onClick={() => setIsMenuOpen(false)}>Skincare</Link>
          <hr className="border-gray-100" />
          <Link to="/cart" className="text-xl font-bold text-gray-700" onClick={() => setIsMenuOpen(false)}>Bag ({cartCount})</Link>
          {!isAuthenticated && (
            <Link to="/login" className="bg-black text-white py-4 rounded-full text-center font-black uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
