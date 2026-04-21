import { useStore } from '../../store'

// Highlighter-marker style: yellow fills only the bottom 1/3 of the line height.
const HIGHLIGHT_STYLE = {
  background: 'linear-gradient(to top, rgba(254, 240, 138, 0.5) 33%, transparent 33%)',
}

export function Keyword({ children }) {
  const mode = useStore((s) => s.highlightMode)
  if (mode === 'off') return <span>{children}</span>
  if (mode === 'bold') return <span className="font-bold">{children}</span>
  // full: bold + highlighter-style underline
  return <span className="font-bold" style={HIGHLIGHT_STYLE}>{children}</span>
}
