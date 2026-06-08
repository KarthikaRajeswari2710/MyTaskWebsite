import React from 'react';
import { Star, MessageSquare, Quote } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, IND",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Absolutely outstanding experience! I booked the Salon at Home and the therapist was incredibly professional, hygienic, and did a phenomenal job. The pricing was transparent and fair. Aara has completely changed how I manage my wellness routines.",
      serviceBooked: "Salon for Women"
    },
    {
      name: "Rohan Patel",
      location: "Bengaluru, IND",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "My AC had been leaking for weeks and local mechanics couldn't fix it permanently. Booked Aara's certified AC technician. He arrived in under 2 hours, diagnosed the core issue immediately, and fixed it perfectly. Excellent service!",
      serviceBooked: "AC Service & Repair"
    },
    {
      name: "Anjali Mehta",
      location: "Delhi NCR, IND",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "I hired the deep sofa cleaning service and was stunned by the results. The team arrived on time with heavy-duty machines. Every stain was removed, and they finished exactly when promised. Highly recommend this professional platform!",
      serviceBooked: "Sofa Deep Cleaning"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Loved by <span className="text-brand-600 dark:text-brand-400">Thousands</span> of Customers
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-brand-600 to-accent-500 rounded-full mx-auto" />
          <p className="text-base text-slate-600 dark:text-slate-400 font-body">
            Don't just take our word for it. Read verified feedback from our happy local clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl border border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-100/50 dark:shadow-black/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>

              {/* Top part: Stars and Content */}
              <div className="space-y-4 relative z-10">
                <div className="flex gap-0.5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-body italic">
                  "{test.review}"
                </p>
              </div>

              {/* Bottom part: User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-850 mt-8 relative z-10">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-100 dark:border-slate-800"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span>{test.location}</span>
                    <span>•</span>
                    <span className="text-brand-600 dark:text-brand-400 font-semibold">{test.serviceBooked}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
