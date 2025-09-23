// src/components/Hero/constants.ts
import photo1 from '../../shared/assets/Hero/photo1.webp'
import photo2 from '../../shared/assets/Hero/photo2.webp'
import photo3 from '../../shared/assets/Hero/photo3.webp'
import type { HeroSlide, ButtonLabels } from './types'

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: photo1,
    title: "Колеса на мыло — шиномонтаж 24/7",
    subtitle: "Быстро. Аккуратно. Рядом с вами",
    description: "Переобувка, ремонт проколов и шинный сервис без очередей"
  },
  {
    id: 2,
    image: photo2,
    title: "Профессиональное оборудование",
    subtitle: "Точные стенды и проверенные расходники",
    description: "Балансировка, правка дисков, сезонная замена комплектов"
  },
  {
    id: 3,
    image: photo3,
    title: "Выездной шиномонтаж",
    subtitle: "Поможем на дороге",
    description: "Приедем, заменим колесо и доведём до сервиса"
  }
]

export const SLIDE_INTERVAL: number = 5000 // 5 секунд

export const BUTTON_LABELS: ButtonLabels = {
  ORDER: "Записаться",
  PRICES: "Цены на услуги"
}