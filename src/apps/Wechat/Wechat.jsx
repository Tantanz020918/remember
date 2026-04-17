import { useState } from 'react'
import { ImagePlaceholder } from '../../components/ui'
import { BESTIE_1, spriteForUser } from '../../assets/imageUrls'
import { ChatFrame } from './ChatFrame'
import { Moments } from './Moments'
import { TongxueluModal } from './TongxueluModal'
import { WECHAT_CHAT_LIST, WechatChat } from '../../data/wechatChats'

const RAIL_ICONS = [
  { key: 'chats', icon: '💬' },
  { key: 'moments', icon: '🌐' },
]

export function Wechat() {
  const [view, setView] = useState('chats')
  const [chatKey, setChatKey] = useState('qing')
  const [showBigImg, setShowBigImg] = useState(false)

  const currentChat = WECHAT_CHAT_LIST.find((c) => c.key === chatKey)

  return (
    <div className="flex h-full text-[13px] bg-neutral-100">
      {/* Left icon rail */}
      <div className="w-[60px] bg-[#2e2e2e] flex flex-col items-center py-3.5 gap-1.5">
        <div className="mb-2">
          <ImagePlaceholder sprite={spriteForUser('姚如月')} width={36} height={36} label={false} style={{ borderRadius: 6 }} />
        </div>
        {RAIL_ICONS.map((item) => (
          <div
            key={item.key}
            onClick={() => setView(item.key)}
            className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-xl ${
              view === item.key
                ? 'bg-white/10 text-[#07c160]'
                : 'text-neutral-400 hover:bg-white/5'
            }`}
          >
            {item.icon}
          </div>
        ))}
        <div className="flex-1" />
        <div className="w-10 h-10 flex items-center justify-center text-neutral-400">⚙</div>
      </div>

      {/* Conversation list */}
      {view === 'chats' && (
        <div className="w-[280px] bg-neutral-200/80 border-r border-neutral-300 flex flex-col">
          <div className="flex gap-1.5 px-2.5 py-2.5 border-b border-neutral-300">
            <input
              placeholder="搜索"
              className="flex-1 px-2.5 py-1 border border-neutral-300 bg-white rounded text-xs outline-none"
            />
            <button className="w-6 h-6 bg-white border border-neutral-300 rounded cursor-pointer text-sm">
              ＋
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {WECHAT_CHAT_LIST.map((c) => (
              <div
                key={c.key}
                onClick={() => setChatKey(c.key)}
                className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-300/60 ${
                  chatKey === c.key ? 'bg-neutral-300' : 'hover:bg-neutral-300/60'
                }`}
              >
                {c.key === 'caiqing' ? (
                  <ImagePlaceholder
                    src={BESTIE_1.src}
                    fallbackSrc={BESTIE_1.fallbackSrc}
                    width={44}
                    height={44}
                    label={false}
                    style={{ borderRadius: 6 }}
                  />
                ) : (
                  <ImagePlaceholder
                    sprite={spriteForUser(c.name)}
                    width={44}
                    height={44}
                    label={false}
                    style={{ borderRadius: 6 }}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[13px]">{c.name}</span>
                    <span className="text-neutral-400 text-[11px]">{c.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-neutral-500 text-[11px] truncate max-w-[180px]">
                      {c.preview}
                    </span>
                    {c.unread > 0 && (
                      <span className="bg-red-500 text-white text-[10px] rounded-lg px-1.5 min-w-4 text-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-neutral-100 min-w-0 min-h-0 overflow-hidden">
        {view === 'chats' && currentChat && (
          <ChatFrame name={currentChat.name}>
            <WechatChat chatKey={chatKey} ctx={{ onOpenTongxuelu: () => setShowBigImg(true) }} />
          </ChatFrame>
        )}

        {view === 'moments' && <Moments />}
      </div>

      {showBigImg && <TongxueluModal onClose={() => setShowBigImg(false)} />}
    </div>
  )
}
