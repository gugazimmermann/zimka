import { site, whatsappHref } from '../content/site'
import { Reveal } from './Reveal'

export function Contact() {
  const wa = whatsappHref('Olá! Quero uma proposta da ZimKa.')

  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="relative border-t border-white/10 bg-navy py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-orange uppercase">
            Contato
          </p>
          <h2
            id="contato-heading"
            className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:whitespace-nowrap"
          >
            Pronto para o próximo lançamento?
          </h2>
          <p className="mt-2 text-sm text-muted lg:whitespace-nowrap">
            Conte o desafio. Enviamos uma proposta alinhada ao prazo, escopo e
            orçamento.
          </p>
          <p className="mt-1.5 text-xs font-medium text-orange/90">
            {site.socialProof}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={site.mailto}
              className="inline-flex items-center rounded-sm bg-orange px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-orange-dark hover:text-ink"
            >
              {site.email}
            </a>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-orange transition hover:text-orange-dark"
              >
                WhatsApp →
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
