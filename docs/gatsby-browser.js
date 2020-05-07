const { NODE_ENV = 'development' } = process.env

export const onRouteUpdate = () => {
  if (!window.analytics || typeof window.analytics.page !== 'function') {
    if (NODE_ENV === 'development') {
      console.warn('Unable to find analytics.js')
    }

    return
  }

  window.analytics.page()
}
