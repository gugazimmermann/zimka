import { Link } from 'react-router-dom'
import { footerLinks, site, whatsappHref } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()
  const wa = whatsappHref('Olá! Quero uma proposta da ZimKa.')

  return (
    <footer className="border-t border-white/10 bg-navy-deep py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <img
            src="/brand/zk.svg"
            alt=""
            width={56}
            height={36}
            className="mb-2 h-6 w-auto"
            decoding="async"
          />
          <p className="text-sm font-medium text-ink">{site.legalName}</p>
          <p className="mt-1 text-xs tracking-[0.28em] text-muted uppercase">
            Aplicativos
            <span className="mx-2 text-orange">•</span>
            Sistemas
            <span className="mx-2 text-orange">•</span>
            Web
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <a
              href={site.mailto}
              className="text-xs text-muted transition hover:text-orange"
            >
              {site.email}
            </a>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted transition hover:text-orange"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <nav aria-label="Cases" className="flex flex-wrap gap-x-4 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs font-medium text-muted transition hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted lg:text-right">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
