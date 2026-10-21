import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site, whatsappHref } from '../content/site'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const casesHref = pathname === '/' ? '#produtos' : '/#produtos'
  const contatoHref = pathname === '/' ? '#contato' : '/#contato'
  const wa = whatsappHref('Olá! Quero uma proposta da ZimKa.')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-navy/90 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-3 px-5 sm:h-14 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={site.name}>
          <img
            src="/brand/zk.svg"
            alt=""
            width={48}
            height={30}
            className="h-6 w-auto sm:h-7"
            decoding="async"
          />
          <span className="text-sm font-extrabold tracking-tight text-ink sm:text-base">
            Zim<span className="text-orange">Ka</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={casesHref}
            className="text-xs font-semibold text-muted transition hover:text-ink sm:text-sm"
          >
            Cases
          </a>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="hidden text-xs font-semibold text-muted transition hover:text-ink sm:inline sm:text-sm"
            >
              WhatsApp
            </a>
          ) : null}
          <a
            href={contatoHref}
            className="rounded-sm bg-orange px-3 py-1.5 text-xs font-semibold text-navy transition hover:bg-orange-dark hover:text-ink sm:text-sm"
          >
            Peça uma proposta
          </a>
        </div>
      </div>
    </header>
  )
}
