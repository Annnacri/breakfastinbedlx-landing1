export interface AnalyticsEvent {
  eventName: string;
  payload?: Record<string, unknown>;
}

export const trackEvent = (eventName: string, payload?: Record<string, unknown>) => {
  // Safe dispatch to window analytics layers if present
  if (typeof window !== 'undefined') {
    const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
    if (dataLayer && Array.isArray(dataLayer)) {
      dataLayer.push({ event: eventName, ...payload });
    }
  }

  // Development console log
  if (typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV) {
    console.log(`[Analytics Event Tracked]: ${eventName}`, payload || {});
  }
};
