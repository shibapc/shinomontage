// src/components/Services/constants.ts
import prokolImg from '../../shared/assets/Services/remont_prokola_kolesa.webp'
import zamenaImg from '../../shared/assets/Services/shinomontaj-4.jpg'
import balansImg from '../../shared/assets/Services/balansirovka.jpg'
import viezdImg from '../../shared/assets/Services/large_e68a611s-1920.jpg'
import pravkaImg from '../../shared/assets/Services/DSC_3411.jpg'
import hranenieImg from '../../shared/assets/Services/images.jpeg'

import type { ServiceItem } from './types'

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tyre-change',
    title: 'СЕЗОННАЯ ЗАМЕНА ШИН',
    image: zamenaImg
  },
  {
    id: 'puncture',
    title: 'РЕМОНТ ПРОКОЛОВ',
    image: prokolImg
  },
  {
    id: 'balance',
    title: 'БАЛАНСИРОВКА КОЛЕС',
    image: balansImg
  },
  {
    id: 'disk-repair',
    title: 'ПРАВКА И РЕМОНТ ДИСКОВ',
    image: pravkaImg
  },
  {
    id: 'storage',
    title: 'ХРАНЕНИЕ КОМПЛЕКТОВ',
    image: hranenieImg
  },
  {
    id: 'mobile',
    title: 'ВЫЕЗДНОЙ ШИНОМОНТАЖ',
    image: viezdImg
  }
]