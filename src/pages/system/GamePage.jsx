import { useEffect } from 'react'
import { useStore } from '../../store'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { PAGES } from '../registry'
import { AppWindow } from '../../components/AppWindow'

export function GamePage() {
  const pageId = useCurrentPage()
  const page = PAGES[pageId]
  const addVisited = useStore((s) => s.addVisited)

  useEffect(() => {
    addVisited(pageId)
  }, [pageId, addVisited])

  if (!page || pageId === 1) return null

  return (
    <AppWindow title={page.title} appType={page.appType}>
      {page.render()}
    </AppWindow>
  )
}
