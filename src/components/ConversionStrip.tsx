import React from 'react';
import { Coffee, MapPin, Clock, CreditCard } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ConversionStripProps {
  currentLang: Language;
}

export const ConversionStrip: React.FC<ConversionStripProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="bg-amber-500 text-stone-950 py-4 px-4 sm:px-6 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold">
        <div className="hidden lg:block uppercase tracking-wider text-stone-900 font-extrabold text-xs">
          {t.stripTitle}
        </div>
        
        <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between text-stone-950">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-stone-900 shrink-0" />
            <span>{t.strip1}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-stone-900 shrink-0" />
            <span>{t.strip2}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-stone-900 shrink-0" />
            <span>{t.strip3}</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-stone-900 shrink-0" />
            <span>{t.strip4}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
