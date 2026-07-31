import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface StickyMobileCTAProps {
  currentLang: Language;
  onOpenOrderFunnel: () => void;
  cartCount: number;
  totalPrice: number;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  currentLang,
  onOpenOrderFunnel,
  cartCount,
  totalPrice,
}) => {
  const t = translations[currentLang];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-stone-900/95 backdrop-blur-lg border-t border-amber-500/30 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
      <button
        onClick={onOpenOrderFunnel}
        className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 font-extrabold text-sm sm:text-base flex items-center justify-between shadow-xl active:scale-95 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-stone-950 text-amber-400 text-xs flex items-center justify-center font-black">
            {cartCount > 0 ? cartCount : <ShoppingBag className="w-3.5 h-3.5" />}
          </div>
          <span>{cartCount > 0 ? t.myOrder : t.orderNow}</span>
        </div>

        <div className="flex items-center gap-2">
          {totalPrice > 0 && (
            <span className="font-mono text-stone-950 font-black">
              €{totalPrice.toFixed(2)}
            </span>
          )}
          <ArrowRight className="w-4 h-4 text-stone-950" />
        </div>
      </button>
    </div>
  );
};
