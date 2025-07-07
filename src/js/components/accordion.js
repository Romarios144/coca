export const useFooterAccordion = () => {
  const ACCORDION_SELECTOR = '.footer__accordion'
  const SUMMARY_SELECTOR = 'summary'
  const MOBILE_BREAKPOINT = 580

  const updateAccordions = () => {
    const accordions = document.querySelectorAll(ACCORDION_SELECTOR)

    accordions.forEach((accordion) => {
      const summary = accordion.querySelector(SUMMARY_SELECTOR)

      if (!summary) return

      if (window.innerWidth > MOBILE_BREAKPOINT) {
        accordion.setAttribute('open', '')
        summary.style.pointerEvents = 'none'
        summary.style.setProperty('--arrow-visibility', 'hidden')
      } else {
        accordion.removeAttribute('open')
        summary.style.pointerEvents = 'auto'
        summary.style.setProperty('--arrow-visibility', 'visible')
      }
    })
  }

  updateAccordions()

  window.addEventListener('resize', updateAccordions)
}
