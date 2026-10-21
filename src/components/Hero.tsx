import { site } from '../content/site'

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative flex flex-col justify-center overflow-hidden pb-10 pt-16 sm:pb-12 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 animate-fade-in"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(145deg, #0a2342 0%, #0b294b 45%, #071d36 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full opacity-40 blur-[100px]"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(11,74,152,0.55) 0%, transparent 68%)',
          animation: 'soft-glow 8s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute -left-28 bottom-[-4rem] h-[26rem] w-[26rem] rounded-full opacity-30 blur-[100px]"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(255,152,0,0.22) 0%, transparent 68%)',
          animation: 'soft-glow 10s ease-in-out infinite',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <img
          src="/brand/logo-transparent.svg"
          alt={`${site.name} — ${site.legalName}`}
          width={1140}
          height={340}
          className="animate-fade-up mb-5 w-full max-w-3xl sm:mb-6 sm:max-w-4xl lg:max-w-5xl"
          decoding="async"
          fetchPriority="high"
        />

        <h1
          id="hero-heading"
          className="animate-fade-up-delay text-2xl font-extrabold tracking-tight text-ink sm:text-4xl lg:whitespace-nowrap xl:text-5xl"
        >
          {site.headline}
        </h1>
        <p className="animate-fade-up-delay-2 mt-2 max-w-3xl text-sm text-muted sm:text-base lg:max-w-none lg:whitespace-nowrap">
          {site.lead}
        </p>
        <div className="animate-fade-up-delay-2 mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#produtos"
            className="inline-flex rounded-sm bg-orange px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-orange-dark hover:text-ink"
          >
            Ver cases
          </a>
          <a
            href="#contato"
            className="inline-flex text-sm font-semibold text-ink/90 transition hover:text-orange"
          >
            Peça uma proposta →
          </a>
        </div>
      </div>
    </section>
  )
}
