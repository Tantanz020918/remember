import { useState } from 'react'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { Keyword, ImagePlaceholder } from '../../components/ui'
import { QQProfilePopup } from './QQProfilePopup'
import { Avatar } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'

const RUYUE_CHATS = [
  { key: 'fanquan', name: '沐季千柠工作室粉丝群', preview: '[群公告] 新戏人物设定', time: '刚刚' },
  { key: 'jizhou', name: '计粥人机群🤖', preview: '超级小鼠妇（四孩爸版）：喜欢豆狗', time: '18:03' },
  { key: 'erciyuan1', name: '二次元交流大本营', preview: '今天新番更新 GET！', time: '17:12' },
  { key: 'erciyuan2', name: '漫画推荐分享群', preview: '[图片]', time: '16:48' },
  { key: 'mail', name: 'QQ 邮箱提醒', preview: '招聘专员给你发了新邮件', time: '11:03' },
]

const ADMINS = [
  { name: '沐季千柠（群主）', from: '#ffd1dc', to: '#ff9aa2', profileKey: 'zhubo' },
  { name: '编剧+女主', from: '#d4f0c2', to: '#8cd07d', profileKey: 'bianju' },
  { name: '男主·陆远', from: '#c1e8ff', to: '#6ec4f7' },
  { name: '女配·花痴A', from: '#ffe0f0', to: '#f58ec2' },
]

const MEMBERS = [
  { name: '糖糖不吃糖', from: '#c1e8ff', to: '#6ec4f7' },
  { name: '奥比小王子', from: '#ffe7b3', to: '#ffb86b' },
  { name: '清风', from: '#e4d4ff', to: '#a97bf5' },
  { name: '小鱼干', from: '#fff4b3', to: '#f5c542' },
  { name: '云朵软糖', from: '#ffd6e7', to: '#c5e1ff' },
  { name: '星星点灯', from: '#d0f5e8', to: '#4fc3a1' },
  { name: '梦幻泡泡', from: '#ffe0f0', to: '#f58ec2' },
  { name: '路人甲', from: '#ffd1dc', to: '#ff9aa2' },
  { name: '阳光少年', from: '#c5e1a5', to: '#66bb6a' },
  { name: '冰淇淋酱', from: '#b3e5fc', to: '#4fc3f7' },
  { name: '暮光之城', from: '#e4d4ff', to: '#a97bf5' },
  { name: '芒果布丁', from: '#fff4b3', to: '#f5c542' },
]

function GroupMessage({ avatarFrom, avatarTo, name, time, children }) {
  return (
    <div className="flex gap-2.5 my-2.5 items-start">
      <ImagePlaceholder width={36} height={36} from={avatarFrom} to={avatarTo} round label={false} />
      <div className="max-w-[70%]">
        <div className="text-[11px] text-neutral-500 mb-1">
          {name}<span className="ml-1.5 text-neutral-300">{time}</span>
        </div>
        <div className="bg-white px-3 py-2.5 rounded border border-sky-100 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

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
          {RUYUE_CHATS.map((c) => (
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
            <span className="text-neutral-500 ml-1.5 font-normal">({ADMINS.length + MEMBERS.length})</span>
          </div>
          <div className="flex gap-3 text-neutral-500 text-base">
            <span>📞</span><span>📹</span><span>⋯</span>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 px-5 py-4 overflow-y-auto bg-sky-50/40">
            <div className="text-center text-neutral-400 text-[11px] my-2.5">2013 年 1 月 2 日 14:30</div>
            <GroupMessage avatarFrom="#ffd1dc" avatarTo="#ff9aa2" name="沐季千柠" time="14:30">
              大家看一下群公告里的新戏人物设定哈～
            </GroupMessage>
            <GroupMessage avatarFrom="#c1e8ff" avatarTo="#6ec4f7" name="糖糖不吃糖" time="14:32">
              催更催更！上一部还没演完呢
            </GroupMessage>
            <GroupMessage avatarFrom="#d4f0c2" avatarTo="#8cd07d" name="编剧+女主" time="14:35">
              剧本还在改，再等等～新戏的人物设定已经发在公告里了
            </GroupMessage>
            <GroupMessage avatarFrom="#ffe7b3" avatarTo="#ffb86b" name="奥比小王子" time="14:38">
              期待新戏！
            </GroupMessage>
          </div>

          <div className="w-[240px] bg-white border-l border-sky-100 overflow-y-auto">
            <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200 flex justify-between">
              <span>群公告</span>
              <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={() => setShowAnnouncement(true)}>查看</a>
            </div>
            <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200">
              群成员 {ADMINS.length + MEMBERS.length}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]" onClick={() => setShowAnnouncement(false)}>
          <div className="bg-white px-6 py-5 rounded-[10px] min-w-[360px]" onClick={(e) => e.stopPropagation()}>
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
        </div>
      )}
    </div>
  )
}
