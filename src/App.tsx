import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowWeWork } from './components/HowWeWork'
import { Products } from './components/Products'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
