import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Ao mudar de rota (pathname), volta o scroll ao topo. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
