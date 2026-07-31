import React from 'react';
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Mail,
  X,
  Coffee,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Order, Language } from '../types';
import { translations } from '../data/translations';

interface OrderConfirmationModalProps {
  order: Order | null;
  onClose: () => void;
  currentLang: Language;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  currentLang,
}) => {
  if (!order) return null;
  const t = translations[currentLang];

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Breakfast in Bed LX Delivery (#${order.id})`);
    const details = encodeURIComponent(`Fresh Portuguese breakfast delivery at ${order.deliveryDetails.accommodationName} (${order.deliveryDetails.address}).`);
    const location = encodeURIComponent(order.deliveryDetails.address);
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank');
  };

  const handleSupportContact = () => {
    const subject = encodeURIComponent(`Question about Order #${order.id}`);
    window.open(`mailto:info@breakfastinbedlx.com?subject=${subject}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-xl w-full text-stone-100 shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in zoom-in-95 duration-200 my-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-100 flex items-center justify-center text-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-50">
            {t.orderBookedHeading}
          </h3>

          <p className="text-stone-300 text-sm leading-relaxed">
            {t.orderBookedSub}
          </p>

          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-xs">
            {t.orderNumber}: #{order.id}
          </div>
        </div>

        {/* Order Details Card */}
        <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <span className="text-stone-400 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              {t.deliveryDate}
            </span>
            <span className="font-bold text-amber-200">{order.deliveryDetails.date}</span>
          </div>

          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <span className="text-stone-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              {t.deliveryWindow}
            </span>
            <span className="font-bold text-amber-200">{order.deliveryDetails.timeSlot}</span>
          </div>

          <div className="flex items-start justify-between pb-3 border-b border-stone-800">
            <span className="text-stone-400 flex items-center gap-1.5 shrink-0">
              <MapPin className="w-4 h-4 text-amber-400" />
              {t.deliveredTo}
            </span>
            <span className="font-semibold text-stone-200 text-right">
              {order.deliveryDetails.accommodationName} <br />
              <span className="text-stone-400 text-xs">{order.deliveryDetails.address}</span>
            </span>
          </div>

          {/* Ordered Items Breakdown */}
          <div className="pt-2 space-y-2">
            <p className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">
              Ordered Items:
            </p>
            {order.items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-stone-300">
                <span>
                  {item.quantity}x {item.product.name[currentLang] || item.product.name.en}
                </span>
                <span className="font-mono">€{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-extrabold text-amber-400 text-sm pt-2 border-t border-stone-800">
              <span>Total Paid</span>
              <span className="font-mono">€{order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleAddToCalendar}
            className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.addToCalendar}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleSupportContact}
            className="w-full py-3.5 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs flex items-center justify-center gap-2 border border-stone-700 cursor-pointer transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Customer Support (info@breakfastinbedlx.com)</span>
          </button>
        </div>

        <p className="text-center text-[11px] text-stone-400 flex items-center justify-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Confirmation email sent to {order.deliveryDetails.recipientEmail}</span>
        </p>

      </div>
    </div>
  );
};
