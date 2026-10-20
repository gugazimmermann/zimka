import { site } from '../content/site'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contato" className="relative border-t border-white/10 bg-navy py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-orange uppercase">
            Contato
          </p>
          <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:whitespace-nowrap">
            Pronto para o próximo lançamento?
          </h2>
          <p className="mt-2 max-w-4xl text-sm text-muted md:max-w-none md:whitespace-nowrap">
            Conte o desafio. Enviamos uma proposta alinhada ao seu prazo, escopo e orçamento.
          </p>
          <a
            href={site.mailto}
            className="mt-5 inline-flex items-center rounded-sm bg-orange px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-orange-dark hover:text-ink"
          >
            {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
