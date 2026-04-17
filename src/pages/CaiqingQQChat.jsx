import { useState } from 'react'
import { Avatar, ImagePlaceholder } from '../components/ui'
import { spriteForUser } from '../assets/imageUrls'
import { CAIQING_REQUESTS } from '../data/qqData'
import { JuniorChat } from '../data/qqJuniorChat'

const TABS = [
  { key: 'chats', label: '消息' },
  { key: 'requests', label: '好友申请' },
]

const CHAT_LIST = [
  { key: 'junior', avatarName: '学妹', name: '化学小白', time: '2020.9', preview: '学姐，你的化学笔记可以借给我吗？' },
]

// CaiqingQQChat displays "采晴 → 梦和" instead of CAIQING_REQUESTS' "雨季 → 梦和"
const REQUESTS = CAIQING_REQUESTS.map((r) =>
  r.outgoing ? { ...r, from: r.from.replace('雨季', '采晴') } : r,
)

export function CaiqingQQChat() {
  const [tab, setTab] = useState('chats')
  const [selectedChat, setSelectedChat] = useState('junior')

  return (
    <div className="flex h-full text-[13px] bg-sky-50/50">
      <div className="w-14 flex flex-col items-center py-3.5 gap-2 bg-linear-to-b from-sky-600 to-sky-800">
        <div className="mb-2">
          <ImagePlaceholder sprite={spriteForUser('雨季')} width={36} height={36} round label={false} />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-lg bg-white/15 text-white">💬</div>
        <div className="flex-1" />
      </div>
      <div className="w-[280px] bg-white border-r border-sky-100 flex flex-col">
        <div className="flex border-b border-sky-100 text-xs">
          {TABS.map((t) => (
            <div
              key={t.key}
              className={`flex-1 text-center py-2.5 cursor-pointer ${tab === t.key ? 'bg-sky-50 font-bold text-sky-600' : 'text-neutral-500'}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </div>
          ))}
        </div>
        {tab === 'chats' && (
          <div className="flex-1 overflow-y-auto">
            {CHAT_LIST.map((c) => (
              <div
                key={c.key}
                className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-100 ${selectedChat === c.key ? 'bg-sky-100/70' : ''}`}
                onClick={() => setSelectedChat(c.key)}
              >
                <Avatar name={c.avatarName} size={42} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between"><span className="font-semibold">{c.name}</span><span className="text-neutral-400 text-[11px]">{c.time}</span></div>
                  <div className="text-neutral-500 text-[11px] mt-0.5 truncate">{c.preview}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'requests' && (
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
            {REQUESTS.map((r, i) => (
              <div key={i} className={`p-3 rounded-lg border ${r.outgoing ? 'bg-sky-50 border-sky-100' : 'bg-red-50 border-red-100'}`}>
                <div className="flex justify-between"><span className="font-bold">{r.from}</span><span className="text-neutral-400">{r.time}</span></div>
                <div className="text-neutral-600 mt-1">申请理由：{r.reason}</div>
                <div className={`mt-1 ${r.statusColor}`}>{r.outgoing ? '⏳' : '✕'} {r.status}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col bg-sky-50/40 min-w-0">
        {tab === 'chats' && selectedChat === 'junior' && (
          <>
            <div className="px-4 py-3 border-b border-sky-100 bg-white font-bold">化学小白</div>
            <div className="flex-1 px-5 py-4 overflow-y-auto">
              <JuniorChat />
            </div>
          </>
        )}
        {tab === 'requests' && (
          <div className="flex-1 flex items-center justify-center text-neutral-400">
            ← 选择左侧查看详情
          </div>
        )}
      </div>
    </div>
  )
}
