export const useJournalTabs = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.journal__link')
    const tabContents = document.querySelectorAll('.journal__slider')

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.tab

        tabButtons.forEach((btn) => btn.classList.remove('is-active'))
        tabContents.forEach((cont) => cont.classList.remove('is-active'))

        button.classList.add('is-active')
        document
          .querySelector(`.journal__slider[data-tab-content="${target}"]`)
          ?.classList.add('is-active')
      })
    })
  })
}
