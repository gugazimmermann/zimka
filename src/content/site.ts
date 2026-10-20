export const site = {
  name: 'ZimKa',
  legalName: 'Zimmermann e Kauling Sistemas',
  tagline: 'APLICATIVOS • SISTEMAS • WEB',
  headline: 'Software que vende, opera e escala o seu negócio',
  lead: 'Apps, sistemas e web sob medida — da ideia ao produto no ar, com qualidade de quem já entrega em saúde, varejo e eventos.',
  email: 'contato@zimka.com.br',
  mailto: 'mailto:contato@zimka.com.br',
} as const

export type Product = {
  id: string
  name: string
  eyebrow: string
  summary: string
  points: string[]
  images: { src: string; alt: string }[]
  /** Logos escuros / fundo transparente: painel claro para contraste */
  imageSurface?: 'light'
  href?: string
  hrefLabel?: string
}

export const products: Product[] = [
  {
    id: 'glicodose',
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
    href: 'https://glicodose.app',
    hrefLabel: 'Ver o GlicoDose',
  },
  {
    id: 'montagem-de-mesa',
    name: 'Montagem de Mesa',
    eyebrow: 'Mesa posta · SaaS',
    summary:
      'O cliente monta a mesa sozinho, vê o resultado na hora e envia o pedido pronto — você recebe o lead no painel.',
    points: [
      'Link e catálogo próprios da loja',
      'Pré-visualização ao vivo da mesa',
      'Pedido pronto por e-mail e WhatsApp',
      'Histórico de montagens no painel',
    ],
    images: [
      {
        src: '/media/montagem-de-mesa.png',
        alt: 'Pré-visualização de uma mesa posta montada no app',
      },
    ],
  },
  {
    id: 'quiosque',
    name: 'Quiosque de Feira',
    eyebrow: 'Totem touchscreen',
    summary:
      'Capture leads na feira com totem 100% da sua marca: teclado virtual, campos sob medida e dados online ou offline.',
    points: [
      'Pronto para tela touch no evento',
      'Co-branding com logos e QR',
      'Formulário sob medida ao público',
      'Dados na nuvem ou CSV local',
    ],
    imageSurface: 'light',
    images: [
      {
        src: '/media/kiosk-brand-a.png',
        alt: 'Exemplo de marca em quiosque de feira',
      },
      {
        src: '/media/kiosk-brand-b.png',
        alt: 'Exemplo de co-branding em quiosque',
      },
      {
        src: '/media/kiosk-brand-c.png',
        alt: 'Exemplo de marca parceira em quiosque',
      },
    ],
  },
]

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
