import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Menu, X, Sun, Moon, User, ChevronDown } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Mumbai, IND');
  const [showLocations, setShowLocations] = useState(false);

  const locations = [
    'Mumbai, IND',
    'Delhi NCR, IND',
    'Bengaluru, IND',
    'Chennai, IND',
    'Hyderabad, IND',
    'Pune, IND'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-400 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-brand-700 dark:from-white dark:to-brand-200 bg-clip-text text-transparent">
                Aara <span className="text-brand-600 dark:text-brand-400">Services</span>
              </span>
            </a>
          </div>

          {/* Center search / Location (inspired by Urban Company search header) */}
          <div className="hidden md:flex items-center gap-4 bg-slate-100 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-750 rounded-full py-1.5 pl-4 pr-2 text-sm text-slate-700 dark:text-slate-350 transition-colors">
            {/* Location selector */}
            <div className="relative">
              <button
                onClick={() => setShowLocations(!showLocations)}
                className="flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 font-medium focus:outline-none cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>{selectedLocation}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {showLocations && (
                <div className="absolute left-0 mt-3 w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-750 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocations(false);
                      }}
                      className="w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm cursor-pointer"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-slate-650 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">Home</a>
            <a href="#services" className="text-slate-650 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">Services</a>
            <a href="#offers" className="text-slate-650 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">Offers</a>
            <a href="#why-choose-us" className="text-slate-650 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">About</a>
            <a href="#reviews" className="text-slate-650 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors text-sm">Reviews</a>
          </div>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Login button */}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Small theme toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50 shadow-2xl py-6 px-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
            >
              Services
            </a>
            <a
              href="#offers"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
            >
              Offers
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
            >
              About
            </a>
            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
            >
              Reviews
            </a>

            {/* Mobile Location Selector */}
            <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-850 mt-2">
              <span className="text-xs text-slate-400 block mb-2">Location</span>
              <div className="grid grid-cols-2 gap-2">
                {locations.slice(0, 4).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsOpen(false);
                    }}
                    className={`text-xs py-2 px-3 rounded-lg text-center font-medium border ${
                      selectedLocation === loc
                        ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400'
                        : 'border-slate-200 dark:border-slate-850 text-slate-650 dark:text-slate-450'
                    }`}
                  >
                    {loc.split(',')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium shadow-lg shadow-brand-500/10">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
