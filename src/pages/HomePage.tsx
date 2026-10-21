import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { HowWeWork } from '../components/HowWeWork'
import { Products } from '../components/Products'
import { SeoJsonLd } from '../components/SeoJsonLd'
import { site } from '../content/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta({
    title: site.seo.title,
    description: site.seo.description,
    path: '/',
  })

  return (
    <>
      <SeoJsonLd />
      <Hero />
      <Products />
      <HowWeWork />
      <Contact />
    </>
  )
}
