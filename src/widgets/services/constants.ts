// src/components/Services/constants.ts
import motorcycleImg from '../../shared/assets/Services/motocikl-foto-mini.webp'
import carImg from '../../shared/assets/Services/legkovoy-avtomobil-foto-mini.webp'
import suvImg from '../../shared/assets/Services/vnedorozhnik-foto-mini.webp'
import minibusImg from '../../shared/assets/Services/mikroavtobus-foto-mini.webp'
import specialImg from '../../shared/assets/Services/spectehnika-foto-mini.webp'
import gazelImg from '../../shared/assets/Services/gazel-foto-mini.webp'

import type { ServiceItem } from './types'

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tyre-change',
    title: 'СЕЗОННАЯ ЗАМЕНА ШИН',
    image: carImg
  },
  {
    id: 'puncture',
    title: 'РЕМОНТ ПРОКОЛОВ',
    image: motorcycleImg
  },
  {
    id: 'balance',
    title: 'БАЛАНСИРОВКА КОЛЕС',
    image: suvImg
  },
  {
    id: 'disk-repair',
    title: 'ПРАВКА И РЕМОНТ ДИСКОВ',
    image: specialImg
  },
  {
    id: 'storage',
    title: 'ХРАНЕНИЕ КОМПЛЕКТОВ',
    image: gazelImg
  },
  {
    id: 'mobile',
    title: 'ВЫЕЗДНОЙ ШИНОМОНТАЖ',
    image: minibusImg
  }
]