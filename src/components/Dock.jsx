import { useGameNavigate } from '../hooks/useGameNavigate'

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
        <div
          key={item.label}
          className="relative w-14 text-center cursor-pointer transition-transform duration-150 hover:scale-110 hover:-translate-y-1 group"
          onClick={() => item.pageId && navigate(item.pageId)}
        >
          <div className="text-4xl leading-none drop-shadow-md">{item.icon}</div>
          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-md bg-neutral-900/85 text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-200 shadow-lg">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
