import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
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
      <Routes>
        <Route path="/" element={<HomeShell />} />
        <Route path="/montagem-de-mesa" element={<MontagemDeMesaPage />} />
        <Route path="/quiosque-de-feira" element={<QuiosqueDeFeiraPage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
