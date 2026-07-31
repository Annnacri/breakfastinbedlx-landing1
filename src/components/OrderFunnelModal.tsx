import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  ShieldCheck,
  Hotel,
  Home,
  Building2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Coffee,
  CheckCircle2
} from 'lucide-react';
import { CartItem, Language, AccommodationType, Order } from '../types';
import { PRODUCTS } from '../data/content';
import { translations } from '../data/translations';
import { trackEvent } from '../utils/analytics';

interface OrderFunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onAddItem: (product: typeof PRODUCTS[0]) => void;
  onCompleteOrder: (order: Order) => void;
}

const TIME_SLOTS = [
  '08:30 – 09:30',
  '09:30 – 10:30',
  '10:30 – 11:30',
  '11:30 – 12:30',
  '12:30 – 13:30',
];

export const OrderFunnelModal: React.FC<OrderFunnelModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onAddItem,
  onCompleteOrder,
}) => {
  const t = translations[currentLang];
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const tomorrowStr = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  })();

  const [deliveryDate, setDeliveryDate] = useState(tomorrowStr);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[1]); // default 09:30 - 10:30
  const [accommodationType, setAccommodationType] = useState<AccommodationType>('hotel');
  const [accommodationName, setAccommodationName] = useState('');
  const [address, setAddress] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mbway' | 'apple_pay'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [mbwayPhone, setMbwayPhone] = useState('');
  const [tipOption, setTipOption] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  // Calculation
  const subtotal = cartItems.reduce((acc, item) => {
    let price = item.product.price;
    return acc + price * item.quantity;
  }, 0);

  const deliveryFee = subtotal > 0 ? 0.00 : 0.00; // Free Lisbon delivery
  const total = subtotal + deliveryFee + tipOption;

  const handleNextToStep2 = () => {
    if (cartItems.length === 0) {
      setFormError('Please add at least one breakfast item to your order.');
      return;
    }
    setFormError(null);
    setCurrentStep(2);
    trackEvent('checkout_step_2_date_selected', { cartCount: cartItems.length, subtotal });
  };

  const handleNextToStep3 = () => {
    if (!deliveryDate || !timeSlot) {
      setFormError('Please select both a delivery date and a time slot.');
      return;
    }
    setFormError(null);
    setCurrentStep(3);
    trackEvent('checkout_step_3_address_entered', { deliveryDate, timeSlot });
  };

  const handleNextToStep4 = () => {
    if (!recipientName.trim() || !recipientEmail.trim() || !recipientPhone.trim() || !address.trim()) {
      setFormError('Please fill in all required contact and delivery address fields.');
      return;
    }
    setFormError(null);
    setCurrentStep(4);
    trackEvent('checkout_step_4_payment_review', { recipientName, address });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'card') {
      if (cardNumber.length < 15 || !cardExp || !cardCvc) {
        setFormError('Please enter valid credit card details.');
        return;
      }
    } else if (paymentMethod === 'mbway') {
      if (!mbwayPhone || mbwayPhone.length < 9) {
        setFormError('Please enter a valid Portuguese MB WAY mobile number (+351...).');
        return;
      }
    }

    setFormError(null);
    setIsSubmitting(true);

    // Simulate fast server payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder: Order = {
        id: `LX-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toISOString(),
        items: cartItems,
        deliveryDetails: {
          date: deliveryDate,
          timeSlot,
          accommodationType,
          accommodationName,
          address,
          roomNumber,
          deliveryInstructions,
          recipientName,
          recipientEmail,
          recipientPhone,
        },
        subtotal,
        deliveryFee,
        tipAmount: tipOption,
        total,
        paymentMethod,
        status: 'confirmed',
      };

      trackEvent('purchase_completed', {
        orderId: generatedOrder.id,
        total: generatedOrder.total,
        itemCount: cartItems.length,
      });

      onCompleteOrder(generatedOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-stone-900 border border-amber-500/30 rounded-3xl max-w-2xl w-full text-stone-100 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-stone-950 px-6 py-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Coffee className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-lg text-amber-50">
              Breakfast Delivery Order
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-100 flex items-center justify-center text-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Progress Bar */}
        <div className="bg-stone-950/60 px-6 py-3 border-b border-stone-800/80">
          <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold">
            <div className={`py-1.5 rounded-lg border transition-colors ${currentStep === 1 ? 'bg-amber-500 text-stone-950 border-amber-400' : currentStep > 1 ? 'bg-stone-800 text-amber-300 border-amber-500/40' : 'bg-stone-900 text-stone-300 border-stone-800'}`}>
              {t.stepBreakfast}
            </div>
            <div className={`py-1.5 rounded-lg border transition-colors ${currentStep === 2 ? 'bg-amber-500 text-stone-950 border-amber-400' : currentStep > 2 ? 'bg-stone-800 text-amber-300 border-amber-500/40' : 'bg-stone-900 text-stone-300 border-stone-800'}`}>
              {t.stepDate}
            </div>
            <div className={`py-1.5 rounded-lg border transition-colors ${currentStep === 3 ? 'bg-amber-500 text-stone-950 border-amber-400' : currentStep > 3 ? 'bg-stone-800 text-amber-300 border-amber-500/40' : 'bg-stone-900 text-stone-300 border-stone-800'}`}>
              {t.stepAddress}
            </div>
            <div className={`py-1.5 rounded-lg border transition-colors ${currentStep === 4 ? 'bg-amber-500 text-stone-950 border-amber-400' : 'bg-stone-900 text-stone-300 border-stone-800'}`}>
              {t.stepPayment}
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {formError && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center justify-between">
            <span>⚠️ {formError}</span>
            <button onClick={() => setFormError(null)} className="text-red-400 hover:text-red-200">✕</button>
          </div>
        )}

        {/* Modal Body Steps */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">

          {/* STEP 1: ITEM SELECTION & CART */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-amber-200">
                  Select Your Breakfast Trays
                </h4>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  ✓ Free Delivery in Lisbon
                </span>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-8 bg-stone-950 rounded-2xl border border-stone-800 space-y-4">
                  <Coffee className="w-12 h-12 text-amber-500/40 mx-auto" />
                  <p className="text-stone-400 text-sm">{t.cartEmpty}</p>
                  <p className="text-xs text-stone-400">Add a breakfast box below to begin your order.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => {
                    const name = item.product.name[currentLang] || item.product.name.en;
                    return (
                      <div
                        key={item.product.id}
                        className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.imageUrl}
                            alt={name}
                            className="w-14 h-14 rounded-lg object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h5 className="font-bold text-sm text-stone-100">{name}</h5>
                            <p className="text-xs text-amber-400 font-mono font-bold">
                              €{item.product.price.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 bg-stone-900 border border-stone-700 rounded-lg p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="w-6 h-6 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center text-xs font-bold cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="w-6 h-6 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center text-xs font-bold cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-stone-400 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Quick Add Recommendations */}
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Add Popular Items:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRODUCTS.map((prod) => {
                    const inCart = cartItems.some((ci) => ci.product.id === prod.id);
                    const pName = prod.name[currentLang] || prod.name.en;
                    return (
                      <div
                        key={prod.id}
                        className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500/30 flex items-center justify-between text-xs transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <img src={prod.imageUrl} alt={pName} className="w-10 h-10 rounded object-cover" />
                          <div>
                            <p className="font-bold text-stone-200 line-clamp-1">{pName}</p>
                            <p className="text-amber-400 font-mono">€{prod.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => onAddItem(prod)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            inCart
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                              : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-stone-950'
                          }`}
                        >
                          {inCart ? 'Added ✓' : '+ Add'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME WINDOW */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h4 className="font-serif text-lg font-bold text-amber-200">
                When should we deliver your breakfast?
              </h4>

              {/* Date Picker */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>{t.selectDeliveryDate}</span>
                </label>
                <input
                  type="date"
                  min={tomorrowStr}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 font-mono text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Time Slot Picker */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{t.selectTimeWindow}</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3.5 rounded-xl border text-sm font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                        timeSlot === slot
                          ? 'border-amber-400 bg-amber-500/20 text-amber-200'
                          : 'border-stone-800 bg-stone-950 text-stone-300 hover:bg-stone-800'
                      }`}
                    >
                      <span>{slot}</span>
                      {timeSlot === slot && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 leading-relaxed">
                ⏰ <strong>Order Cut-Off Reminder:</strong> Orders must be completed by 23:00 tonight to guarantee delivery tomorrow morning.
              </div>
            </div>
          )}

          {/* STEP 3: ADDRESS & GUEST INFORMATION */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <h4 className="font-serif text-lg font-bold text-amber-200">
                Where are you staying in Lisbon?
              </h4>

              {/* Accommodation Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                  {t.accommodationTypeLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'hotel', label: 'Hotel', icon: Hotel },
                    { id: 'airbnb', label: 'Airbnb', icon: Home },
                    { id: 'apartment', label: 'Apartment', icon: Home },
                    { id: 'guesthouse', label: 'Guesthouse', icon: Building2 },
                  ].map((acc) => {
                    const Icon = acc.icon;
                    return (
                      <button
                        key={acc.id}
                        type="button"
                        onClick={() => setAccommodationType(acc.id as AccommodationType)}
                        className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 cursor-pointer transition-colors ${
                          accommodationType === acc.id
                            ? 'border-amber-400 bg-amber-500/20 text-amber-200'
                            : 'border-stone-800 bg-stone-950 text-stone-400 hover:bg-stone-800'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-amber-400" />
                        <span>{acc.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Building/Hotel Name & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    {t.accommodationNameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Pestana CR7 / Chiado Apartment"
                    value={accommodationName}
                    onChange={(e) => setAccommodationName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    {t.roomNumberLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Room 304 / Flat 2B"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300 block">
                  {t.addressLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rua Augusta 120, Baixa, Lisboa"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    {t.contactName} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    {t.contactEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    {t.contactPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+351 910..."
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300 block">
                  {t.instructionsLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Leave with hotel reception if before 09:00 AM, door code 1234..."
                  value={deliveryInstructions}
                  onChange={(e) => setDeliveryInstructions(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & SECURE PAYMENT */}
          {currentStep === 4 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              
              {/* Summary Review */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-amber-200 text-sm pb-2 border-b border-stone-800">
                  <span>Delivery Summary</span>
                  <span>{deliveryDate} ({timeSlot})</span>
                </div>
                <div className="flex justify-between text-stone-300 pt-1">
                  <span>Guest:</span>
                  <span className="font-semibold text-stone-100">{recipientName}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Location:</span>
                  <span className="font-semibold text-stone-100">{accommodationName} ({address})</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-200'
                        : 'border-stone-800 bg-stone-950 text-stone-400 hover:bg-stone-800'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span>Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mbway')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      paymentMethod === 'mbway'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-200'
                        : 'border-stone-800 bg-stone-950 text-stone-400 hover:bg-stone-800'
                    }`}
                  >
                    <span>📱 MB WAY</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple_pay')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                      paymentMethod === 'apple_pay'
                        ? 'border-amber-400 bg-amber-500/20 text-amber-200'
                        : 'border-stone-800 bg-stone-950 text-stone-400 hover:bg-stone-800'
                    }`}
                  >
                    <span>🍏 Apple Pay</span>
                  </button>
                </div>
              </div>

              {/* Card Inputs */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-stone-400 block">
                      {t.cardNumber}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="4532 •••• •••• 8892"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 font-mono text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-400 block">
                        {t.cardExp}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="12/28"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 font-mono text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-stone-400 block">
                        {t.cardCvc}
                      </label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        placeholder="884"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 font-mono text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'mbway' && (
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <label className="text-xs font-semibold text-stone-300 block">
                    MB WAY Phone Number (+351)
                  </label>
                  <input
                    type="tel"
                    placeholder="910 000 000"
                    value={mbwayPhone}
                    onChange={(e) => setMbwayPhone(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 font-mono text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

              {/* Tip Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                  Add Courier Tip
                </label>
                <div className="flex gap-2">
                  {[0, 2, 3, 5].map((tip) => (
                    <button
                      key={tip}
                      type="button"
                      onClick={() => setTipOption(tip)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                        tipOption === tip
                          ? 'bg-amber-500 text-stone-950 border-amber-400'
                          : 'bg-stone-950 text-stone-400 border-stone-800 hover:bg-stone-800'
                      }`}
                    >
                      {tip === 0 ? 'No Tip' : `€${tip}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Calculation */}
              <div className="p-4 rounded-xl bg-stone-950 border border-amber-500/30 space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal ({cartItems.reduce((a, b) => a + b.quantity, 0)} items)</span>
                  <span className="font-mono">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Delivery Fee</span>
                  <span>FREE</span>
                </div>
                {tipOption > 0 && (
                  <div className="flex justify-between text-stone-400">
                    <span>Driver Tip</span>
                    <span className="font-mono">€{tipOption.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-amber-300 font-extrabold text-base pt-2 border-t border-stone-800">
                  <span>Total Amount</span>
                  <span className="font-mono">€{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Lock className="w-4 h-4 text-stone-950" />
                <span>{isSubmitting ? 'Processing Payment...' : `${t.payNow} (€${total.toFixed(2)})`}</span>
              </button>

              <p className="text-center text-[11px] text-stone-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.securityBadge}</span>
              </p>

            </form>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-stone-950 px-6 py-4 border-t border-stone-800 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3)}
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backStep}</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 && (
            <button
              onClick={() => {
                if (currentStep === 1) handleNextToStep2();
                else if (currentStep === 2) handleNextToStep3();
                else if (currentStep === 3) handleNextToStep4();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <span>{t.nextStep}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
