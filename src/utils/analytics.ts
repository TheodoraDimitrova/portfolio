const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const initAnalytics = () => {
  if (!import.meta.env.PROD || !measurementId) return

  window.dataLayer = window.dataLayer ?? []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: true,
  })
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => {
  if (!import.meta.env.PROD || !measurementId || !window.gtag) return
  window.gtag('event', eventName, params)
}
