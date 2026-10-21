import { ProductPageLayout } from '../components/ProductPageLayout'
import { montagemPage } from '../content/productPages'
import { usePageMeta } from '../hooks/usePageMeta'

export function MontagemDeMesaPage() {
  usePageMeta({
    title: montagemPage.seoTitle,
    description: montagemPage.seoDescription,
    path: montagemPage.path,
  })

  return <ProductPageLayout page={montagemPage} />
}
