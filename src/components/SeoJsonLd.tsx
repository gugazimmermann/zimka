import { products, site } from '../content/site'

export function SeoJsonLd() {
  const logoUrl = `${site.url}/brand/logo-navy.svg`

  const organization = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    logo: logoUrl,
    description: site.seo.description,
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.seo.description,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${site.url}/#organization` },
  }

  const itemList = {
    '@type': 'ItemList',
    '@id': `${site.url}/#produtos`,
    name: 'Produtos ZimKa',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      description: product.summary,
      url: product.href?.startsWith('http')
        ? product.href
        : product.href
          ? `${site.url}${product.href}`
          : `${site.url}/#${product.id}`,
    })),
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, itemList],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
