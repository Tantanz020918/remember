import { useGameNavigate } from '../hooks/useGameNavigate'
import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'

const SIZE_CLASSES = {
  browser: 'w-[1280px] max-w-[98vw] h-[calc(100vh-90px)]',
  wechat: 'w-[1000px] max-w-[96vw] h-[calc(100vh-130px)]',
  qq: 'w-[1000px] max-w-[96vw] h-[calc(100vh-130px)]',
  default: 'w-[960px] max-w-[96vw] h-[calc(100vh-130px)]',
}

const MOBILE_TOP = 'calc(28px + env(safe-area-inset-top, 0px))'
const MOBILE_BOTTOM = 'env(safe-area-inset-bottom, 0px)'

export function AppWindow({ title, appType = 'default', children }) {
  const gameNavigate = useGameNavigate()
  const routerNavigate = useNavigate()
  const isMobile = useIsMobile()
  const sizeClass = SIZE_CLASSES[appType] || SIZE_CLASSES.default

  if (isMobile) {
    // Mobile merges the window chrome into the global TopBar (back/home live there).
    return (
      <div
        className="absolute left-0 right-0 bg-white overflow-hidden flex flex-col z-10"
        style={{ top: MOBILE_TOP, bottom: MOBILE_BOTTOM }}
      >
        <div className="flex-1 overflow-hidden bg-white">{children}</div>
      </div>
    )
  }

  return (
    <div
      className={`absolute top-11 left-1/2 -translate-x-1/2 bg-white rounded-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col z-10 ${sizeClass}`}
    >
      <div className="h-8 bg-neutral-200 border-b border-neutral-300 flex items-center px-3 shrink-0">
        <div className="flex gap-1.5 w-16">
          <span
            className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer"
            title="关闭"
            onClick={() => gameNavigate(1)}
          />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" title="最小化" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" title="最大化" />
        </div>
        {appType === 'browser' && (
          <div className="flex gap-1 ml-2">
            <button
              onClick={() => routerNavigate(-1)}
              className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-300 text-neutral-500 text-sm cursor-pointer bg-transparent border-none"
              title="后退"
            >
              ←
            </button>
            <button
              onClick={() => routerNavigate(1)}
              className="w-6 h-6 flex items-center justify-center rounded hover:bg-neutral-300 text-neutral-500 text-sm cursor-pointer bg-transparent border-none"
              title="前进"
            >
              →
            </button>
          </div>
        )}
        <div className="flex-1 text-center text-[13px] font-semibold text-neutral-700">
          {title}
        </div>
        <div className="w-16" />
      </div>
      <div className="flex-1 overflow-hidden bg-white">{children}</div>
    </div>
  )
}
