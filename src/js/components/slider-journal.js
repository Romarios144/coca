import Swiper from 'swiper'
import 'swiper/css'

export const useJournalSlider = () => {
  new Swiper('.journal__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      577: {
        spaceBetween: 32,
      },
      221: {
        spaceBetween: 500,
      },
    },
  })
}
