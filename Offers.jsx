import React from 'react';
import { Sparkles, Gift, ArrowRight } from 'lucide-react';

const Offers = ({ onSelectCategory }) => {
  const offersList = [
    {
      id: 1,
      title: "Sofa deep cleaning",
      subtitle: "Starting at ₹569",
      description: "Dust-free, sanitized, and smelling brand new.",
      bgImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
      buttonText: "Book now",
      badgeColor: "bg-brand-500",
      category: "cleaning",
      gradient: "from-black/80 via-black/40 to-black/20"
    },
    {
      id: 2,
      title: "Home painting & waterproofing",
      subtitle: "Pay after 100% satisfaction",
      description: "Top-grade paints, zero mess, 5-year warranty.",
      bgImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
      buttonText: "Book now",
      badgeColor: "bg-amber-500",
      category: "painting",
      gradient: "from-black/85 via-black/50 to-transparent"
    },
    {
      id: 3,
      title: "Relax & rejuvenate at home",
      subtitle: "Professional massage for men",
      description: "Grooming & spa essentials at your command.",
      bgImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      buttonText: "Book now",
      badgeColor: "bg-emerald-600",
      category: "salon_men",
      // Distinct style: Split layout (green text box + right image) like the Urban Company screenshot!
      isSplitLayout: true
    }
  ];

  return (
    <section id="offers" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              <span>Unbeatable Value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Offers & discounts
            </h2>
            <p className="text-sm text-slate-550 dark:text-slate-400 font-body">
              Pocket-friendly packages and premium services with our exclusive discounts.
            </p>
          </div>
          
          <button
            onClick={() => onSelectCategory('cleaning')}
            className="group flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors cursor-pointer"
          >
            <span>See all offers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offersList.map((offer) => {
            if (offer.isSplitLayout) {
              return (
                /* Split Layout Card: Solid Dark Green Panel + Image Right Side */
                <div
                  key={offer.id}
                  className="relative overflow-hidden rounded-[2rem] bg-emerald-800 dark:bg-emerald-950 text-white flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-black/45 group hover:-translate-y-1.5 transition-all duration-300 border border-emerald-700/30 min-h-[300px]"
                >
                  <div className="flex h-full">
                    {/* Left half: Info */}
                    <div className="w-3/5 p-8 flex flex-col justify-between z-10">
                      <div className="space-y-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white">
                          Spa Therapy
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                          {offer.title}
                        </h3>
                        <p className="text-xs text-emerald-200 font-body">
                          {offer.subtitle}
                        </p>
                      </div>

                      <button
                        onClick={() => onSelectCategory(offer.category)}
                        className="mt-6 self-start px-6 py-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                      >
                        {offer.buttonText}
                      </button>
                    </div>

                    {/* Right half: Image */}
                    <div className="w-2/5 relative h-full">
                      <div className="absolute inset-y-0 -left-6 w-12 bg-gradient-to-r from-emerald-800 dark:from-emerald-950 to-transparent z-10" />
                      <img
                        src={offer.bgImage}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              /* Backdrop Image Card */
              <div
                key={offer.id}
                className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 flex flex-col justify-between min-h-[300px] shadow-xl shadow-slate-200/50 dark:shadow-black/45 group hover:-translate-y-1.5 transition-all duration-300 border border-white/5"
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={offer.bgImage}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${offer.gradient}`} />
                </div>

                {/* Top content */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${offer.badgeColor}`}>
                      Limited Deal
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-body">
                    {offer.subtitle}
                  </p>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 mt-6 flex items-end justify-between">
                  <p className="text-[11px] text-slate-300 font-body max-w-[150px] leading-tight">
                    {offer.description}
                  </p>
                  <button
                    onClick={() => onSelectCategory(offer.category)}
                    className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    {offer.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Offers;
