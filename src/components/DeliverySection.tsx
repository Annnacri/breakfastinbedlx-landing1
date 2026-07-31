import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Hotel, Home, Building2, Palmtree } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { LISBON_NEIGHBORHOODS } from '../data/content';

interface DeliverySectionProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({ currentLang, onOpenOrderFunnel }) => {
  const t = translations[currentLang];
  const [addressInput, setAddressInput] = useState('');
  const [searchDone, setSearchDone] = useState(false);

  const handleCheckAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (addressInput.trim().length > 0) {
      setSearchDone(true);
    }
  };

  return (
    <section id="delivery" className="py-16 sm:py-24 bg-stone-950 text-stone-100 border-b border-amber-950/30 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>DELIVERY ACROSS SELECT LISBON AREAS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50">
            {t.deliveryHeading}
          </h2>

          <p className="text-stone-400 text-base sm:text-lg">
            {t.deliverySub}
          </p>
        </div>

        {/* Accommodation Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 text-center flex flex-col items-center gap-3">
            <Hotel className="w-8 h-8 text-amber-400" />
            <span className="font-bold text-sm text-stone-200">{t.hotelsLabel}</span>
          </div>
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 text-center flex flex-col items-center gap-3">
            <Home className="w-8 h-8 text-amber-400" />
            <span className="font-bold text-sm text-stone-200">{t.airbnbLabel}</span>
          </div>
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 text-center flex flex-col items-center gap-3">
            <Building2 className="w-8 h-8 text-amber-400" />
            <span className="font-bold text-sm text-stone-200">{t.guesthousesLabel}</span>
          </div>
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 text-center flex flex-col items-center gap-3">
            <Palmtree className="w-8 h-8 text-amber-400" />
            <span className="font-bold text-sm text-stone-200">{t.vacationLabel}</span>
          </div>
        </div>

        {/* Interactive Delivery Address Checker */}
        <div className="max-w-2xl mx-auto bg-stone-900 p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-xl font-bold text-amber-50">
              {t.checkerTitle}
            </h3>
            <p className="text-xs text-stone-400">
              Enter your hotel or stay details to verify direct room/door delivery.
            </p>
          </div>

          <form onSubmit={handleCheckAddress} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={addressInput}
                onChange={(e) => {
                  setAddressInput(e.target.value);
                  setSearchDone(false);
                }}
                placeholder={t.checkerPlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{t.checkerBtn}</span>
            </button>
          </form>

          {searchDone && (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-emerald-300">{t.checkerSuccess}</p>
                <p className="text-emerald-200/80 mt-1">
                  You can order by 23:00 tonight to receive breakfast tomorrow during your selected time window (08:30–13:30).
                </p>
                <button
                  onClick={onOpenOrderFunnel}
                  className="mt-3 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-xs inline-block cursor-pointer"
                >
                  Order for This Location Now
                </button>
              </div>
            </div>
          )}

          {/* Supported Neighborhood Tags */}
          <div className="pt-4 border-t border-stone-800">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
              Covered Neighborhoods & Landmarks:
            </p>
            <div className="flex flex-wrap gap-2">
              {LISBON_NEIGHBORHOODS.map((hood) => (
                <span
                  key={hood}
                  className="px-2.5 py-1 rounded-md bg-stone-800 border border-stone-700/60 text-stone-300 text-xs font-medium"
                >
                  📍 {hood}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-stone-400 mt-3 italic">
              {t.checkerNote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
