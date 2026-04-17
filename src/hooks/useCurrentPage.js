import { useLocation } from 'react-router-dom'
import { PATH_TO_ID } from '../pages/registry'

export function useCurrentPage() {
  const { pathname } = useLocation()
  const relativePath = pathname.replace(/^\//, '')
  if (!relativePath) return 1
  return PATH_TO_ID[relativePath] || 1
}
