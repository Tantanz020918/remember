import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useStore, TOTAL_PAGES, HIGHLIGHT_LABELS } from '../store'
import { useGameNavigate } from '../hooks/useGameNavigate'
import { useCurrentPage } from '../hooks/useCurrentPage'
import { PAGES } from '../pages/registry'

export function TopBar() {
  const { visited, highlightMode, cycleHighlight, resetGame } = useStore()
  const navigate = useGameNavigate()
  const pageId = useCurrentPage()
  const [open, setOpen] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const current = PAGES[pageId]

  const handleReset = () => {
    resetGame()
    setShowResetConfirm(false)
    navigate(1)
  }

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
        <span
          className="cursor-pointer opacity-90 hover:opacity-100 hover:text-red-300"
          title="清除所有游戏数据"
          onClick={() => setShowResetConfirm(true)}
        >
          🗑 清除数据
        </span>
        <span
          className="cursor-pointer opacity-90 hover:opacity-100 w-[78px] text-center"
          title="点击切换高亮模式"
          onClick={cycleHighlight}
        >
          {HIGHLIGHT_LABELS[highlightMode]}
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

      {showResetConfirm && createPortal(
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2000]"
          onClick={() => setShowResetConfirm(false)}
        >
          <div
            className="bg-white text-neutral-800 rounded-lg shadow-2xl p-6 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-lg font-bold mb-2">⚠️ 清除数据</div>
            <div className="text-sm text-neutral-600 mb-5 leading-relaxed">
              点击后将删除所有记忆内容，从头开始游玩，确定吗？
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-1.5 rounded border border-neutral-300 text-sm cursor-pointer hover:bg-neutral-100"
                onClick={() => setShowResetConfirm(false)}
              >
                取消
              </button>
              <button
                className="px-4 py-1.5 rounded bg-red-500 text-white border-none text-sm cursor-pointer hover:bg-red-600"
                onClick={handleReset}
              >
                确定清除
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
