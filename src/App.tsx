import React, { useState } from 'react';
import { Language, CartItem, Product } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConversionStrip } from './components/ConversionStrip';
import { EmotionalSection } from './components/EmotionalSection';
import { MenuSection } from './components/MenuSection';
import { HowItWorks } from './components/HowItWorks';
import { DeliverySection } from './components/DeliverySection';
import { WhyUs } from './components/WhyUs';
import { SocialProof } from './components/SocialProof';
import { HotelAirbnbSection } from './components/HotelAirbnbSection';
import { UrgencyCountdown } from './components/UrgencyCountdown';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { PRODUCTS } from './data/content';
import { trackEvent } from './utils/analytics';
import { redirectToExistingSystem } from './utils/navigation';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  
  // Cart items maintained for UI counters
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Lisbon Classic Bestseller
      quantity: 1,
    },
  ]);

  // Cart operations & immediate redirect to real ordering system
  const handleAddToCart = (product: Product, selectedOptions?: Record<string, string>) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, selectedOptions }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedOptions }];
    });

    trackEvent('add_to_cart', { productId: product.id, price: product.price });
    redirectToExistingSystem(product);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Direct CTA navigation to the real Breakfast in Bed LX reservation flow
  const handleOpenOrderFunnel = (product?: Product) => {
    trackEvent('begin_checkout', { cartCount: totalCartCount, totalPrice: totalCartPrice });
    redirectToExistingSystem(product);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Sticky Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
        cartCount={totalCartCount}
      />

      {/* Hero Section */}
      <Hero
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
      />

      {/* Conversion Value Strip */}
      <ConversionStrip currentLang={currentLang} />

      {/* Emotional Experience Section ("Imagine Tomorrow Morning...") */}
      <EmotionalSection
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
      />

      {/* Real Product & Menu Selection Section */}
      <MenuSection
        currentLang={currentLang}
        onAddToCart={handleAddToCart}
        onOpenOrderFunnel={handleOpenOrderFunnel}
      />

      {/* How It Works (3 Easy Steps) */}
      <HowItWorks currentLang={currentLang} />

      {/* Delivery Section & Address Checker */}
      <DeliverySection
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
      />

      {/* Why Choose Us */}
      <WhyUs currentLang={currentLang} />

      {/* Verified Guest Reviews */}
      <SocialProof currentLang={currentLang} />

      {/* Staying in Lisbon (Hotel/Airbnb) Targeted Callout */}
      <HotelAirbnbSection
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
      />

      {/* 23:00 Cut-off Urgency Countdown */}
      <UrgencyCountdown
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
      />

      {/* FAQ Accordion */}
      <FAQSection currentLang={currentLang} />

      {/* Final Conversion CTA */}
      <FinalCTA
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Sticky Floating Mobile CTA */}
      <StickyMobileCTA
        currentLang={currentLang}
        onOpenOrderFunnel={() => handleOpenOrderFunnel()}
        cartCount={totalCartCount}
        totalPrice={totalCartPrice}
      />

    </div>
  );
}
