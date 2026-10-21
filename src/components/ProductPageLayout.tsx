import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import type { ProductPageContent } from '../content/productPages'
import { site } from '../content/site'

type Props = {
  page: ProductPageContent
}

export function ProductPageLayout({ page }: Props) {
  const [featured, ...side] = page.gallery

  return (
    <>
      <Header />
      <main>
        <section
          aria-labelledby="product-hero"
          className="relative overflow-hidden border-b border-white/10 pt-20 pb-12 sm:pt-24 sm:pb-16"
          style={{
            background:
              'linear-gradient(145deg, #0a2342 0%, #0b294b 50%, #071d36 100%)',
          }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <Link
                to="/#produtos"
                className="text-xs font-semibold tracking-wide text-orange transition hover:text-orange-dark"
              >
                ← Produtos ZimKa
              </Link>
              <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-orange uppercase">
                {page.eyebrow}
              </p>
              <h1
                id="product-hero"
                className="mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:whitespace-nowrap"
              >
                {page.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {page.lead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={site.mailto}
                  className="inline-flex rounded-sm bg-orange px-6 py-3 text-sm font-bold text-navy transition hover:bg-orange-dark hover:text-ink"
                >
                  Peça uma proposta
                </a>
                {page.exampleUrl ? (
                  <a
                    href={page.exampleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-orange transition hover:text-orange-dark"
                  >
                    {page.exampleLabel ?? 'Ver o site'} →
                  </a>
                ) : (
                  <a
                    href={site.mailto}
                    className="text-sm font-medium text-muted transition hover:text-ink"
                  >
                    {site.email}
                  </a>
                )}
              </div>
            </div>
            <figure className="overflow-hidden rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
              <img
                src={page.heroImage.src}
                alt={page.heroImage.alt}
                width={1280}
                height={800}
                className="aspect-[16/10] h-auto w-full object-cover object-top"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section
          aria-labelledby="steps-heading"
          className="border-b border-white/10 py-12 sm:py-16"
          style={{
            background:
              'linear-gradient(180deg, #0b294b 0%, #002040 60%, #071d36 100%)',
          }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              id="steps-heading"
              className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:whitespace-nowrap"
            >
              {page.stepsTitle}
            </h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {page.steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span
                    className="text-4xl font-extrabold text-orange/90"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-label="Telas do produto"
          className="border-b border-white/10 bg-navy-deep py-12 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-orange uppercase">
              Na prática
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:whitespace-nowrap">
              Telas reais do sistema
            </h2>

            {page.gallery.length === 2 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {page.gallery.map((image) => (
                  <figure key={image.src} className="overflow-hidden ring-1 ring-white/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={1280}
                      height={800}
                      className="aspect-[16/10] h-auto w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="border-t border-white/10 bg-navy px-4 py-2.5 text-sm font-medium text-ink/90">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {featured ? (
                  <figure className="overflow-hidden ring-1 ring-white/10 sm:col-span-2">
                    <img
                      src={featured.src}
                      alt={featured.alt}
                      width={1280}
                      height={800}
                      className="aspect-[21/9] h-auto w-full object-cover object-top sm:aspect-[2.2/1]"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="border-t border-white/10 bg-navy px-4 py-2.5 text-sm font-medium text-ink/90">
                      {featured.caption}
                    </figcaption>
                  </figure>
                ) : null}
                {side.map((image) => (
                  <figure key={image.src} className="overflow-hidden ring-1 ring-white/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={1280}
                      height={800}
                      className="aspect-[16/10] h-auto w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="border-t border-white/10 bg-navy px-4 py-2.5 text-sm font-medium text-ink/90">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        <section
          aria-labelledby="benefits-heading"
          className="border-b border-white/10 bg-navy py-12 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              id="benefits-heading"
              className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:whitespace-nowrap"
            >
              {page.benefitsTitle}
            </h2>
            <ul className="mt-8 grid max-w-3xl gap-3 sm:gap-4">
              {page.benefits.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-orange pl-4 text-sm leading-snug text-ink/95 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="cta-heading"
          className="py-14 sm:py-20"
          style={{
            background:
              'linear-gradient(135deg, #0b294b 0%, #002040 40%, #0a1a30 100%)',
          }}
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2
              id="cta-heading"
              className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:whitespace-nowrap"
            >
              {page.cta}
            </h2>
            <p className="mt-3 text-muted md:whitespace-nowrap">{page.ctaSub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.mailto}
                className="inline-flex rounded-sm bg-orange px-6 py-3 text-sm font-bold text-navy transition hover:bg-orange-dark hover:text-ink"
              >
                Falar com a ZimKa — {site.email}
              </a>
              {page.exampleUrl ? (
                <a
                  href={page.exampleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-orange transition hover:text-orange-dark"
                >
                  {page.exampleLabel ?? 'Ver o site'} →
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
