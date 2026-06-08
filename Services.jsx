import React, { useState } from 'react';
import { Sparkles, Scissors, Users, Trash2, Brush, Cpu, Wrench, X, Star, Heart, ArrowRight } from 'lucide-react';

const Services = ({ activeModalCategory, setActiveModalCategory }) => {
  const categories = [
    {
      id: 'salon_women',
      title: "Women's Salon & Spa",
      description: "Facials, manicures, pedicures, luxury massage & spa therapies.",
      icon: Scissors,
      badge: "Best Seller",
      bgGradient: "from-pink-500/10 via-rose-500/5 to-transparent",
      borderColor: "group-hover:border-pink-300 dark:group-hover:border-pink-900",
      iconColor: "text-pink-600 dark:text-pink-400",
      subServices: [
        {
          name: "Salon for Women",
          price: "₹499 onwards",
          rating: "4.87",
          reviews: "220k",
          image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Spa for Women",
          price: "₹899 onwards",
          rating: "4.91",
          reviews: "150k",
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Hair Studio for Women",
          price: "₹699 onwards",
          rating: "4.82",
          reviews: "95k",
          image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    {
      id: 'salon_men',
      title: "Men's Salon & Massage",
      description: "Haircuts, beard grooming, head massage, facial care & pedicures.",
      icon: Users,
      badge: "Trending",
      bgGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      borderColor: "group-hover:border-blue-300 dark:group-hover:border-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
      subServices: [
        {
          name: "Haircut for Men",
          price: "₹249 onwards",
          rating: "4.87",
          reviews: "480k",
          image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Haircut for Boys",
          price: "₹199 onwards",
          rating: "4.84",
          reviews: "120k",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Head, Neck & Shoulder Massage",
          price: "₹349 onwards",
          rating: "4.81",
          reviews: "320k",
          image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Brightening Lemon Pedicure",
          price: "₹449 onwards",
          rating: "4.79",
          reviews: "85k",
          image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    {
      id: 'cleaning',
      title: "Cleaning & Pest Control",
      description: "Deep home cleaning, sofa/carpet wash, kitchen & bathroom sanitization.",
      icon: Trash2,
      badge: "Top Service",
      bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      borderColor: "group-hover:border-emerald-300 dark:group-hover:border-emerald-900",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      subServices: [
        {
          name: "Sofa & Cushion Cleaning",
          price: "₹569 onwards",
          rating: "4.85",
          reviews: "280k",
          image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Bathroom Deep Cleaning",
          price: "₹399 onwards",
          rating: "4.89",
          reviews: "190k",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Kitchen Sanitization",
          price: "₹699 onwards",
          rating: "4.83",
          reviews: "110k",
          image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Full Home Deep Cleaning",
          price: "₹2,499 onwards",
          rating: "4.92",
          reviews: "350k",
          image: "https://images.unsplash.com/photo-1603712760398-5fd5543a3e97?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    {
      id: 'painting',
      title: "Painting & Waterproofing",
      description: "Premium interior/exterior painting, waterproof coatings & wall repair.",
      icon: Brush,
      badge: "Warranty Offered",
      bgGradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
      borderColor: "group-hover:border-amber-300 dark:group-hover:border-amber-900",
      iconColor: "text-amber-600 dark:text-amber-400",
      subServices: [
        {
          name: "Interior House Painting",
          price: "Free Consultation",
          rating: "4.93",
          reviews: "75k",
          image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Waterproofing & Leak Fix",
          price: "Pay after Satisfaction",
          rating: "4.86",
          reviews: "60k",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    {
      id: 'appliance',
      title: "AC & Appliance Repair",
      description: "Repair, service & installation of AC, fridge, washing machine, TV & geyser.",
      icon: Cpu,
      badge: "Super Fast",
      bgGradient: "from-purple-500/10 via-violet-500/5 to-transparent",
      borderColor: "group-hover:border-purple-300 dark:group-hover:border-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
      subServices: [
        {
          name: "AC Service & Repair",
          price: "₹399 onwards",
          rating: "4.88",
          reviews: "620k",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Washing Machine Fix",
          price: "₹299 onwards",
          rating: "4.81",
          reviews: "150k",
          image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Refrigerator Service",
          price: "₹299 onwards",
          rating: "4.84",
          reviews: "135k",
          image: "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    {
      id: 'utility',
      title: "Electrician, Plumber & Carpenter",
      description: "Professional repairs for switches, wiring, pipes, taps, furniture & doors.",
      icon: Wrench,
      badge: "Standard Rates",
      bgGradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
      borderColor: "group-hover:border-cyan-300 dark:group-hover:border-cyan-900",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      subServices: [
        {
          name: "Electrical Repair & Wiring",
          price: "₹99 onwards",
          rating: "4.88",
          reviews: "820k",
          image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Plumbing Service & Fix",
          price: "₹99 onwards",
          rating: "4.85",
          reviews: "780k",
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Carpentry & Door Repairs",
          price: "₹149 onwards",
          rating: "4.83",
          reviews: "450k",
          image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=300&q=80"
        }
      ]
    }
  ];

  // Currently opened category modal details
  const activeCategory = categories.find((cat) => cat.id === activeModalCategory);

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Discover Our <span className="text-brand-600 dark:text-brand-400">Popular Services</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-accent-500 rounded-full mx-auto" />
          <p className="text-base text-slate-600 dark:text-slate-400 font-body">
            Get top-tier home services. Click on any category card to view full service details, individual charges, and verified ratings.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveModalCategory(cat.id)}
                className={`group relative rounded-3xl p-8 border border-slate-150 dark:border-slate-850 bg-white dark:bg-slate-900 hover:shadow-2xl hover:shadow-brand-500/5 dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden ${cat.borderColor}`}
              >
                {/* Background soft color glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} -z-10 opacity-70`} />

                {/* Floating badge */}
                {cat.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 px-3 py-1 rounded-full border border-brand-100 dark:border-brand-900/50">
                    {cat.badge}
                  </span>
                )}

                {/* Icon wrapper */}
                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${cat.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-body mb-6">
                  {cat.description}
                </p>

                {/* Footer link */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 mt-auto">
                  <span>View Sub-Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Modal Overlay (inspired by Screenshot 5) */}
        {activeCategory && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setActiveModalCategory(null)}
            />

            {/* Modal Body */}
            <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800/80 animate-in zoom-in-95 duration-200 z-10 max-h-[85vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-body">
                    Choose from our highly-rated sub-services below.
                  </p>
                </div>
                
                <button
                  onClick={() => setActiveModalCategory(null)}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-450 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content - List of Sub Services */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                {activeCategory.subServices.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-6 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-400 dark:hover:border-brand-800 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Subservice Image */}
                    <div className="w-full sm:w-28 sm:h-28 h-40 rounded-xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-850">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Subservice Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-slate-900 dark:text-white">
                            {sub.name}
                          </h4>
                          {/* Rating and Reviews count */}
                          <div className="flex items-center gap-1 text-amber-500 shrink-0">
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-350">{sub.rating}</span>
                            <span className="text-[10px] text-slate-400 font-medium">({sub.reviews} reviews)</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-body leading-relaxed">
                          Top-tier tools, hygiene products & certified techniques. Booking takes under 2 minutes.
                        </p>
                      </div>

                      {/* Pricing & Mock Action */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-850">
                        <div>
                          <span className="text-xs text-slate-400 dark:text-slate-500 block">Pricing Starts From</span>
                          <span className="text-base font-extrabold text-slate-900 dark:text-white">{sub.price}</span>
                        </div>

                        <button
                          onClick={() => {
                            alert(`Mock Booking Process initialized for: ${sub.name}. This is a frontend demo only.`);
                            setActiveModalCategory(null);
                          }}
                          className="px-4 py-2 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-600 dark:hover:bg-brand-500 dark:hover:text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 text-center flex items-center justify-between text-xs text-slate-550 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>Loved by 10,000+ local families</span>
                </span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">Aara Satisfaction Vow</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;
