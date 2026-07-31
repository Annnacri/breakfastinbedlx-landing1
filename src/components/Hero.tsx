import React from 'react';
import { Clock, ShieldCheck, Sparkles, MapPin, ArrowRight, Utensils } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenOrderFunnel }) => {
  const t = translations[currentLang];

  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden pt-8 pb-16 lg:py-24 border-b border-amber-950/40">
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Location & Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-50 leading-[1.15]">
              {t.heroHeadingLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                {t.heroHeadingLine2}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
              {t.heroSubhead}
            </p>

            {/* Emotional Tagline Banner */}
            <div className="w-full sm:w-auto p-4 rounded-xl bg-stone-800/80 border border-amber-900/30 backdrop-blur-sm flex items-center gap-3 text-stone-200 text-sm font-medium">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-amber-100 italic font-serif text-sm sm:text-base">
                "{t.emotionalHook}"
              </p>
            </div>

            {/* Order Deadline & Time Window Callout */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-300 bg-amber-950/40 border border-amber-500/20 px-4 py-2.5 rounded-lg">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{t.orderDeadlineNotice}</span>
              </div>
              <span className="text-stone-500 hidden sm:inline">•</span>
              <div className="text-stone-300">
                Delivery: <span className="font-semibold text-stone-100">{t.deliveryHours}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenOrderFunnel}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-base sm:text-lg shadow-xl shadow-amber-900/40 hover:shadow-amber-500/20 transform active:scale-95 transition-all cursor-pointer"
              >
                <span>{t.orderMyBreakfast}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-base border border-stone-700/80 transition-colors"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>{t.seeMenus}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-stone-800/80 w-full grid grid-cols-3 gap-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-stone-300">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">✓</div>
                <span>{t.trustFresh}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-stone-300">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">✓</div>
                <span>{t.trustDoor}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-stone-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.trustSecure}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30 group">
              <img
                src={HERO_IMAGE}
                alt="Gourmet Lisbon Breakfast Tray in Bed"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 backdrop-blur-md p-3.5 rounded-xl border border-amber-500/30 flex items-center justify-between text-stone-100 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                    🥐
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-200">Freshly Baked at 06:00 AM</p>
                    <p className="text-[11px] text-stone-400">Pastéis de Nata & Artisanal Breads</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Morning Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
