import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { PAGES } from '../pages/registry'

export function useGameNavigate() {
  const routerNavigate = useNavigate()
  const addVisited = useStore((s) => s.addVisited)

  return (pageId) => {
    addVisited(pageId)
    const page = PAGES[pageId]
    routerNavigate(page?.path ? `/${page.path}` : '/')
  }
}
