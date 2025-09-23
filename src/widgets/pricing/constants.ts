import type { PricingItem } from './types'

export const PRICING_DATA: PricingItem[] = [
  {
    id: 'tyre-change',
    title: 'СЕЗОННАЯ ЗАМЕНА ШИН',
    price: 'от 1200 руб.',
    description: 'Переобувка комплекта колес (R13–R18)'
  },
  {
    id: 'balance',
    title: 'БАЛАНСИРОВКА',
    price: 'от 150 руб./колесо',
    description: 'Точная балансировка на стенде'
  },
  {
    id: 'puncture',
    title: 'РЕМОНТ ПРОКОЛА',
    price: 'от 400 руб.',
    description: 'Жгут/грибок, герметизация, проверка'
  },
  {
    id: 'disk-repair',
    title: 'ПРАВКА ДИСКОВ',
    price: 'от 1000 руб.',
    description: 'Правка и восстановление геометрии'
  },
  {
    id: 'storage',
    title: 'ХРАНЕНИЕ КОЛЕС',
    price: 'от 900 руб./сезон',
    description: 'Охраняемый склад, правильные условия'
  },
  {
    id: 'mobile',
    title: 'ВЫЕЗДНОЙ ШИНОМОНТАЖ',
    price: 'от 1500 руб.',
    description: 'Выезд по городу, помощь на дороге'
  }
]
