import { ProductPageLayout } from '../components/ProductPageLayout'
import { quiosquePage } from '../content/productPages'
import { usePageMeta } from '../hooks/usePageMeta'

export function QuiosqueDeFeiraPage() {
  usePageMeta({
    title: quiosquePage.seoTitle,
    description: quiosquePage.seoDescription,
    path: quiosquePage.path,
  })

  return <ProductPageLayout page={quiosquePage} />
}
