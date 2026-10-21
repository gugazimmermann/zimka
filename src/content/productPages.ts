export type ProductPageContent = {
  path: string
  eyebrow: string
  name: string
  lead: string
  seoTitle: string
  seoDescription: string
  galleryEyebrow: string
  galleryTitle: string
  stepsTitle: string
  benefitsTitle: string
  benefits: string[]
  steps: { title: string; body: string }[]
  gallery: { src: string; alt: string; caption: string }[]
  heroImage: { src: string; alt: string }
  cta: string
  ctaSub: string
  socialLine?: string
  /** Case ao vivo (ex.: site do cliente ou app) */
  exampleUrl?: string
  exampleLabel?: string
}

export const glicodosePage: ProductPageContent = {
  path: '/glicodose',
  eyebrow: 'Saúde digital',
  name: 'GlicoDose',
  lead: 'Dose com apoio inteligente, histórico pronto para a consulta e visão da rede para o município — tudo no mesmo ecossistema.',
  seoTitle: 'GlicoDose — diabetes com clareza | ZimKa',
  seoDescription:
    'App e painéis para diabetes: refeição, glicose, dose, consulta e rede municipal. Conheça o GlicoDose, feito pela ZimKa.',
  galleryEyebrow: 'Na prática',
  galleryTitle: 'Telas reais do produto',
  stepsTitle: 'Do dia a dia ao painel',
  benefitsTitle: 'O que muda no cuidado',
  benefits: [
    'Refeição por texto, foto ou voz — sem fricção no cotidiano',
    'Glicose na dose: manual, sensor ou apps de saúde',
    'Consulta com histórico, alertas e prescrição prontos',
    'Painel municipal com adesão e relatórios da rede',
  ],
  steps: [
    {
      title: 'Paciente registra',
      body: 'Refeições e glicose no app, no ritmo do dia a dia.',
    },
    {
      title: 'Dose com contexto',
      body: 'Apoio inteligente com o histórico que importa.',
    },
    {
      title: 'Rede enxerga',
      body: 'Médico e município acompanham adesão e resultados.',
    },
  ],
  heroImage: {
    src: '/media/glicodose-meal.webp',
    alt: 'Tela do GlicoDose com registro de refeição por foto',
  },
  gallery: [
    {
      src: '/media/glicodose-dose.webp',
      alt: 'Tela de dose de insulina no GlicoDose',
      caption: 'Dose com contexto',
    },
    {
      src: '/media/glicodose-medicos.webp',
      alt: 'Portal médico do GlicoDose com gráficos',
      caption: 'Portal médico e rede',
    },
  ],
  cta: 'Quer levar o GlicoDose para a sua rede?',
  ctaSub: 'Conversa rápida. Proposta alinhada ao seu contexto.',
  socialLine: 'Em produção em saúde digital.',
  exampleUrl: 'https://glicodose.app',
  exampleLabel: 'Ver o app',
}

export const montagemPage: ProductPageContent = {
  path: '/montagem-de-mesa',
  eyebrow: 'Para lojas de mesa posta',
  name: 'Montagem de Mesa',
  lead: 'O cliente monta a mesa sozinho, vê o resultado na hora e manda o pedido pronto. Você fecha mais rápido.',
  seoTitle: 'Montagem de Mesa — o cliente monta, você fecha | ZimKa',
  seoDescription:
    'SaaS para lojas de mesa posta: catálogo próprio, preview ao vivo e pedidos por WhatsApp e e-mail. Feito pela ZimKa.',
  galleryEyebrow: 'Na prática',
  galleryTitle: 'Telas reais do sistema',
  stepsTitle: 'Do link ao pedido',
  benefitsTitle: 'O que muda no seu atendimento',
  benefits: [
    'Menos tempo explicando peça por peça no balcão ou no WhatsApp',
    'Preview ao vivo: o cliente vê a mesa antes de decidir',
    'Pedido chega montado — por e-mail ou WhatsApp',
    'Catálogo e link com a cara da sua loja',
    'Histórico de montagens no painel para acompanhar leads',
  ],
  steps: [
    {
      title: 'Publique o catálogo',
      body: 'Fotos, categorias e layout. Em minutos o link da loja está no ar.',
    },
    {
      title: 'O cliente monta',
      body: 'No celular ou no PC, escolhe as peças e vê a mesa atualizar na hora.',
    },
    {
      title: 'Você recebe e fecha',
      body: 'Lead no painel com a composição pronta — é só confirmar o pedido.',
    },
  ],
  heroImage: {
    src: '/media/montagem/ui-mesa-montada.webp',
    alt: 'App Montagem de Mesa com preview da mesa e catálogo de toalhas',
  },
  gallery: [
    {
      src: '/media/montagem/ui-interacao.webp',
      alt: 'Seleção de pratos e toalha com preview da mesa atualizado',
      caption: 'Cliente escolhe as peças',
    },
    {
      src: '/media/montagem/ui-envio.webp',
      alt: 'Modal de envio da montagem por WhatsApp',
      caption: 'Pedido pronto no WhatsApp',
    },
  ],
  cta: 'Coloque o link da sua loja no ar',
  ctaSub: 'Peça uma proposta. Alinhamos prazo, escopo e orçamento.',
  socialLine: 'Feito para lojas de mesa posta em produção.',
}

export const quiosquePage: ProductPageContent = {
  path: '/quiosque-de-feira',
  eyebrow: 'Totem para feiras e eventos',
  name: 'Quiosque de Feira',
  lead: 'Totem com a sua marca: o visitante digita, envia — e o lead cai na sua base. Online ou offline.',
  seoTitle: 'Quiosque de Feira — totem que captura leads | ZimKa',
  seoDescription:
    'Aplicativo de totem touchscreen para feiras: teclado virtual, co-branding e leads online ou offline. Customizado pela ZimKa.',
  galleryEyebrow: 'Na prática',
  galleryTitle: 'Telas reais do totem',
  stepsTitle: 'Do briefing ao totem ligado',
  benefitsTitle: 'Feito para o chão de feira',
  benefits: [
    'Teclado virtual — sem teclado físico, sem fricção',
    'Marca, logos e QR do evento (e dos parceiros)',
    'Campos sob medida: noivas, B2B ou o que a feira pedir',
    'Nuvem ou CSV local se a rede cair',
    'Cada feira ganha app próprio, não um template genérico',
  ],
  steps: [
    {
      title: 'Customizamos o totem',
      body: 'Identidade, campos e fluxo alinhados ao seu evento e às marcas parceiras.',
    },
    {
      title: 'Visitante preenche na tela',
      body: 'Touch + teclado virtual. Em segundos o cadastro está feito.',
    },
    {
      title: 'Lead na sua mão',
      body: 'Confirmação na hora; dados na nuvem ou CSV — você escolhe.',
    },
  ],
  heroImage: {
    src: '/media/quiosque/form-tania-teclado.webp',
    alt: 'Quiosque de feira com formulário touch e teclado virtual',
  },
  gallery: [
    {
      src: '/media/quiosque/form-noivas.webp',
      alt: 'Formulário de leads para feira de noivas com co-branding',
      caption: 'Formulário co-branded',
    },
    {
      src: '/media/quiosque/form-tania-teclado.webp',
      alt: 'Totem B2B com teclado virtual aberto',
      caption: 'Teclado virtual na tela',
    },
    {
      src: '/media/quiosque/sucesso.webp',
      alt: 'Tela de confirmação após envio do lead no totem',
      caption: 'Confirmação na hora',
    },
  ],
  cta: 'Próxima feira com totem da sua marca?',
  ctaSub: 'Montamos, customizamos e deixamos pronto para o evento.',
  socialLine: 'Já rodou em feiras com co-branding real.',
}

export const websitesPage: ProductPageContent = {
  path: '/websites',
  eyebrow: 'Case Raffiner · sites sob medida',
  name: 'Websites',
  lead: 'Site com a cara da sua marca: visitante vê o produto, fala no WhatsApp e pede. No ar, rápido e feito para converter.',
  seoTitle: 'Websites sob medida — case Raffiner | ZimKa',
  seoDescription:
    'Sites institucionais e comerciais sob medida. Veja o case Raffiner: marca, catálogo, WhatsApp e conversão. Feito pela ZimKa.',
  galleryEyebrow: 'Na prática',
  galleryTitle: 'O site no ar',
  stepsTitle: 'Do briefing ao site no ar',
  benefitsTitle: 'O que o site entrega',
  benefits: [
    'Identidade visual alinhada à marca — tipografia, cores e fotos',
    'CTAs claros: WhatsApp, catálogo e contato na primeira dobra',
    'Seções que contam a história e empurram a conversão',
    'Responsivo, rápido e pronto para SEO básico',
    'Publicação e ajustes com a ZimKa até o go-live',
  ],
  steps: [
    {
      title: 'Briefing e marca',
      body: 'Tom, público e objetivos. Definimos o que o site precisa vender.',
    },
    {
      title: 'Design e conteúdo',
      body: 'Layout, textos e imagens. A marca ganha presença na tela.',
    },
    {
      title: 'No ar e convertendo',
      body: 'Publicamos, medimos e ajustamos — visitante vira lead ou pedido.',
    },
  ],
  heroImage: {
    src: '/media/websites/hero.webp',
    alt: 'Home do site Raffiner com hero, catálogo e botão WhatsApp',
  },
  gallery: [
    {
      src: '/media/websites/destaque.webp',
      alt: 'Mesa posta em destaque no site Raffiner',
      caption: 'Visual que vende',
    },
    {
      src: '/media/websites/secoes.webp',
      alt: 'Seção de vídeo YouTube e bloco Monte sua mesa no site Raffiner',
      caption: 'Conteúdo que engaja',
    },
  ],
  cta: 'Quer um site assim para a sua marca?',
  ctaSub: 'Briefing curto. Proposta alinhada ao prazo e ao orçamento.',
  socialLine: 'Case em produção: raffiner.com.br',
  exampleUrl: 'https://www.raffiner.com.br/',
  exampleLabel: 'Ver raffiner.com.br',
}
