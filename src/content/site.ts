export const site = {
  name: 'ZimKa',
  legalName: 'Zimmermann e Kauling Sistemas',
  tagline: 'APLICATIVOS • SISTEMAS • WEB',
  url: 'https://zimka.com.br',
  headline: 'Software que vende, opera e escala o seu negócio',
  lead: 'Apps, sistemas e web sob medida — da ideia ao produto no ar, com entrega em saúde, varejo e eventos.',
  socialProof: 'Em produção: Raffiner, feiras e saúde digital.',
  email: 'zimkasistemas@gmail.com',
  mailto: 'mailto:zimkasistemas@gmail.com',
  /** Dígitos com DDI (ex.: 5547999999999). Vazio = não exibe WhatsApp. */
  whatsappDigits: '',
  seo: {
    title: 'ZimKa — Software sob medida: apps, sistemas e web',
    description:
      'ZimKa — software sob medida que vende e opera: apps, sistemas e web. Conheça GlicoDose, Montagem de Mesa, quiosques e websites.',
  },
} as const

export function whatsappHref(text?: string): string | null {
  if (!site.whatsappDigits) return null
  const base = `https://wa.me/${site.whatsappDigits}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export type Product = {
  id: string
  kind: 'product' | 'service'
  name: string
  eyebrow: string
  summary: string
  points: string[]
  images: { src: string; alt: string }[]
  /** Logos escuros / fundo transparente: painel claro para contraste */
  imageSurface?: 'light'
  href?: string
  hrefLabel?: string
  /** Link interno do site (react-router); se false, abre em nova aba */
  external?: boolean
}

export const products: Product[] = [
  {
    id: 'glicodose',
    kind: 'product',
    name: 'GlicoDose',
    eyebrow: 'Saúde digital',
    summary:
      'Acompanhe o diabetes com mais clareza: dose com apoio inteligente, histórico útil na consulta e visão da rede para o município.',
    points: [
      'Refeição por texto, foto ou voz no dia a dia',
      'Glicose na dose — manual, sensor ou apps de saúde',
      'Consulta com histórico, alertas e prescrição prontos',
      'Painel municipal com adesão e relatórios da rede',
    ],
    images: [
      {
        src: '/media/glicodose-meal.webp',
        alt: 'Tela do GlicoDose com registro de refeição por foto',
      },
      {
        src: '/media/glicodose-dose.webp',
        alt: 'Tela de dose de insulina no GlicoDose',
      },
      {
        src: '/media/glicodose-medicos.webp',
        alt: 'Portal médico do GlicoDose com gráficos',
      },
    ],
    href: '/glicodose',
    hrefLabel: 'Saiba mais',
    external: false,
  },
  {
    id: 'montagem-de-mesa',
    kind: 'product',
    name: 'Montagem de Mesa',
    eyebrow: 'Mesa posta · SaaS',
    summary:
      'O cliente monta a mesa sozinho, vê o resultado na hora e envia o pedido pronto — você fecha o lead.',
    points: [
      'Link e catálogo próprios da loja',
      'Pré-visualização ao vivo da mesa',
      'Pedido pronto por e-mail e WhatsApp',
      'Histórico de montagens no painel',
    ],
    images: [
      {
        src: '/media/montagem/ui-mesa-montada.webp',
        alt: 'App Montagem de Mesa com preview da mesa e catálogo',
      },
    ],
    href: '/montagem-de-mesa',
    hrefLabel: 'Saiba mais',
    external: false,
  },
  {
    id: 'quiosque',
    kind: 'product',
    name: 'Quiosque de Feira',
    eyebrow: 'Totem touchscreen',
    summary:
      'Totem da sua marca na feira: teclado virtual, campos sob medida e leads online ou offline.',
    points: [
      'Pronto para tela touch no evento',
      'Co-branding com logos e QR',
      'Formulário sob medida ao público',
      'Dados na nuvem ou CSV local',
    ],
    images: [
      {
        src: '/media/quiosque/form-tania-teclado.webp',
        alt: 'Quiosque de feira com formulário touch e teclado virtual',
      },
    ],
    href: '/quiosque-de-feira',
    hrefLabel: 'Saiba mais',
    external: false,
  },
  {
    id: 'websites',
    kind: 'service',
    name: 'Websites',
    eyebrow: 'Sites sob medida',
    summary:
      'Site da marca que vende: identidade, catálogo e WhatsApp — como o da Raffiner, no ar e convertendo.',
    points: [
      'Visual alinhado à marca e ao público',
      'CTAs de WhatsApp, catálogo e contato',
      'Seções claras para engajar e converter',
      'Publicação rápida, responsivo e SEO básico',
    ],
    images: [
      {
        src: '/media/websites/hero.webp',
        alt: 'Home do site Raffiner com hero e botão WhatsApp',
      },
    ],
    href: '/websites',
    hrefLabel: 'Saiba mais',
    external: false,
  },
]

export const productCases = products.filter((p) => p.kind === 'product')
export const serviceCases = products.filter((p) => p.kind === 'service')

export const howWeWork = {
  title: 'Como trabalhamos',
  lead: 'Entendemos o problema, desenhamos a solução e entregamos software que o cliente usa de verdade.',
  items: [
    {
      title: 'Sob medida, de verdade',
      body: 'Visual, fluxos e integrações alinhados à sua marca e ao negócio — sem pacote genérico.',
    },
    {
      title: 'Do app ao painel',
      body: 'Apps, sistemas e sites com interface clara, operação estável e entrega que escala.',
    },
    {
      title: 'Parceria até o ar',
      body: 'Do briefing ao go-live: prioridades claras, comunicação direta e suporte contínuo.',
    },
  ],
} as const

export const footerLinks = [
  { to: '/glicodose', label: 'GlicoDose' },
  { to: '/montagem-de-mesa', label: 'Montagem de Mesa' },
  { to: '/quiosque-de-feira', label: 'Quiosque de Feira' },
  { to: '/websites', label: 'Websites' },
] as const
