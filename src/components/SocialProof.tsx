import React from 'react';
import { Coffee, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SocialProofProps {
  currentLang: Language;
}

export const SocialProof: React.FC<SocialProofProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const benefits = [
    {
      icon: Sparkles,
      title: t.benefit1Title || 'Freshly prepared',
      desc: t.benefit1Desc || 'Handcrafted early every morning using fresh local Portuguese ingredients.',
    },
    {
      icon: MapPin,
      title: t.benefit2Title || 'Delivered to your accommodation',
      desc: t.benefit2Desc || 'Brought directly to your hotel reception, Airbnb door, or apartment.',
    },
    {
      icon: CheckCircle2,
      title: t.benefit3Title || 'Easy online ordering',
      desc: t.benefit3Desc || 'Simple order flow with instant confirmation and no app installation needed.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-950 text-stone-100 border-b border-amber-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>HONEST & RELIABLE SERVICE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50 uppercase tracking-tight">
            {t.reviewsHeading}
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.ratingText}
          </p>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 shadow-xl flex flex-col items-center text-center space-y-4 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-xl font-bold text-amber-100">
                  {b.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

