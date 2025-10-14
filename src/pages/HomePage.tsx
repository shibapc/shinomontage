import React from 'react'

const HERO_BACKGROUND =
  "linear-gradient(120deg, rgba(23,23,23,0.7) 0%, rgba(23,23,23,0.2) 55%), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80')"

const SERVICE_CARDS = [
  {
    id: 'repair',
    title: 'Ремонт и замена колес',
    description: 'Услуги выездного шиномонтажа с СТО для транспорта клиента',
    accent: 'bg-white',
    text: 'text-neutral-900',
    span: 'md:col-span-2',
    icon: null
  },
  {
    id: 'light',
    title: 'Легковые авто',
    accent: 'bg-[#F5D565]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-current">
        <path
          d="M3 13.5h18M5.5 13.5 7 9.5h10l1.5 4M5.5 13.5 4 16v2.5h2.5V16M18.5 13.5 20 16v2.5h-2.5V16"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 16.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z" fill="currentColor" />
        <path d="M20.5 16.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'suv',
    title: 'Кроссоверы, джипы, минивэны',
    accent: 'bg-[#4FB4C8]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-current">
        <path
          d="M2.5 13h19M4 13l1-4h14l1 4M4 13l-1.5 3v2.5H6V16m12-3 1.5 3v2.5H18V16"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="16.25" r="1.75" fill="currentColor" />
        <circle cx="18" cy="16.25" r="1.75" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'commercial',
    title: 'Коммерческий транспорт',
    accent: 'bg-[#3D74C9]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-current">
        <path
          d="M3 16V7.5h10.5V16m0-5.5h3.75L21 13v3h-7.5"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.25" cy="16.25" r="1.75" fill="currentColor" />
        <circle cx="17.75" cy="16.25" r="1.75" fill="currentColor" />
      </svg>
    )
  }
]

const PRICING_ROWS = [
  { title: 'Снятие и установка колеса', price: '100 ₽' },
  { title: 'Демонтаж/монтаж шины', price: '100 ₽' },
  { title: 'Балансировка колеса', price: '150 ₽' },
  { title: 'Установка жгута (герметизация)', price: '150 ₽' },
  { title: 'Установка заплаты камерной', price: '100 ₽' },
  { title: 'Установка заплаты бескамерной', price: '250 ₽' },
  { title: 'Снятие и установка металлического колеса', price: '200 ₽' },
  { title: 'Ремонт бокового пореза шины', price: '500-700 ₽' },
  { title: 'Установка камеры', price: '150 ₽' },
  { title: 'Клей, для вулканизации в низкотемпературной печи', price: '100 ₽' },
  { title: 'Демонтаж опрессовки (легкосплавные диски)', price: '500 ₽' },
  { title: 'Выезд шиномонтажа (в пределах МКАД)', price: '500-800 ₽' }
]

const EXTRA_SERVICES = [
  'Сезонное хранение шин',
  'Ремонт шин и дисков',
  'Снятие секреток',
  'Ошиповка',
  'Покраска дисков',
  'Утилизация шин',
  'Заправка кондиционеров',
  'Запуск авто в зимнее время',
  'Trade-in шин'
]

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#f5f5f5] text-neutral-900">
      <HeroSection />
      <ServiceSection />
      <PricingSection />
      <ExtraWorksSection />
      <NightCallout />
    </main>
  )
}

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundImage: HERO_BACKGROUND }}
    >
      <div className="absolute inset-0 bg-neutral-900/55" aria-hidden />
      <div className="relative mx-auto flex min-h-[540px] max-w-[1200px] flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[640px] lg:py-24 xl:min-h-[680px]">
        <div className="max-w-xl space-y-6 text-white">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80 max-[550px]:tracking-[0.2em]">
            Колёса на мыло
          </span>
          <h1 className="Montserrat text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Шиномонтаж №1
          </h1>
          <p className="text-base leading-relaxed text-white/85 sm:text-lg">
            В шиномонтаже «Колёса на мыло» ваши шины и диски найдут достойный сервис, а вы — высокий уровень заботы и отличный результат.
          </p>
          <div className="max-w-sm rounded-3xl bg-white/90 p-6 text-neutral-900 shadow-lg backdrop-blur">
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-neutral-600 max-[550px]:tracking-[0.15em]">
              Выбрать шиномонтаж
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Комплексный сервис для легковых авто, кроссоверов и коммерческого транспорта.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServiceSection: React.FC = () => {
  return (
    <section id="benefits" className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.id}
              className={`flex h-full flex-col justify-between rounded-3xl p-6 shadow-sm transition ${card.accent} ${card.text ?? 'text-white'} ${card.span ?? ''}`}
            >
              <div className="space-y-3">
                {card.icon && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                      24/7
                    </span>
                    <span className="text-xs font-medium text-white/80">Круглосуточно</span>
                  </div>
                )}
                <h3 className={`text-2xl font-semibold leading-tight ${card.text ? '' : 'text-white'}`}>
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-sm leading-6 text-neutral-600">
                    {card.description}
                  </p>
                )}
              </div>
              {card.icon && (
                <div className="mt-6 flex items-end justify-between text-white/90">
                  {card.icon}
                  <span className="text-xs uppercase tracking-[0.35em]">Шиномонтаж</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="Montserrat text-4xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-5xl">
            Цены на шиномонтаж
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Базовые тарифы на популярные услуги сервиса «Колёса на мыло».
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-neutral-200 text-left text-sm">
            <tbody>
              {PRICING_ROWS.map((row, idx) => (
                <tr key={row.title} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <th scope="row" className="w-2/3 px-6 py-4 font-medium text-neutral-800 max-[550px]:px-4 max-[550px]:text-xs">
                    {row.title}
                  </th>
                  <td className="px-6 py-4 text-right text-base font-semibold text-neutral-900 max-[550px]:px-4 max-[550px]:text-sm">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const ExtraWorksSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
        <div className="relative mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-[2.5rem] bg-[#f0f0f0] shadow-xl lg:mx-0">
          <div
            className="aspect-[3/4] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80')"
            }}
          >
            <div className="flex h-full w-full items-end justify-center bg-gradient-to-t from-black/50 to-transparent p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                Доп услуги
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="Montserrat text-3xl font-extrabold uppercase text-neutral-900 sm:text-4xl">
            Дополнительные работы
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Расширенный перечень услуг позволяет закрыть большинство задач по обслуживанию шин и дисков в одном месте.
          </p>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-neutral-800 sm:grid-cols-2">
            {EXTRA_SERVICES.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const NightCallout: React.FC = () => {
  return (
    <section className="bg-[#3f3f3f]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2e2e2e] px-6 py-12 shadow-xl sm:px-10 md:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_65%)]" aria-hidden />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl text-white">
              <h2 className="Montserrat text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                Шиномонтаж 24 часа в сутки
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Оставьте номер телефона — менеджер свяжется с вами в течение 10 минут, уточнит детали и согласует время обслуживания.
              </p>
            </div>
            <form className="flex w-full flex-col gap-3 text-sm max-[550px]:gap-4 md:max-w-sm">
              <label className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Ваш телефон
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="h-12 flex-1 rounded-full border border-white/30 bg-white/10 px-6 text-base text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <button
                  type="button"
                  className="h-12 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 transition hover:bg-neutral-200"
                >
                  Оформить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
