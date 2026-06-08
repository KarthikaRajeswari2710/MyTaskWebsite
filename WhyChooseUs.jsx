import React from 'react';
import { ShieldCheck, CreditCard, CalendarCheck, PhoneCall, Check } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      description: "Every service partner is strictly background-verified, skill-tested, and trained by industry experts.",
      iconColor: "text-brand-600 dark:text-brand-400",
      bgColor: "bg-brand-50/50 dark:bg-brand-950/20"
    },
    {
      icon: CreditCard,
      title: "Affordable Pricing",
      description: "Transparent, upfront pricing with zero hidden charges. Pay online or after the service finishes.",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50/50 dark:bg-emerald-950/20"
    },
    {
      icon: CalendarCheck,
      title: "Easy Booking",
      description: "Book services in under 60 seconds. Select a convenient time slot that fits your busy schedule.",
      iconColor: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50/50 dark:bg-amber-950/20"
    },
    {
      icon: PhoneCall,
      title: "24/7 Support",
      description: "Got questions? Our customer care specialists are available 24/7 to resolve issues instantly.",
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50/50 dark:bg-purple-950/20"
    }
  ];

  const highlights = [
    "100% Satisfaction Insurance Cover",
    "Eco-friendly & Safe Grooming Products",
    "Zero-Contact & Hygienic Procedures",
    "Re-work Guarantee within 7 Days"
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text and bullet points */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              The Aara Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              A premium home service experience like no other
            </h2>
            <p className="text-base text-slate-605 dark:text-slate-400 font-body leading-relaxed">
              We stand for reliability, quality, and complete transparency. From booking to execution, Aara Services takes the stress out of managing home chores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center border border-emerald-250 dark:border-emerald-900">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-450" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-350">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl border border-slate-150 dark:border-slate-850 hover:border-brand-200 dark:hover:border-slate-750 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 transform hover:-translate-y-1 text-center sm:text-left"
                >
                  <div className={`w-12 h-12 rounded-xl ${feat.bgColor} flex items-center justify-center mb-5 mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed font-body">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
