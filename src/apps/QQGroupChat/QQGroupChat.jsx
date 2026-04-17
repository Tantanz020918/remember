import { useState } from 'react'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { Keyword, ImagePlaceholder, Avatar, Modal } from '../../components/ui'
import { QQProfilePopup } from './QQProfilePopup'
import { spriteForUser } from '../../assets/imageUrls'
import { ADMINS, MEMBERS, RUYUE_CHATS, FANQUAN_CHAT, GROUP_MEMBER_COUNT } from '../../data/qqData'
import { FanquanMessages } from '../../data/qqFanquanMessages'

const CHATS = [FANQUAN_CHAT, ...RUYUE_CHATS]

export function QQGroupChat() {
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const [profileKey, setProfileKey] = useState(null)
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
          <div className="font-bold text-sm">
            沐季千柠工作室粉丝群
            <span className="text-neutral-500 ml-1.5 font-normal">({GROUP_MEMBER_COUNT})</span>
          </div>
          <div className="flex gap-3 text-neutral-500 text-base">
            <span>📞</span><span>📹</span><span>⋯</span>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 px-5 py-4 overflow-y-auto bg-sky-50/40">
            <FanquanMessages />
          </div>

          <div className="w-[240px] bg-white border-l border-sky-100 overflow-y-auto">
            <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200 flex justify-between">
              <span>群公告</span>
              <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={() => setShowAnnouncement(true)}>查看</a>
            </div>
            <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200">
              群成员 {GROUP_MEMBER_COUNT}
            </div>
            <div>
              <div className="px-3.5 py-1.5 text-[11px] text-neutral-400 bg-neutral-50">管理员</div>
              {ADMINS.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 cursor-pointer hover:bg-sky-50/60"
                  onClick={() => a.profileKey && setProfileKey(a.profileKey)}
                >
                  <ImagePlaceholder width={28} height={28} round label={false} from={a.from} to={a.to} />
                  <span className="text-xs">{a.name}</span>
                </div>
              ))}
              <div className="px-3.5 py-1.5 text-[11px] text-neutral-400 bg-neutral-50">成员</div>
              {MEMBERS.map((m) => (
                <div key={m.name} className="flex items-center gap-2 px-3.5 py-1.5 hover:bg-sky-50/60">
                  <ImagePlaceholder width={28} height={28} round label={false} from={m.from} to={m.to} />
                  <span className="text-xs">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {profileKey && <QQProfilePopup profileKey={profileKey} onClose={() => setProfileKey(null)} />}

      {showAnnouncement && (
        <Modal onClose={() => setShowAnnouncement(false)}>
          <div className="bg-white px-6 py-5 rounded-[10px] min-w-[360px]">
            <h3 className="font-bold mb-2.5">群公告</h3>
            <div className="text-[11px] text-neutral-500 mb-2">发布者：编剧+女主 · 2013-01-02 21:05</div>
            <div className="leading-relaxed text-neutral-700">
              新戏「<Keyword>永远的姐妹</Keyword>」人物设定已经整理好啦，有意见可提出——
              <div className="mt-2.5">
                <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={() => { setShowAnnouncement(false); navigate(16) }}>
                  点击查看详情 &gt;&gt;
                </a>
              </div>
            </div>
            <div className="mt-3">
              <button onClick={() => setShowAnnouncement(false)} className="px-4 py-1.5 bg-sky-500 text-white rounded border-none cursor-pointer text-[13px]">关闭</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
