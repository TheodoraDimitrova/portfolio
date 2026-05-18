declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => {
  if (!import.meta.env.PROD || !window.gtag) return
  window.gtag('event', eventName, params)
}
