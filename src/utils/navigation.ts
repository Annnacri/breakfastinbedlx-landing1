import { Product } from '../types';
import { trackEvent } from './analytics';

export const EXISTING_WEBSITE_URL = 'https://breakfastinbedlx.com/';

/**
 * Redirects the customer to the existing Breakfast in Bed LX ordering & reservation system.
 * Preserves product details where available via URL query parameters.
 */
export function redirectToExistingSystem(product?: Product | string) {
  const productId = typeof product === 'string' ? product : product?.id;
  const targetUrl = productId
    ? `${EXISTING_WEBSITE_URL}?product=${encodeURIComponent(productId)}`
    : EXISTING_WEBSITE_URL;

  trackEvent('redirect_to_existing_system', { productId, targetUrl });

  if (typeof window !== 'undefined') {
    const newWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = targetUrl;
    }
  }
}
