import Swiper from 'swiper'
import 'swiper/css'

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      1201: {
        centeredSlides: false,
      },
    },
  })
}
