import React from 'react';
import { ArrowRight, Hotel, Home, Building2, KeyRound } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HotelAirbnbSectionProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
}

export const HotelAirbnbSection: React.FC<HotelAirbnbSectionProps> = ({ currentLang, onOpenOrderFunnel }) => {
  const t = translations[currentLang];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 text-stone-100 border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900/80 rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-50">
              {t.stayingHeading}
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {t.stayingText}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-semibold text-amber-200">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700">
                <Hotel className="w-4 h-4 text-amber-400" />
                Hotel
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700">
                <Home className="w-4 h-4 text-amber-400" />
                Apartment
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700">
                <KeyRound className="w-4 h-4 text-amber-400" />
                Airbnb
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700">
                <Building2 className="w-4 h-4 text-amber-400" />
                Guesthouse
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenOrderFunnel}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base sm:text-lg shadow-xl active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{t.orderForTomorrow}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
