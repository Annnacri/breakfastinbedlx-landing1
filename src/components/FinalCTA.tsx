import React from 'react';
import { ArrowRight, Coffee, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FinalCTAProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentLang, onOpenOrderFunnel }) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 sm:py-28 bg-stone-900 text-stone-100 relative overflow-hidden border-b border-amber-950/40">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-stone-900 to-stone-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl">
          <Coffee className="w-8 h-8" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-amber-50 leading-tight">
          {t.finalHeading}
        </h2>

        <p className="text-stone-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-serif italic">
          "{t.finalSub}"
        </p>

        <div className="pt-4 flex flex-col items-center gap-3">
          <button
            onClick={onOpenOrderFunnel}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-lg shadow-2xl shadow-amber-900/50 transform active:scale-95 transition-all cursor-pointer"
          >
            <span>{t.orderMyBreakfast}</span>
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-xs text-amber-300/80 font-medium flex items-center gap-1.5 pt-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{t.orderDeadlineNotice}</span>
          </p>
        </div>

      </div>
    </section>
  );
};
