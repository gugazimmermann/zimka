import { howWeWork } from '../content/site'
import { Reveal } from './Reveal'

export function HowWeWork() {
  return (
    <section
      id="como"
      aria-labelledby="como-heading"
      className="relative border-t border-white/10 py-10 sm:py-14"
      style={{
        background:
          'linear-gradient(180deg, #0b294b 0%, #002040 55%, #071d36 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="como-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            {howWeWork.title}
          </h2>
          <p className="mt-2 max-w-4xl text-sm text-muted md:max-w-none md:whitespace-nowrap">
            {howWeWork.lead}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-6">
          {howWeWork.items.map((item, i) => (
            <Reveal key={item.title} className={`reveal-delay-${i}`}>
              <div>
                <span
                  className="block text-xs font-bold tracking-[0.25em] text-orange"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1.5 text-base font-bold text-ink sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
