import React from 'react';
import { Award, UserCheck, CheckCircle2, LayoutGrid } from 'lucide-react';

const Stats = () => {
  const statsData = [
    {
      icon: UserCheck,
      value: "1M+",
      label: "Happy Customers",
      description: "Across major metropolitan cities",
      color: "from-brand-600 to-indigo-500",
      glow: "shadow-brand-500/10"
    },
    {
      icon: CheckCircle2,
      value: "2.5M+",
      label: "Services Delivered",
      description: "Safe & satisfaction-guaranteed jobs",
      color: "from-emerald-500 to-teal-400",
      glow: "shadow-emerald-500/10"
    },
    {
      icon: Award,
      value: "15k+",
      label: "Verified Professionals",
      description: "Vetted and trained expert partners",
      color: "from-amber-500 to-orange-400",
      glow: "shadow-amber-500/10"
    },
    {
      icon: LayoutGrid,
      value: "50+",
      label: "Home Services Offered",
      description: "Everything from beauty to repairs",
      color: "from-purple-600 to-pink-500",
      glow: "shadow-purple-500/10"
    }
  ];

  return (
    <section className="relative py-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background soft circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`relative overflow-hidden p-6 sm:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/50 shadow-lg ${stat.glow} flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300`}
              >
                {/* Visual Accent Corner */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-tr from-brand-600/5 to-transparent blur-xl" />

                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-350" />
                  </div>
                </div>

                {/* Text metrics */}
                <div className="space-y-1">
                  <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold text-slate-850 dark:text-white">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-body">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
