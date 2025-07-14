import Swiper from 'swiper'
import 'swiper/css'

export const useIntroSlider = () => {
  new Swiper('.intro__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
  })
}
