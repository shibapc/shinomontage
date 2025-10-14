import React from 'react'

const NAV_LINKS = [
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Цены', href: '#pricing' }
]

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-4 sm:px-6 md:flex-nowrap md:py-6">
        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-neutral-900 text-lg font-semibold uppercase text-white">
              Km
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-900 max-[550px]:tracking-[0.2em]">
                Колёса на мыло
              </p>
              <p className="text-xs text-neutral-500">Шиномонтаж • Москва</p>
            </div>
          </div>
        </div>

        <nav className="order-3 flex w-full items-center justify-center md:order-none md:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-neutral-700 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative pb-1 transition hover:text-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full flex-col items-center justify-end gap-1 text-right text-neutral-900 md:w-auto md:items-end">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Круглосуточно</span>
          <a
            href="tel:+78005553535"
            className="text-lg font-semibold tracking-wide"
          >
            8 (800) 555-35-35
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
