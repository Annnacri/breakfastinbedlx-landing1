import React from 'react';
import { Award, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyUsProps {
  currentLang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const benefits = [
    {
      icon: Award,
      title: t.why1Title,
      desc: t.why1Desc,
    },
    {
      icon: Clock,
      title: t.why2Title,
      desc: t.why2Desc,
    },
    {
      icon: HeartHandshake,
      title: t.why3Title,
      desc: t.why3Desc,
    },
    {
      icon: ShieldCheck,
      title: t.why4Title,
      desc: t.why4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-amber-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50">
            {t.whyHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 space-y-4 text-center md:text-left flex flex-col items-center md:items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-amber-100">
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
