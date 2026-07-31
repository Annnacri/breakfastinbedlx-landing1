import React from 'react';
import { ArrowRight, Sparkles, Sun } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BALCONY_IMAGE } from '../data/content';

interface EmotionalSectionProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
}

export const EmotionalSection: React.FC<EmotionalSectionProps> = ({ currentLang, onOpenOrderFunnel }) => {
  const t = translations[currentLang];

  return (
    <section className="py-16 sm:py-24 bg-stone-900 text-stone-100 relative overflow-hidden border-b border-amber-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20 group">
              <img
                src={BALCONY_IMAGE}
                alt="Breakfast on Lisbon balcony overlooking red roofs"
                className="w-full h-[380px] sm:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 font-extrabold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Sun className="w-3.5 h-3.5" />
                <span>Lisbon Morning Atmosphere</span>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>THE LISBON EXPERIENCE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50 leading-tight">
              {t.imagineHeading}
            </h2>

            <div className="space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed">
              <p>{t.imagineParagraph1}</p>
              <p className="font-semibold text-amber-200 text-lg sm:text-xl">
                {t.imagineParagraph2}
              </p>
              
              <div className="p-4 rounded-xl bg-stone-800/80 border-l-4 border-amber-500 text-stone-300 text-sm sm:text-base space-y-1">
                <p className="font-medium text-amber-300">{t.imagineNoQueue}</p>
                <p className="text-stone-300">{t.imagineEnjoy}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderFunnel}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-900/30 active:scale-95 transition-all cursor-pointer"
              >
                <span>{t.wantThisTomorrow}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
