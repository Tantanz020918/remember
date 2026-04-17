import { useState } from 'react'
import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, ImagePlaceholder, PasswordLock, StoryLink } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { TIMELINE_POSTS, GUESTBOOK, ALBUM_COLORS, RECENT_VISITORS, SIDEBAR_ALBUM } from '../../data/caiqingQZoneData'

const TABS = [
  { key: 'timeline', label: '主页' },
  { key: 'journal', label: '日志' },
  { key: 'album', label: '相册' },
  { key: 'guestbook', label: '留言板' },
]

function QZonePost({ time, children }) {
  return (
    <div className="border-b border-neutral-700/30 py-4 flex gap-3">
      <ImagePlaceholder sprite={spriteForUser('雨季')} width={40} height={40} round label={false} />
      <div className="flex-1">
        <div className="text-amber-300 text-xs font-bold mb-1">雨季</div>
        <div className="text-sm leading-relaxed text-neutral-300">{children}</div>
        <div className="text-neutral-500 text-[11px] mt-1.5">{time}</div>
      </div>
    </div>
  )
}

function Timeline() {
  return (
    <div className="bg-neutral-800 rounded-lg p-4">
      <div className="text-neutral-500 text-xs mb-3 border-b border-neutral-700 pb-2">全部动态</div>
      {TIMELINE_POSTS.map((p, i) => (
        <QZonePost key={i} time={p.time}>{p.content}</QZonePost>
      ))}
    </div>
  )
}

function Journal({ qqAccountSwitched }) {
  return (
    <div className="bg-neutral-800 rounded-lg p-4 space-y-3">
      {qqAccountSwitched ? (
        <div className="p-4 bg-neutral-900/50 rounded-lg border border-amber-700/40">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-amber-300">独白</span>
            <span className="text-neutral-500 text-xs">2018.2.28</span>
          </div>
          <div className="text-neutral-400 text-sm mt-1">🔒 仅自己可见</div>
          <StoryLink to={23}>
            <div className="mt-2 text-sm">打开日志 →</div>
          </StoryLink>
        </div>
      ) : (
        <div className="text-center text-neutral-500 py-12 text-sm">
          无日志，可能<Keyword>设置了私密</Keyword>
        </div>
      )}
    </div>
  )
}

function Album() {
  return (
    <div className="bg-neutral-800 rounded-lg p-4">
      <div className="grid grid-cols-4 gap-3">
        {ALBUM_COLORS.map((c, i) => (
          <ImagePlaceholder key={i} width="100%" height={120} from={c.from} to={c.to} label={false} style={{ width: '100%', borderRadius: 6 }} />
        ))}
      </div>
    </div>
  )
}

function Guestbook() {
  return (
    <div className="bg-neutral-800 rounded-lg p-4 space-y-3">
      <div className="text-neutral-500 text-xs mb-2">留言板</div>
      {GUESTBOOK.map((g, i) => (
        <div key={i} className={`flex gap-3 pb-3 ${i < GUESTBOOK.length - 1 ? 'border-b border-neutral-700/30' : ''}`}>
          <ImagePlaceholder width={32} height={32} round from={g.from} to={g.to} label={false} />
          <div>
            <div className="text-amber-400 text-xs font-medium">{g.name}</div>
            <div className="text-neutral-400 text-sm mt-0.5">{g.text}</div>
            <div className="text-neutral-600 text-[11px] mt-1">{g.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function QZoneContent() {
  const [tab, setTab] = useState('timeline')
  const { qqAccountSwitched } = useStore()

  return (
    <div className="min-h-full bg-neutral-900 text-neutral-200">
      <div className="bg-neutral-800 border-b border-neutral-700 px-6 py-2 flex items-center gap-4 text-xs">
        <span className="text-amber-400 font-bold">QQ空间</span>
        <span className="text-neutral-500">个人中心</span>
        <span className="text-neutral-500">好友动态</span>
        <span className="text-neutral-500">消息</span>
        <div className="flex-1" />
        <span className="text-neutral-500">设置</span>
      </div>

      <div className="relative h-44 bg-linear-to-br from-neutral-800 via-neutral-700 to-amber-900/30">
        <div className="absolute bottom-4 left-6 flex items-end gap-4">
          <ImagePlaceholder sprite={spriteForUser('雨季')} width={90} height={90} round label={false} className="border-3 border-neutral-800 shadow-lg" />
          <div className="pb-2">
            <h2 className="text-xl font-bold text-white drop-shadow-md">雨季</h2>
          </div>
        </div>
        <div className="absolute top-4 right-6 text-neutral-400 text-xs flex gap-4">
          <span>今日访客 <b className="text-amber-300">0</b></span>
          <span>相册访问 <b className="text-amber-300">928</b></span>
        </div>
      </div>

      <div className="flex gap-1 px-6 pt-3 bg-neutral-800/50">
        {TABS.map((t) => (
          <span
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 cursor-pointer text-sm rounded-t ${
              tab === t.key
                ? 'bg-neutral-900 text-amber-300 font-bold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div className="flex gap-4 px-6 py-4">
        <div className="w-48 shrink-0 space-y-3">
          <div className="bg-neutral-800 rounded-lg p-3 text-xs">
            <div className="text-neutral-500 mb-2">好友动态</div>
            <div className="text-neutral-400">暂无最新动态</div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-3 text-xs">
            <div className="text-neutral-500 mb-2">最近访客</div>
            <div className="flex gap-1.5">
              {RECENT_VISITORS.map((v, i) => (
                <ImagePlaceholder key={i} width={28} height={28} round from={v.from} to={v.to} label={false} />
              ))}
            </div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-3 text-xs">
            <div className="text-neutral-500 mb-2">相册</div>
            <div className="grid grid-cols-3 gap-1">
              {SIDEBAR_ALBUM.map((a, i) => (
                <ImagePlaceholder key={i} width="100%" height={32} from={a.from} to={a.to} label={false} style={{ width: '100%', borderRadius: 4 }} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {tab === 'timeline' && <Timeline />}
          {tab === 'journal' && <Journal qqAccountSwitched={qqAccountSwitched} />}
          {tab === 'album' && <Album />}
          {tab === 'guestbook' && <Guestbook />}
        </div>

        <div className="w-44 shrink-0 space-y-3">
          <div className="bg-neutral-800 rounded-lg p-3 text-xs text-center">
            <div className="text-neutral-500 mb-1">本周来访数</div>
            <div className="text-amber-300 text-2xl font-bold">0</div>
          </div>
          <div className="bg-neutral-800 rounded-lg overflow-hidden">
            <div className="text-neutral-500 text-xs px-3 pt-2 pb-1">日历</div>
            <div className="grid grid-cols-7 gap-0 px-2 pb-2 text-[10px] text-neutral-500 text-center">
              {['一','二','三','四','五','六','日'].map(d => <div key={d}>{d}</div>)}
              {Array.from({length: 30}, (_, i) => (
                <div key={i} className={i + 1 === 15 ? 'text-amber-300' : ''}>{i + 1}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CaiqingQZone() {
  const { caiqingSpaceUnlocked, setFlag } = useStore()

  return (
    <BrowserFrame>
      {!caiqingSpaceUnlocked ? (
        <PasswordLock
          prompt="访问 TA 的空间需要回答问题：我叫什么名字？"
          errorHint="看看 TA 的资料卡"
          answer="胡采晴"
          onUnlock={() => setFlag('caiqingSpaceUnlocked', true)}
          className="min-h-[400px]"
        />
      ) : (
        <QZoneContent />
      )}
    </BrowserFrame>
  )
}
