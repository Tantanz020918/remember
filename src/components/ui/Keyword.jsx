import { useStore } from '../../store'

export function Keyword({ children }) {
  const mode = useStore((s) => s.highlightMode)
  if (mode === 'off') return <span>{children}</span>
  if (mode === 'bold') return <span className="font-bold">{children}</span>
  // full: bold + yellow highlight
  return <span className="font-bold bg-yellow-200/80 rounded">{children}</span>
}
