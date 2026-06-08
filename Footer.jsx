import React from 'react';
import { Sparkles, Smartphone } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About us", href: "#why-choose-us" },
      { label: "Terms & conditions", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Anti-discrimination policy", href: "#" },
      { label: "Careers", href: "#" }
    ],
    customers: [
      { label: "Aara reviews", href: "#reviews" },
      { label: "Categories near you", href: "#services" },
      { label: "Contact us", href: "#" }
    ],
    professionals: [
      { label: "Register as a professional", href: "#" }
    ]
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-850 pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Columns (Inspired by Screenshot 3 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200/50 dark:border-slate-850">
          
          {/* Logo & Brand description */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-400 flex items-center justify-center shadow-md">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Aara <span className="text-brand-600 dark:text-brand-400">Services</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed font-body">
              Certified, vetted, and satisfaction-guaranteed doorstep services. Elevating home services through training, tech, and trust.
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-brand-600 dark:hover:text-brand-400 hover:underline transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Customers Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              For customers
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.customers.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-brand-600 dark:hover:text-brand-400 hover:underline transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              For professionals
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.professionals.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs hover:text-brand-600 dark:hover:text-brand-400 hover:underline transition-colors font-body font-semibold text-brand-600 dark:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Download Column (Matches Screenshot 3 right side) */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Social links
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-605 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-605 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-605 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-650 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* App Downloads Box */}
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <div className="text-left">
                  <span className="text-[8px] text-slate-400 dark:text-slate-500 uppercase block leading-none">Download on the</span>
                  <span className="text-[10px] font-bold text-slate-800 dark:text-white leading-none">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <div className="text-left">
                  <span className="text-[8px] text-slate-400 dark:text-slate-500 uppercase block leading-none">Get it on</span>
                  <span className="text-[10px] font-bold text-slate-800 dark:text-white leading-none">Google Play</span>
                </div>
              </a>
            </div>

          </div>

        </div>

        {/* Footer Meta & Copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-400 dark:text-slate-500 font-body">
          <p className="text-center sm:text-left">
            * Milestone statistics and availability are estimated for {currentYear}.
          </p>
          <p className="text-center sm:text-right">
            © Copyright {currentYear} Aara Services Private Limited. All rights reserved. 
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
