import { ProductPageLayout } from '../components/ProductPageLayout'
import { glicodosePage } from '../content/productPages'
import { usePageMeta } from '../hooks/usePageMeta'

export function GlicoDosePage() {
  usePageMeta({
    title: glicodosePage.seoTitle,
    description: glicodosePage.seoDescription,
    path: glicodosePage.path,
  })

  return <ProductPageLayout page={glicodosePage} />
}
