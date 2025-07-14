import '../scss/about.scss'

// components
import { useTheme } from './components/theme'
import { useBurger } from './components/burger'
import { useIntroSlider } from './components/slider-intro'
import { useTeamSlider } from './components/slider-team'
import { useFooterAccordion } from './components/accordion'

useTheme()
useBurger()
useTeamSlider()
useIntroSlider()
useFooterAccordion()
