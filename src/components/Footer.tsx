import React from 'react';
import { Coffee, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-amber-950/40 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
                <Coffee className="w-4 h-4 text-stone-950" />
              </div>
              <span className="font-serif text-lg font-bold text-amber-50">
                Breakfast in Bed LX
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Lisbon, Portugal</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-amber-100 font-bold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">{t.menuNav}</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">{t.howItWorksNav}</a></li>
              <li><a href="#delivery" className="hover:text-amber-400 transition-colors">{t.deliveryNav}</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">{t.faqNav}</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="font-serif text-amber-100 font-bold text-sm uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@breakfastinbedlx.com</span>
              </li>
              <li className="text-stone-400 text-xs pt-1">
                Order Window: Daily until 23:00<br />
                Delivery Hours: 08:30 – 13:30
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-3">
            <h4 className="font-serif text-amber-100 font-bold text-sm uppercase tracking-wider">
              Connect & Legal
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400 pt-2">
              <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-amber-400">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>© {new Date().getFullYear()} Breakfast in Bed LX. All rights reserved.</p>
          <p className="text-[11px] text-stone-400">
            Official website: <a href="https://breakfastinbedlx.com/" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">www.breakfastinbedlx.com</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
