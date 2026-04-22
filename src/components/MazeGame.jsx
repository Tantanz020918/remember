import { useState, useCallback, useMemo, useRef } from 'react'

function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

const BUTTERFLY_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: seededRandom(i) * 100,
  delay: seededRandom(i + 100) * 1.2,
  duration: 2.5 + seededRandom(i + 200) * 2.5,
  size: 14 + seededRandom(i + 300) * 18,
  drift: (seededRandom(i + 400) - 0.5) * 40, // horizontal wobble in vw
}))

// Total life of a butterfly = max(delay + duration). Reset guard after this.
const BUTTERFLY_LIFE_MS = 4000

function ButterflyParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3000] overflow-hidden">
      {BUTTERFLY_PARTICLES.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: '-30px',
            fontSize: b.size,
            animation: `butterflyRise ${b.duration}s ${b.delay}s ease-out forwards`,
            '--drift': `${b.drift}vw`,
          }}
        >
          🦋
        </div>
      ))}
      <style>{`
        @keyframes butterflyRise {
          0%   { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--drift), -110vh); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

const COLS = 20
const ROWS = 12

const CORRECT_PATH = [[1,0],[1,1],[1,2],[1,3],[1,4],[2,4],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[3,4],[3,6],[3,14],[4,1],[4,2],[4,3],[4,4],[4,6],[4,7],[4,8],[4,9],[4,14],[4,16],[4,17],[4,18],[4,19],[5,1],[5,9],[5,14],[5,16],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,14],[6,16],[6,17],[6,18],[7,14],[7,18],[8,14],[8,15],[8,16],[8,17],[8,18]]
const DECOY_PATH = [[0,2],[0,6],[0,7],[0,8],[0,9],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,18],[1,9],[1,11],[1,16],[1,18],[2,16],[2,17],[2,18],[2,19],[3,1],[4,11],[4,12],[5,11],[6,11],[7,3],[7,7],[7,11],[8,1],[8,2],[8,3],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,19],[9,0],[9,1],[9,6],[9,12],[9,16],[9,19],[10,1],[10,2],[10,3],[10,4],[10,8],[10,9],[10,10],[10,12],[10,13],[10,14],[10,15],[10,19],[11,4],[11,5],[11,6],[11,7],[11,8],[11,12],[11,16],[11,17],[11,19]]
const ALL_OPEN = [...CORRECT_PATH, ...DECOY_PATH]
const ENTRANCES = [{ r: 1, c: 0, side: 'left' }, { r: 4, c: 19, side: 'right' }]

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
  for (const { r, c, side } of ENTRANCES) {
    const k = `${r},${c}`
    if (map[k]) map[k][side] = true
  }
  return map
}

const CORRECT_SET = new Set(CORRECT_PATH.map(([r, c]) => `${r},${c}`))

export function MazeGame({ onComplete }) {
  const [selected, setSelected] = useState(new Set())
  const [butterflies, setButterflies] = useState(false)
  const butterflyTimer = useRef(null)
  const dragging = useRef(false)
  const dragMode = useRef('add')
  const dragVisited = useRef(new Set())

  const wallMap = useMemo(() => buildWallMap(ALL_OPEN), [])

  const key = (r, c) => `${r},${c}`

  const checkComplete = useCallback((sel) => {
    if (sel.size !== CORRECT_SET.size) return false
    for (const k of CORRECT_SET) {
      if (!sel.has(k)) return false
    }
    for (const k of sel) {
      if (!CORRECT_SET.has(k)) return false
    }
    return true
  }, [])

  const triggerButterflies = useCallback(() => {
    // While butterflies are flying, skip re-triggering.
    if (butterflyTimer.current) return
    setButterflies(true)
    setTimeout(() => onComplete?.(), 100)
    butterflyTimer.current = setTimeout(() => {
      setButterflies(false)
      butterflyTimer.current = null
    }, BUTTERFLY_LIFE_MS)
  }, [onComplete])

  const updateSelected = useCallback((updater) => {
    setSelected((prev) => {
      const next = updater(prev)
      // Fire every time the path transitions from incorrect → correct,
      // so the toast replays after reset/redraw (not just the first time).
      if (!checkComplete(prev) && checkComplete(next)) {
        triggerButterflies()
      }
      return next
    })
  }, [checkComplete, triggerButterflies])

  const handleDown = useCallback((r, c) => {
    dragging.current = true
    dragVisited.current = new Set()
    const k = key(r, c)
    updateSelected((prev) => {
      dragMode.current = prev.has(k) ? 'remove' : 'add'
      const next = new Set(prev)
      if (dragMode.current === 'add') next.add(k); else next.delete(k)
      dragVisited.current.add(k)
      return next
    })
  }, [updateSelected])

  const handleEnter = useCallback((r, c) => {
    if (!dragging.current) return
    const k = key(r, c)
    if (dragVisited.current.has(k)) return
    dragVisited.current.add(k)
    updateSelected((prev) => {
      const next = new Set(prev)
      if (dragMode.current === 'add') next.add(k); else next.delete(k)
      return next
    })
  }, [updateSelected])

  const handleUp = useCallback(() => { dragging.current = false }, [])

  const cellBorder = (r, c) => {
    const k = key(r, c)
    const w = wallMap[k]
    if (!w) return {}
    const bc = '#999'
    const no = 'transparent'
    return {
      borderTopColor: w.top ? no : bc,
      borderBottomColor: w.bottom ? no : bc,
      borderLeftColor: w.left ? no : bc,
      borderRightColor: w.right ? no : bc,
    }
  }

  const isEntrance = (r, c) => r === 1 && c === 0
  const isExit = (r, c) => r === 4 && c === 19

  return (
    <div onPointerUp={handleUp} onPointerLeave={handleUp} className="select-none flex flex-col items-center">
        {butterflies && <ButterflyParticles />}
        <button onClick={() => setSelected(new Set())} className="px-3 py-1 bg-neutral-200 rounded text-xs cursor-pointer">重置</button>
        <span className="text-md mt-2">🦋小蝴蝶迷路了，你可以帮她找到正确的路吗？🦋</span>
        <span className="text-neutral-400 text-xs mt-2">点击或拖拽标记路径 · 🚩入口在左侧，🏁出口在右侧</span>
      <div
        className="inline-grid touch-none bg-white border border-neutral-300 rounded mt-4"
        style={/** @type {React.CSSProperties} */ ({
          '--maze-cell': `min(28px, calc((100vw - 40px) / ${COLS}))`,
          gridTemplateColumns: `repeat(${COLS}, var(--maze-cell))`,
          gridTemplateRows: `repeat(${ROWS}, var(--maze-cell))`,
        })}
      >
        {Array.from({ length: ROWS }, (_, r) =>
          Array.from({ length: COLS }, (_, c) => {
            const k = key(r, c)
            const isSel = selected.has(k)
            const borders = cellBorder(r, c)
            return (
              <div
                key={k}
                onPointerDown={(e) => {
                  e.preventDefault()
                  // Touch pointers are implicitly captured on pointerdown, which
                  // stops subsequent pointerenter events from firing on sibling
                  // cells during the drag. Release so the drag-over path works.
                  try { e.currentTarget.releasePointerCapture(e.pointerId) } catch { /* no-op */ }
                  handleDown(r, c)
                }}
                onPointerEnter={() => handleEnter(r, c)}
                className="cursor-pointer flex items-center justify-center text-[10px]"
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  ...borders,
                  backgroundColor: isSel ? '#fbcfe8' : '#fff',
                }}
              >
                {isEntrance(r, c) && '🚩'}
                {isExit(r, c) && '🏁'}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
