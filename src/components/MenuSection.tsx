import React, { useState } from 'react';
import { ShoppingBag, Check, Star, Coffee, Sliders, ChevronRight } from 'lucide-react';
import { Product, Language } from '../types';
import { PRODUCTS } from '../data/content';
import { translations } from '../data/translations';

interface MenuSectionProps {
  currentLang: Language;
  onAddToCart: (product: Product, selectedOptions?: Record<string, string>) => void;
  onOpenOrderFunnel: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  currentLang,
  onAddToCart,
  onOpenOrderFunnel,
}) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<'all' | 'breakfast_box' | 'savory' | 'bakery' | 'beverages'>('all');
  const [customizeProduct, setCustomizeProduct] = useState<Product | null>(null);
  const [selectedOptionChoice, setSelectedOptionChoice] = useState<Record<string, string>>({});

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleCustomizedAdd = (p: Product) => {
    onAddToCart(p, selectedOptionChoice);
    setCustomizeProduct(null);
    onOpenOrderFunnel();
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-stone-950 text-stone-100 scroll-mt-12 border-b border-amber-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            <Coffee className="w-3.5 h-3.5" />
            <span>REAL LISBON MENUS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50">
            {t.menuTitle}
          </h2>

          <p className="text-stone-400 text-base sm:text-lg">
            {t.menuSubtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {t.catAll || 'All Products'}
            </button>
            <button
              onClick={() => setActiveCategory('breakfast_box')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === 'breakfast_box'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {t.catMenus || 'Menus'}
            </button>
            <button
              onClick={() => setActiveCategory('savory')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === 'savory'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {t.catSavory || 'Salgados'}
            </button>
            <button
              onClick={() => setActiveCategory('bakery')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === 'bakery'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {t.catBakery || 'Pastelaria'}
            </button>
            <button
              onClick={() => setActiveCategory('beverages')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === 'beverages'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {t.catBeverages || 'Bebidas'}
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.map((product) => {
            const productName = product.name[currentLang] || product.name.en;
            const productDesc = product.description[currentLang] || product.description.en;
            const itemsList = product.itemsIncluded[currentLang] || product.itemsIncluded.en;

            return (
              <div
                key={product.id}
                className={`relative flex flex-col rounded-2xl bg-stone-900 border transition-all duration-300 overflow-hidden ${
                  product.isBestseller
                    ? 'border-amber-400/80 shadow-2xl shadow-amber-950/50 ring-1 ring-amber-400/50'
                    : 'border-stone-800/80 hover:border-amber-900/50 shadow-lg'
                }`}
              >
                {/* Image & Badges Header */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                  <img
                    src={product.imageUrl}
                    alt={productName}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />

                  {/* Bestseller Badge */}
                  {product.isBestseller && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Star className="w-3.5 h-3.5 fill-stone-950" />
                      <span>{t.bestsellerBadge}</span>
                    </div>
                  )}

                  {/* Servings Tag */}
                  <div className="absolute top-3 right-3 bg-stone-900/90 text-stone-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-700/80">
                    {t.servingsFor}: {product.servings}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-stone-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/30 text-amber-400 font-extrabold text-xl">
                    €{product.price.toFixed(2)}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-amber-50 leading-snug">
                      {productName}
                    </h3>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                      {productDesc}
                    </p>

                    {/* Included Items List */}
                    <div className="pt-2 border-t border-stone-800/80">
                      <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                        {t.whatsInside}
                      </p>
                      <ul className="space-y-1.5 text-xs text-stone-300">
                        {itemsList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-stone-800 flex items-center gap-2">
                    {product.options && product.options.length > 0 ? (
                      <button
                        onClick={() => {
                          setCustomizeProduct(product);
                          // initialize default choice
                          const defaults: Record<string, string> = {};
                          product.options?.forEach((opt) => {
                            defaults[opt.id] = opt.choices[0].id;
                          });
                          setSelectedOptionChoice(defaults);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-bold border border-amber-500/30 transition-colors cursor-pointer"
                      >
                        <Sliders className="w-4 h-4 text-amber-400" />
                        <span>{t.customize} & Order</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          onAddToCart(product);
                          onOpenOrderFunnel();
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-extrabold shadow-md transform active:scale-95 transition-all cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4 text-stone-950" />
                        <span>{t.addToTray}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenOrderFunnel}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm underline underline-offset-4 cursor-pointer"
          >
            <span>{t.viewAllProducts}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Option Customization Modal */}
      {customizeProduct && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between border-b border-stone-800 pb-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-amber-50">
                  {customizeProduct.name[currentLang] || customizeProduct.name.en}
                </h3>
                <p className="text-xs text-amber-400 font-bold">€{customizeProduct.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => setCustomizeProduct(null)}
                className="text-stone-400 hover:text-stone-100 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Options List */}
            {customizeProduct.options?.map((opt) => (
              <div key={opt.id} className="space-y-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                  {opt.name[currentLang] || opt.name.en}
                </label>
                <div className="space-y-2">
                  {opt.choices.map((choice) => (
                    <label
                      key={choice.id}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium cursor-pointer transition-colors ${
                        selectedOptionChoice[opt.id] === choice.id
                          ? 'border-amber-400 bg-amber-500/10 text-amber-200'
                          : 'border-stone-800 bg-stone-800/50 text-stone-300 hover:bg-stone-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={opt.id}
                          checked={selectedOptionChoice[opt.id] === choice.id}
                          onChange={() =>
                            setSelectedOptionChoice((prev) => ({
                              ...prev,
                              [opt.id]: choice.id,
                            }))
                          }
                          className="accent-amber-500"
                        />
                        <span>{choice.label[currentLang] || choice.label.en}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => handleCustomizedAdd(customizeProduct)}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm shadow-lg cursor-pointer"
            >
              Add to Order & Proceed
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
