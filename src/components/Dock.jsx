import { useGameNavigate } from '../hooks/useGameNavigate'
import { useIsMobile } from '../hooks/useIsMobile'
import { useCurrentPage } from '../hooks/useCurrentPage'
import { Tooltip } from './ui'
import { PageId } from '../pages/pageIds'

const DOCK_ITEMS = [
  { label: '浏览器', icon: '🌐', pageId: PageId.BROWSER },
  { label: '微信', icon: '💬', pageId: PageId.WECHAT },
  { label: 'QQ', icon: '🐧', pageId: PageId.QQ },
]

export function Dock() {
  const navigate = useGameNavigate()
  const isMobile = useIsMobile()
  const pageId = useCurrentPage()

  // On mobile, AppWindow is full-screen; hide Dock while inside an app.
  if (isMobile && pageId !== PageId.DESKTOP) return null

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 flex gap-3 md:gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl z-50"
      style={{ bottom: 'calc(10px + env(safe-area-inset-bottom, 0px))' }}
    >
      {DOCK_ITEMS.map((item) => (
        <Tooltip key={item.label} text={item.label} className="mb-2 delay-200 bg-neutral-900/85">
          <div
            className="w-14 text-center cursor-pointer transition-transform duration-150 hover:scale-110 hover:-translate-y-1"
            onClick={() => item.pageId && navigate(item.pageId)}
          >
            <div className="text-4xl leading-none drop-shadow-md">{item.icon}</div>
          </div>
        </Tooltip>
      ))}
    </div>
  )
}
