import { cpSync, mkdirSync } from 'node:fs'

/** Rotas SPA que precisam de index.html físico no host estático. */
const rotas = ['montagem-de-mesa', 'quiosque-de-feira', 'websites']

for (const rota of rotas) {
  const dir = `dist/${rota}`
  mkdirSync(dir, { recursive: true })
  cpSync('dist/index.html', `${dir}/index.html`)
}
