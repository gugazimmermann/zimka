import { Link } from 'react-router-dom'
import {
  productCases,
  serviceCases,
  site,
  type Product,
} from '../content/site'
import { Reveal } from './Reveal'

function ProductBlock({
  product,
  reverse,
}: {
  product: Product
  reverse: boolean
}) {
  return (
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
          product.external ? (
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-orange transition hover:text-orange-dark"
            >
              {product.hrefLabel ?? 'Saiba mais'} →
            </a>
          ) : (
            <Link
              to={product.href}
              className="mt-4 inline-flex text-sm font-semibold text-orange transition hover:text-orange-dark"
            >
              {product.hrefLabel ?? 'Saiba mais'} →
            </Link>
          )
        ) : null}
      </div>

      <div
        className={
          product.images.length > 1 ? 'grid grid-cols-2 gap-2 sm:gap-3' : ''
        }
      >
        {product.images.map((image, i) => {
          const light = product.imageSurface === 'light'
          return (
            <figure
              key={image.src}
              className={[
                product.images.length > 1 && i === 0 ? 'col-span-2' : '',
                light
                  ? 'flex items-center justify-center bg-[#f4f6f8] px-4 py-5 sm:px-6 sm:py-6'
                  : 'overflow-hidden ring-1 ring-white/10',
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
                    : 'aspect-[16/10] h-auto w-full object-cover object-top'
                }
                loading="lazy"
                decoding="async"
              />
            </figure>
          )
        })}
      </div>
    </article>
  )
}

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
            Cases
          </p>
          <h2
            id="produtos-heading"
            className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:whitespace-nowrap"
          >
            Cases que já geram resultado
          </h2>
          <p className="mt-2 text-sm text-muted lg:whitespace-nowrap">
            Produtos reais em produção — referência do que entregamos, ou peça o
            seu sob medida.
          </p>
          <p className="mt-1.5 text-xs font-medium tracking-wide text-orange/90">
            {site.socialProof}
          </p>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <h3 className="text-sm font-bold tracking-[0.14em] text-ink/80 uppercase">
              Produtos
            </h3>
          </Reveal>
          <div className="mt-6 flex flex-col gap-12 sm:gap-14">
            {productCases.map((product, index) => (
              <Reveal key={product.id}>
                <ProductBlock product={product} reverse={index % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-14">
          <Reveal>
            <h3 className="text-sm font-bold tracking-[0.14em] text-ink/80 uppercase">
              Serviços
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Também fazemos sites sob medida — marca na tela, CTAs claros e
              conversão.
            </p>
          </Reveal>
          <div className="mt-6 flex flex-col gap-12 sm:gap-14">
            {serviceCases.map((product, index) => (
              <Reveal key={product.id}>
                <ProductBlock
                  product={product}
                  reverse={(productCases.length + index) % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
