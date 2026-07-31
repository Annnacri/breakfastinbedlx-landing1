import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface UrgencyCountdownProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
}

export const UrgencyCountdown: React.FC<UrgencyCountdownProps> = ({ currentLang, onOpenOrderFunnel }) => {
  const t = translations[currentLang];
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(23, 0, 0, 0); // 23:00 cut-off

      if (now > cutoff) {
        // If past 23:00, target next day's 23:00
        cutoff.setDate(cutoff.getDate() + 1);
      }

      const diff = cutoff.getTime() - now.getTime();
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-amber-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
          <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>ORDER DEADLINE</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50">
          {t.urgencyTitle}
        </h2>

        <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {t.urgencyText}
        </p>

        {/* Live Countdown Box */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-stone-950 border border-amber-500/40 shadow-2xl space-y-3">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.timeRemaining}</span>
          </p>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400 block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-stone-400 uppercase font-bold">{t.hours}</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400 block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-stone-400 uppercase font-bold">{t.minutes}</span>
            </div>
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400 block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-stone-400 uppercase font-bold">{t.seconds}</span>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={onOpenOrderFunnel}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base shadow-xl active:scale-95 transition-all cursor-pointer"
          >
            <span>{t.bookMyBreakfast}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
