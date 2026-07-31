export type Language = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'it';

export interface ProductOption {
  id: string;
  name: Record<Language, string>;
  choices: {
    id: string;
    label: Record<Language, string>;
    priceDelta?: number;
  }[];
}

export interface Product {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number; // in Euros
  servings: string;
  isBestseller?: boolean;
  category: 'breakfast_box' | 'savory' | 'bakery' | 'beverages' | 'extras';
  imageUrl: string;
  itemsIncluded: Record<Language, string[]>;
  options?: ProductOption[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>; // optionId -> choiceId
  specialRequests?: string;
}

export type AccommodationType = 'hotel' | 'airbnb' | 'apartment' | 'guesthouse';

export interface DeliveryDetails {
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "08:30 - 09:30"
  accommodationType: AccommodationType;
  accommodationName: string; // e.g. "Pestana CR7 Lisboa" or "Rua Augusta Apartment"
  address: string;
  roomNumber?: string;
  deliveryInstructions?: string;
  recipientName: string;
  recipientEmail: string;
  recipientPhone: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  deliveryDetails: DeliveryDetails;
  subtotal: number;
  deliveryFee: number;
  tipAmount: number;
  total: number;
  paymentMethod: 'card' | 'mbway' | 'apple_pay';
  status: 'confirmed' | 'preparing' | 'delivered';
}

export interface Review {
  id: string;
  author: string;
  origin: string; // e.g., "London, UK"
  accommodation: string; // e.g. "Airbnb in Alfama"
  rating: number;
  comment: Record<Language, string>;
  date: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}
