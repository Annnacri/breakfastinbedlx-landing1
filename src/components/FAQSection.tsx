import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { FAQS } from '../data/content';
import { translations } from '../data/translations';

interface FAQSectionProps {
  currentLang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-stone-950 text-stone-100 border-b border-amber-950/30 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLEAR ANSWERS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-50">
            {t.faqHeading}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const question = faq.question[currentLang] || faq.question.en;
            const answer = faq.answer[currentLang] || faq.answer.en;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-500/50 bg-stone-900 shadow-xl'
                    : 'border-stone-800 bg-stone-900/60 hover:border-stone-700'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-amber-50 cursor-pointer"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-stone-800/80 pt-4 animate-in fade-in duration-200">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
