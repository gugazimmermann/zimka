import { products } from '../content/site'
import { Reveal } from './Reveal'

export function Products() {
  return (
    <section
      id="produtos"
      aria-labelledby="produtos-heading"
      className="relative border-t border-white/10 bg-navy-deep py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-orange uppercase">
            Produtos
          </p>
          <h2
            id="produtos-heading"
            className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:whitespace-nowrap"
          >
            Cases que já geram resultado
          </h2>
          <p className="mt-2 text-sm text-muted md:whitespace-nowrap">
            Produtos reais, em produção. Referência do que a ZimKa entrega — ou peça o seu sob medida.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-12 sm:gap-14">
          {products.map((product, index) => {
            const reverse = index % 2 === 1
            return (
              <Reveal key={product.id}>
                <article
                  id={product.id}
                  className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-orange">
                      {product.eyebrow}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {product.summary}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {product.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-snug text-ink/90"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {product.href ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex text-sm font-semibold text-orange transition hover:text-orange-dark"
                      >
                        {product.hrefLabel ?? 'Saiba mais'} →
                      </a>
                    ) : null}
                  </div>

                  <div
                    className={
                      product.images.length > 1
                        ? 'grid grid-cols-2 gap-2 sm:gap-3'
                        : ''
                    }
                  >
                    {product.images.map((image, i) => {
                      const light = product.imageSurface === 'light'
                      return (
                        <figure
                          key={image.src}
                          className={[
                            product.images.length > 1 && i === 0
                              ? 'col-span-2'
                              : '',
                            light
                              ? 'flex items-center justify-center bg-[#f4f6f8] px-4 py-5 sm:px-6 sm:py-6'
                              : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            width={960}
                            height={640}
                            className={
                              light
                                ? 'h-auto max-h-20 w-full object-contain sm:max-h-24'
                                : 'h-auto w-full object-cover object-top'
                            }
                            loading="lazy"
                            decoding="async"
                          />
                        </figure>
                      )
                    })}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
