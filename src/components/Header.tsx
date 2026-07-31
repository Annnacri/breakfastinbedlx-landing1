import React, { useState } from 'react';
import { ShoppingBag, Globe, Coffee, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenOrderFunnel: () => void;
  cartCount: number;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenOrderFunnel,
  cartCount,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[currentLang];

  const activeLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-900/95 backdrop-blur-md border-b border-amber-900/20 text-stone-100 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-900 font-bold shadow-md transform group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5 text-stone-950" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-amber-50 group-hover:text-amber-300 transition-colors">
              BREAKFAST IN BED <span className="text-amber-400 font-sans font-extrabold text-sm ml-0.5">LX</span>
            </span>
            <span className="text-[10px] text-amber-200/70 tracking-widest uppercase hidden sm:inline">
              LISBON DELIVERIES
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors">
            {t.menuNav}
          </a>
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
            {t.howItWorksNav}
          </a>
          <a href="#delivery" className="hover:text-amber-400 transition-colors">
            {t.deliveryNav}
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            {t.faqNav}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-800 text-stone-200 text-xs font-medium border border-stone-700/60 transition-colors"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeLang.flag}</span>
              <span className="hidden sm:inline uppercase">{activeLang.code}</span>
              <ChevronDown className="w-3 h-3 text-stone-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-stone-800 border border-stone-700 shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                      currentLang === lang.code
                        ? 'bg-amber-500/20 text-amber-300 font-semibold'
                        : 'text-stone-300 hover:bg-stone-700/50'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart / Order CTA Button */}
          <button
            onClick={onOpenOrderFunnel}
            className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-900/30 transform active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-stone-950" />
            <span>{t.orderNow}</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-stone-950 text-amber-400 text-xs flex items-center justify-center font-extrabold shadow ml-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
