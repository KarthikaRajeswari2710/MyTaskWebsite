import React, { useState } from 'react';
import { Search, MapPin, Sparkles, Star, Shield, ArrowRight } from 'lucide-react';

const Hero = ({ onSelectCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { name: 'Sofa Deep Cleaning', category: 'cleaning' },
    { name: 'AC Service & Repair', category: 'appliance' },
    { name: 'Salon for Men (Haircut & Massage)', category: 'salon_men' },
    { name: 'Salon for Women (Spa & Facial)', category: 'salon_women' },
    { name: 'Home Painting & Waterproofing', category: 'painting' },
    { name: 'Electrician & Plumber Services', category: 'utility' }
  ];

  const filteredSuggestions = suggestions.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Find matching suggestion
      const match = suggestions.find(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      if (match) {
        onSelectCategory(match.category);
      }
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (item) => {
    setSearchQuery(item.name);
    setShowSuggestions(false);
    onSelectCategory(item.category);
  };

  const quickTags = ['AC Repair', 'Sofa Cleaning', 'Mens Haircut', 'Facial', 'Painting'];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-300/10 to-accent-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-br from-brand-400/5 to-accent-400/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Search Box */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
            {/* Promo Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 text-brand-700 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Professional Doorstep Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Home services <br />
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                at your doorstep
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-650 dark:text-slate-350 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              Book expert professionals for salon, cleaning, repairs, painting, and utilities. Fully insured, vetted, and satisfaction-guaranteed services.
            </p>

            {/* Search Box Box (inspired by Urban Company search and Location picker UI) */}
            <div className="relative max-w-xl mx-auto lg:mx-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-250/20 dark:shadow-black/40 border border-slate-200/80 dark:border-slate-800 p-2">
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-2">
                {/* Location Picker (Embedded) */}
                <div className="flex items-center gap-2 w-full sm:w-auto px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800">
                  <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate w-24">Mumbai, IND</span>
                </div>

                {/* Search Input */}
                <div className="relative flex-1 w-full">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="w-4 h-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for 'AC Service', 'Sofa cleaning'..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full pl-9 pr-4 py-2 text-sm bg-transparent text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-sm font-semibold transition-all shadow-md shadow-brand-600/10 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Suggestions List */}
              {showSuggestions && searchQuery.trim() !== '' && (
                <div className="absolute left-0 right-0 mt-3 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-3 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-xs text-slate-450 dark:text-slate-500 px-4 mb-2 font-semibold uppercase">Suggested Services</p>
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleSelectSuggestion(item)}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-750 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 capitalize">{item.category.replace('_', ' ')}</span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-slate-450 dark:text-slate-500">
                      No matching services found. Try 'Salon' or 'AC'.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Suggestions Chips */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start items-center">
              <span className="text-xs font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-wider">Popular:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    setShowSuggestions(true);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-850 hover:bg-brand-50 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-350 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200/50 dark:border-slate-800 text-xs font-medium transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-150/60 dark:border-slate-850">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                  <Star className="w-5 h-5 fill-brand-500 text-brand-500" />
                  <span className="text-base font-bold text-slate-900 dark:text-white">4.8★</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Average Rating</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                  <Shield className="w-5 h-5 text-accent-500" />
                  <span className="text-base font-bold text-slate-900 dark:text-white">100%</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Insured Service</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
                  <span className="text-base font-bold text-slate-900 dark:text-white">15k+</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Vetted Experts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Collage (Inspired by Urban Company right side grid) */}
          <div className="lg:col-span-5 relative hidden md:block">
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/10 to-accent-500/10 rounded-[32px] blur-xl -z-10" />

            {/* Collage Grid */}
            <div className="grid grid-cols-12 gap-4">
              {/* Left Column of collage */}
              <div className="col-span-6 space-y-4 pt-8">
                {/* Image 1: Women's Spa */}
                <div className="relative group overflow-hidden rounded-3xl shadow-xl shadow-slate-300/20 dark:shadow-black/50 aspect-[4/5] transform hover:-translate-y-1.5 transition-all duration-500 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
                    alt="Spa Service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">Beauty & Wellness</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Therapeutic Massage</h3>
                  </div>
                </div>

                {/* Image 2: Professional AC Repair */}
                <div className="relative group overflow-hidden rounded-3xl shadow-xl shadow-slate-300/20 dark:shadow-black/50 aspect-square transform hover:-translate-y-1.5 transition-all duration-500 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80"
                    alt="AC Service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Repairs</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Appliance Maintenance</h3>
                  </div>
                </div>
              </div>

              {/* Right Column of collage */}
              <div className="col-span-6 space-y-4">
                {/* Image 3: Salon Grooming */}
                <div className="relative group overflow-hidden rounded-3xl shadow-xl shadow-slate-300/20 dark:shadow-black/50 aspect-square transform hover:-translate-y-1.5 transition-all duration-500 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80"
                    alt="Grooming"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">Salon</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Haircut & Styling</h3>
                  </div>
                </div>

                {/* Image 4: Cleaning */}
                <div className="relative group overflow-hidden rounded-3xl shadow-xl shadow-slate-300/20 dark:shadow-black/50 aspect-[4/5] transform hover:-translate-y-1.5 transition-all duration-500 border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
                    alt="Cleaning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Home Care</span>
                    <h3 className="text-sm font-semibold text-white mt-0.5">Full Deep Cleaning</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing floating emblem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700 animate-bounce duration-[2000ms]">
              <Sparkles className="w-8 h-8 text-brand-600" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
