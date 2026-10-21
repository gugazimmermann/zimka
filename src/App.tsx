import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { GlicoDosePage } from './pages/GlicoDosePage'
import { HomePage } from './pages/HomePage'
import { MontagemDeMesaPage } from './pages/MontagemDeMesaPage'
import { QuiosqueDeFeiraPage } from './pages/QuiosqueDeFeiraPage'
import { WebsitesPage } from './pages/WebsitesPage'

function HomeShell() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeShell />} />
        <Route path="/glicodose" element={<GlicoDosePage />} />
        <Route path="/montagem-de-mesa" element={<MontagemDeMesaPage />} />
        <Route path="/quiosque-de-feira" element={<QuiosqueDeFeiraPage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
