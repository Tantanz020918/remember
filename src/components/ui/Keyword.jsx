import { useStore } from '../../store'

export function Keyword({ children }) {
  const bold = useStore((s) => s.boldKeywords)
  return (
    <span
      className={bold ? 'font-bold' : ''}
    >
      {children}
    </span>
  )
}
