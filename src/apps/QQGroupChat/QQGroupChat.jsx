import { useGameNavigate } from '../../hooks/useGameNavigate'
import { ImagePlaceholder, Avatar } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { RUYUE_CHATS, FANQUAN_CHAT } from '../../data/qqData'
import { FanquanMessages } from '../../data/qqFanquanMessages'
import { QQAnnouncementBanner } from '../QQ/QQAnnouncementBanner'

const CHATS = [FANQUAN_CHAT, ...RUYUE_CHATS]

export function QQGroupChat() {
  const navigate = useGameNavigate()

  return (
    <div className="flex h-full text-[13px] bg-sky-50/50">
      {/* Left rail */}
      <div className="w-14 flex flex-col items-center py-3.5 gap-2 bg-linear-to-b from-sky-600 to-sky-800">
        <div className="mb-2"><ImagePlaceholder sprite={spriteForUser('姚如月')} width={36} height={36} round label={false} /></div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md text-lg bg-white/15 text-white">💬</div>
        <div className="flex-1" />
      </div>

      {/* Left chat list */}
      <div className="w-[220px] bg-white border-r border-sky-100 flex flex-col">
        <div className="px-2.5 py-2.5 border-b border-sky-100">
          <input placeholder="搜索" className="w-full px-2.5 py-1.5 border border-sky-100 rounded-full bg-sky-50/60 text-xs outline-none" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {CHATS.map((c) => (
            <div
              key={c.key}
              onClick={() => { if (c.key !== 'fanquan') navigate(3) }}
              className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-100 ${c.key === 'fanquan' ? 'bg-sky-100/70' : 'hover:bg-sky-50/60'}`}
            >
              <Avatar name={c.name} size={42} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between"><span className="font-semibold text-xs">{c.name}</span><span className="text-neutral-400 text-[11px]">{c.time}</span></div>
                <div className="text-neutral-500 text-[11px] mt-0.5 truncate">{c.preview}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-sky-50/40">
        <div className="px-4 py-3 bg-white border-b border-sky-100 flex justify-between items-center">
          <div className="font-bold text-sm">沐季千柠工作室粉丝群</div>
          <div className="flex gap-3 text-neutral-500 text-base">
            <span>📞</span><span>📹</span><span>⋯</span>
          </div>
        </div>
        <QQAnnouncementBanner onViewDetails={() => navigate(16)} />
        <div className="flex-1 px-5 py-4 overflow-y-auto bg-sky-50/40">
          <FanquanMessages />
        </div>
      </div>
    </div>
  )
}
