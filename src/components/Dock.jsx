import { useGameNavigate } from '../hooks/useGameNavigate'
import { Tooltip } from './ui'

const DOCK_ITEMS = [
  { label: '浏览器', icon: '🌐', pageId: 4 },
  { label: '微信', icon: '💬', pageId: 2 },
  { label: 'QQ', icon: '🐧', pageId: 3 },
]

export function Dock() {
  const navigate = useGameNavigate()
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl z-50">
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
