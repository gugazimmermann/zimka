import { site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-deep py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
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
          <a
            href={site.mailto}
            className="mt-2 inline-block text-xs text-muted transition hover:text-orange"
          >
            {site.email}
          </a>
        </div>
        <p className="text-xs text-muted">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
