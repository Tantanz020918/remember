import { useState, useCallback, useMemo, useRef } from 'react'

const COLS = 20
const ROWS = 12

const CORRECT_PATH = [[1,0],[1,1],[1,2],[1,3],[1,4],[2,4],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[3,4],[3,6],[3,14],[4,1],[4,2],[4,3],[4,4],[4,6],[4,7],[4,8],[4,9],[4,14],[4,16],[4,17],[4,18],[4,19],[5,1],[5,9],[5,14],[5,16],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,14],[6,16],[6,17],[6,18],[7,14],[7,18],[8,14],[8,15],[8,16],[8,17],[8,18]]

const DECOY_PATH = [[0,2],[0,6],[0,7],[0,8],[0,9],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,18],[1,9],[1,11],[1,16],[1,18],[2,16],[2,17],[2,18],[2,19],[3,1],[4,11],[4,12],[5,11],[6,11],[7,3],[7,7],[7,11],[8,1],[8,2],[8,3],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,19],[9,0],[9,1],[9,6],[9,12],[9,16],[9,19],[10,1],[10,2],[10,3],[10,4],[10,8],[10,9],[10,10],[10,12],[10,13],[10,14],[10,15],[10,19],[11,4],[11,5],[11,6],[11,7],[11,8],[11,12],[11,16],[11,17],[11,19]]

// Entrances: open the outer wall
const ENTRANCES = [
  { r: 1, c: 0, side: 'left' },    // left edge entrance
  { r: 4, c: 19, side: 'right' },  // right edge exit
]

const ALL_OPEN = [...CORRECT_PATH, ...DECOY_PATH]

function buildWallMap(cells) {
  const openSet = new Set(cells.map(([r, c]) => `${r},${c}`))
  const map = {}
  for (const [r, c] of cells) {
    const k = `${r},${c}`
    map[k] = {
      top: openSet.has(`${r - 1},${c}`),
      bottom: openSet.has(`${r + 1},${c}`),
      left: openSet.has(`${r},${c - 1}`),
      right: openSet.has(`${r},${c + 1}`),
    }
  }
  // Open entrance/exit outer walls
  for (const { r, c, side } of ENTRANCES) {
    const k = `${r},${c}`
    if (map[k]) map[k][side] = true
  }
  return map
}

export function MazeEditor() {
  const [selected, setSelected] = useState(new Set())
  const [showPath, setShowPath] = useState(false)
  const dragging = useRef(false)
  const dragMode = useRef('add') // 'add' or 'remove'
  const dragVisited = useRef(new Set())

  const wallMap = useMemo(() => buildWallMap(ALL_OPEN), [])
  const correctSet = useMemo(() => new Set(CORRECT_PATH.map(([r, c]) => `${r},${c}`)), [])
  const decoySet = useMemo(() => new Set(DECOY_PATH.map(([r, c]) => `${r},${c}`)), [])

  const key = (r, c) => `${r},${c}`

  const handlePointerDown = useCallback((r, c) => {
    dragging.current = true
    dragVisited.current = new Set()
    const k = key(r, c)
    setSelected((prev) => {
      dragMode.current = prev.has(k) ? 'remove' : 'add'
      const next = new Set(prev)
      if (dragMode.current === 'add') next.add(k)
      else next.delete(k)
      dragVisited.current.add(k)
      return next
    })
  }, [])

  const handlePointerEnter = useCallback((r, c) => {
    if (!dragging.current) return
    const k = key(r, c)
    if (dragVisited.current.has(k)) return
    dragVisited.current.add(k)
    setSelected((prev) => {
      const next = new Set(prev)
      if (dragMode.current === 'add') next.add(k)
      else next.delete(k)
      return next
    })
  }, [])

  const handlePointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  const reset = () => setSelected(new Set())

  const cellBorder = (r, c) => {
    const k = key(r, c)
    const w = wallMap[k]
    if (!w) return {}

    const borderColor = '#555'
    const noBorder = 'transparent'
    return {
      borderTopColor: w.top ? noBorder : borderColor,
      borderBottomColor: w.bottom ? noBorder : borderColor,
      borderLeftColor: w.left ? noBorder : borderColor,
      borderRightColor: w.right ? noBorder : borderColor,
    }
  }

  return (
    <div
      className="min-h-screen bg-neutral-900 text-white p-6 select-none"
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <h1 className="text-xl font-bold mb-4">迷宫 · {COLS}×{ROWS}</h1>
      <div className="flex gap-3 mb-4">
        <button onClick={reset} className="px-4 py-2 bg-red-600 rounded text-sm cursor-pointer">
          重置
        </button>
        <button
          onClick={() => setShowPath(!showPath)}
          className="px-4 py-2 bg-amber-600 rounded text-sm cursor-pointer"
        >
          {showPath ? '隐藏路径' : '显示路径'}
        </button>
        <span className="text-neutral-400 text-sm self-center">
          已选 {selected.size} 格 · 拖拽可批量选点
        </span>
      </div>

      <div
        className="inline-grid bg-neutral-800 touch-none"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 36px)`,
          gridTemplateRows: `repeat(${ROWS}, 36px)`,
        }}
      >
        {Array.from({ length: ROWS }, (_, r) =>
          Array.from({ length: COLS }, (_, c) => {
            const k = key(r, c)
            const isCorrect = correctSet.has(k)
            const isDecoy = decoySet.has(k)
            const isSelected = selected.has(k)
            const borders = cellBorder(r, c)

            let bg = '#262626'
            let fg = '#555'
            if (isSelected) { bg = '#fbcfe8'; fg = '#9d174d' }
            else if (showPath && isCorrect) { bg = 'rgba(251, 207, 232, 0.35)'; fg = '#888' }
            else if (showPath && isDecoy) { bg = 'rgba(147, 197, 253, 0.2)'; fg = '#888' }

            return (
              <div
                key={k}
                onPointerDown={(e) => { e.preventDefault(); handlePointerDown(r, c) }}
                onPointerEnter={() => handlePointerEnter(r, c)}
                className="cursor-pointer flex items-center justify-center text-[9px]"
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#555',
                  ...borders,
                  backgroundColor: bg,
                  color: fg,
                }}
              >
                {showPath ? `${r},${c}` : ''}
              </div>
            )
          })
        )}
      </div>

      <div className="mt-4">
        <div className="text-sm text-neutral-400 mb-1">点击的坐标：</div>
        <pre className="bg-neutral-800 p-3 rounded text-xs max-h-40 overflow-auto text-green-400">
          {JSON.stringify(
            [...selected]
              .map((s) => s.split(',').map(Number))
              .sort((a, b) => a[0] - b[0] || a[1] - b[1])
          )}
        </pre>
      </div>
    </div>
  )
}
