import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, TOTAL_PAGES, HIGHLIGHT_MODES, HIGHLIGHT_LABELS, HINT_MODES, HINT_LABELS } from '../store'
import { useGameNavigate } from '../hooks/useGameNavigate'
import { useCurrentPage } from '../hooks/useCurrentPage'
import { PAGES } from '../pages/registry'
import { PageId, isExtraPage, pageLabel } from '../pages/pageIds'
import { Modal } from './ui'

export function TopBar() {
  const { visited, highlightMode, hintMode, setFlag, resetGame } = useStore()
  const gameNavigate = useGameNavigate()
  const routerNavigate = useNavigate()
  const pageId = useCurrentPage()
  const [open, setOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [sortMode, setSortMode] = useState('time') // 'time' | 'id'
  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const current = PAGES[pageId]

  const settingsRef = useRef(/** @type {HTMLDivElement | null} */ (null))
  const pageListRef = useRef(/** @type {HTMLDivElement | null} */ (null))

  useEffect(() => {
    if (!open && !settingsOpen) return
    const onDocDown = (/** @type {Event} */ e) => {
      const target = /** @type {Node} */ (e.target)
      if (settingsOpen && settingsRef.current && !settingsRef.current.contains(target)) {
        setSettingsOpen(false)
      }
      if (open && pageListRef.current && !pageListRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocDown)
    document.addEventListener('touchstart', onDocDown)
    return () => {
      document.removeEventListener('mousedown', onDocDown)
      document.removeEventListener('touchstart', onDocDown)
    }
  }, [open, settingsOpen])

  const sortedVisited = sortMode === 'id'
    ? [...visited].sort((a, b) => a - b)
    : visited

  const handleReset = () => {
    resetGame()
    setShowResetConfirm(false)
    setSettingsOpen(false)
    gameNavigate(PageId.DESKTOP)
  }

  const inApp = pageId !== PageId.DESKTOP

  return (
    <div
      className="relative h-7 bg-neutral-900/70 backdrop-blur-xl flex items-center justify-between px-1.5 md:px-4 text-white text-[11px] md:text-[13px] z-[100] gap-1.5"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)', height: 'calc(28px + env(safe-area-inset-top, 0px))' }}
    >
      <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
        {/* Mobile in-app: back + home buttons replace title. Desktop keeps title + menus. */}
        {inApp && (
          <>
            <button
              onClick={() => routerNavigate(-1)}
              className="md:hidden bg-transparent border-none text-white text-base leading-none cursor-pointer px-1"
              title="返回"
            >
              ←
            </button>
            <button
              onClick={() => gameNavigate(PageId.DESKTOP)}
              className="md:hidden bg-transparent border-none text-white text-sm leading-none cursor-pointer px-1"
              title="回到桌面"
            >
              🏠
            </button>
          </>
        )}
        <span className="font-bold truncate hidden md:inline">{current?.title || '桌面'}</span>
        <span className="hidden md:inline cursor-pointer opacity-90 hover:opacity-100">文件</span>
        <span className="hidden md:inline cursor-pointer opacity-90 hover:opacity-100">编辑</span>
        <span className="hidden md:inline cursor-pointer opacity-90 hover:opacity-100">视图</span>
      </div>
      <div className="flex items-center gap-1.5 md:gap-4 relative shrink-0">
        <div ref={settingsRef} className="relative">
          <span
            className="cursor-pointer opacity-90 hover:opacity-100 whitespace-nowrap"
            onClick={() => setSettingsOpen((v) => !v)}
          >
            ⚙ 设置 ▾
          </span>
          {settingsOpen && (
            <div className="absolute top-8 right-0 w-56 md:w-64 bg-neutral-800/95 backdrop-blur-xl border border-white/10 rounded-lg py-2 z-[200]">
              <div className="px-3 py-1 text-[11px] text-white/50 uppercase">关键词高亮</div>
              {HIGHLIGHT_MODES.map((m) => (
                <div
                  key={m}
                  className={`px-3 py-1.5 text-xs cursor-pointer ${
                    m === highlightMode ? 'bg-sky-600/60' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setFlag('highlightMode', m)}
                >
                  {HIGHLIGHT_LABELS[m]}
                </div>
              ))}
              <div className="border-t border-white/10 my-1" />
              <div className="px-3 py-1 text-[11px] text-white/50 uppercase">密码锁错误提示</div>
              {HINT_MODES.map((m) => (
                <div
                  key={m}
                  className={`px-3 py-1.5 text-xs cursor-pointer ${
                    m === hintMode ? 'bg-sky-600/60' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setFlag('hintMode', m)}
                >
                  {HINT_LABELS[m]}
                </div>
              ))}
              <div className="border-t border-white/10 my-1" />
              <div
                className="px-3 py-1.5 text-xs text-red-300 cursor-pointer hover:bg-red-500/20"
                onClick={() => {
                  setSettingsOpen(false)
                  setShowResetConfirm(true)
                }}
              >
                🗑 清除数据
              </div>
            </div>
          )}
        </div>
        <div ref={pageListRef} className="relative">
          <span
            className="cursor-pointer bg-white/10 px-1.5 md:px-2 py-0.5 rounded w-[58px] md:w-[110px] text-center tabular-nums whitespace-nowrap inline-block"
            onClick={() => setOpen((v) => !v)}
          >
            {isExtraPage(pageId) ? (
              <>
                <span className="md:hidden">{pageLabel(pageId)} ▾</span>
                <span className="hidden md:inline">{pageLabel(pageId)} ▾</span>
              </>
            ) : (
              <>
                <span className="md:hidden">{pageId}/{TOTAL_PAGES} ▾</span>
                <span className="hidden md:inline">页面 {pageId}/{TOTAL_PAGES} ▾</span>
              </>
            )}
          </span>
          {open && (
            <div className="absolute top-8 right-0 w-64 md:w-72 bg-neutral-800/95 backdrop-blur-xl border border-white/10 rounded-lg py-1.5 max-h-[70vh] md:max-h-96 overflow-y-auto z-[200]">
              <div className="px-3 py-1.5 flex justify-between items-center text-[11px] text-white/50">
                <span className="uppercase">已访问页面</span>
                <span
                  className="cursor-pointer text-sky-300 hover:text-sky-200 normal-case"
                  onClick={() => setSortMode(sortMode === 'time' ? 'id' : 'time')}
                >
                  {sortMode === 'time' ? '按时间 ⇅' : '按编号 ⇅'}
                </span>
              </div>
              {sortedVisited.map((id) => (
                <div
                  key={id}
                  className={`px-3 py-1.5 cursor-pointer truncate ${
                    id === pageId ? 'bg-sky-600/60' : 'hover:bg-white/10'
                  }`}
                  onClick={() => {
                    gameNavigate(id)
                    setOpen(false)
                  }}
                >
                  {pageLabel(id)}. {PAGES[id]?.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <span className="hidden md:inline tabular-nums">4/15 周三</span>
      </div>

      {showResetConfirm && (
        <Modal onClose={() => setShowResetConfirm(false)} usePortal zIndexClass="z-[2000]">
          <div className="bg-white text-neutral-800 rounded-lg shadow-2xl p-6 max-w-[80%] w-full mx-auto">
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
        </Modal>
      )}
    </div>
  )
}
