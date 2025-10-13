// src/components/Hero/constants.ts
import photo1 from '../../shared/assets/Hero/photo1.webp'
import type { HeroSlide, ButtonLabels } from './types'

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: photo1,
    title: "ШИНОМОНТАЖ №1",
    subtitle: "Быстро. Аккуратно. Рядом с вами",
    description: "Переобувка, ремонт проколов и шинный сервис без очередей"
  },
]


export const BUTTON_LABELS: ButtonLabels = {
  ORDER: "Записаться",
  PRICES: "Цены на услуги"
}