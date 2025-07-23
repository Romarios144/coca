import '../scss/blog.scss'

// components
import { useTheme } from './components/theme'
import { useBurger } from './components/burger'
import { useJournalTabs } from './components/tabs-journal'
import { useJournalSlider } from './components/slider-journal'
import { useArticlesSlider } from './components/slider-articles'
import { useFooterAccordion } from './components/accordion'

useTheme()
useBurger()
useJournalTabs()
useJournalSlider()
useFooterAccordion()

document.addEventListener('DOMContentLoaded', () => {
  useArticlesSlider()
})
