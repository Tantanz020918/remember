import { useState } from 'react'
import { useStore, TOTAL_PAGES } from '../store'
import { useGameNavigate } from '../hooks/useGameNavigate'
import { useCurrentPage } from '../hooks/useCurrentPage'
import { PAGES } from '../pages/registry'

export function TopBar() {
  const { visited, boldKeywords, toggleBold } = useStore()
  const navigate = useGameNavigate()
  const pageId = useCurrentPage()
  const [open, setOpen] = useState(false)
  const current = PAGES[pageId]

  return (
    <div className="relative h-7 bg-neutral-900/70 backdrop-blur-xl flex items-center justify-between px-4 text-white text-[13px] z-[100]">
      <div className="flex items-center gap-4">
        <span className="text-sm"></span>
        <span className="font-bold">{current?.title || '桌面'}</span>
        <span className="cursor-pointer opacity-90 hover:opacity-100">文件</span>
        <span className="cursor-pointer opacity-90 hover:opacity-100">编辑</span>
        <span className="cursor-pointer opacity-90 hover:opacity-100">视图</span>
      </div>
      <div className="flex items-center gap-4 relative">
        <span className="cursor-pointer opacity-90 hover:opacity-100" onClick={toggleBold}>
          {boldKeywords ? '🔆 高亮：开' : '🔅 高亮：关'}
        </span>
        <span
          className="cursor-pointer bg-white/10 px-2 py-0.5 rounded w-[100px] text-center tabular-nums"
          onClick={() => setOpen(!open)}
        >
          页面 {pageId}/{TOTAL_PAGES} ▾
        </span>
        <span className="tabular-nums">4/15 周三</span>
        {open && (
          <div
            className="absolute top-8 right-28 w-72 bg-neutral-800/95 backdrop-blur-xl border border-white/10 rounded-lg py-1.5 max-h-96 overflow-y-auto z-[200]"
            onMouseLeave={() => setOpen(false)}
          >
            <div className="px-3 py-1.5 text-[11px] text-white/50 uppercase">
              已访问页面
            </div>
            {visited.map((id) => (
              <div
                key={id}
                className={`px-3 py-1.5 cursor-pointer truncate ${
                  id === pageId ? 'bg-sky-600/60' : 'hover:bg-white/10'
                }`}
                onClick={() => {
                  navigate(id)
                  setOpen(false)
                }}
              >
                {id}. {PAGES[id]?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
