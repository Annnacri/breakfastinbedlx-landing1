import React from 'react';
import { ShoppingBag, Calendar, Sun, Coffee } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const steps = [
    {
      num: t.step1Title,
      icon: ShoppingBag,
      desc: t.step1Desc,
    },
    {
      num: t.step2Title,
      icon: Calendar,
      desc: t.step2Desc,
    },
    {
      num: t.step3Title,
      icon: Sun,
      desc: t.step3Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-amber-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            <Coffee className="w-3.5 h-3.5" />
            <span>EFFORTLESS PROCESS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50">
            {t.howHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-2xl bg-stone-950 border border-amber-900/30 hover:border-amber-500/50 shadow-xl flex flex-col items-center text-center space-y-4 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300 shadow-inner">
                  <Icon className="w-8 h-8" />
                </div>

                <span className="font-serif text-lg font-bold text-amber-300 tracking-wider">
                  {step.num}
                </span>

                <p className="text-stone-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
