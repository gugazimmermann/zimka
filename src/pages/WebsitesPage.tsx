import { ProductPageLayout } from '../components/ProductPageLayout'
import { websitesPage } from '../content/productPages'
import { usePageMeta } from '../hooks/usePageMeta'

export function WebsitesPage() {
  usePageMeta({
    title: websitesPage.seoTitle,
    description: websitesPage.seoDescription,
    path: websitesPage.path,
  })

  return <ProductPageLayout page={websitesPage} />
}
