import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, ImagePlaceholder, PasswordLock } from '../../components/ui'

import { spriteForUser } from '../../assets/imageUrls'
import { TIMELINE_POSTS, GUESTBOOK, ALBUM_COLORS, RECENT_VISITORS, SIDEBAR_ALBUM, VISITOR_VISIBLE_AFTER, parseQZoneTime } from '../../data/caiqingQZoneData'
import { QZoneShell, QZonePasswordGate } from './QZoneShell'

function QZonePost({ time, selfOnly, children }) {
  return (
    <div className="border-b border-neutral-700/30 py-4 flex gap-3">
      <ImagePlaceholder sprite={spriteForUser('雨季')} width={40} height={40} round label={false} />
      <div className="flex-1">
        <div className="text-amber-300 text-xs font-bold mb-1 flex items-center gap-2">
          雨季
          {selfOnly && (
            <span className="text-[10px] font-normal text-neutral-500 bg-neutral-700/40 px-1.5 py-0.5 rounded">
              🔒 仅自己可见
            </span>
          )}
        </div>
        <div className="text-sm leading-relaxed text-neutral-300">{children}</div>
        <div className="text-neutral-500 text-[11px] mt-1.5">{time}</div>
      </div>
    </div>
  )
}

function Timeline({ isOwner }) {
  const visible = isOwner
    ? TIMELINE_POSTS
    : TIMELINE_POSTS.filter((p) => !p.selfOnly && parseQZoneTime(p.time) > VISITOR_VISIBLE_AFTER)

  return (
    <div className="bg-neutral-800 rounded-lg p-4">
      <div className="text-neutral-500 text-xs mb-3 border-b border-neutral-700 pb-2">全部动态</div>
      {visible.map((p, i) => (
        <QZonePost key={i} time={p.time} selfOnly={p.selfOnly}>{p.content}</QZonePost>
      ))}
      {!isOwner && (
        <div className="mt-4 p-3 bg-neutral-900/50 rounded text-center text-neutral-500 text-xs leading-relaxed">
          🔒 主人设置了隐藏 2015.8.31 之前的说说
        </div>
      )}
    </div>
  )
}

function DiaryEntry() {
  return (
    <div className="p-5 bg-neutral-900/50 rounded-lg border border-amber-700/40">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-amber-300">独白</span>
        <span className="text-neutral-500 text-xs">2018.2.28</span>
      </div>
      <div className="text-neutral-500 text-xs mb-4">🔒 仅自己可见</div>
      <div className="text-sm leading-loose text-neutral-300 space-y-3">
        <p>今天参加了梦和的成人礼。</p>
        <p>她爸爸拉着我的手说：「采晴真是个好姑娘，成绩好，跟梦和一起进步。之前那个女孩叫什么忘记了，跟梦和玩都影响梦和学习了，真是要不得。」还顺口说要设一个基金来资助困难的女生，但具体叫什么名字我没听清。</p>
        <p>听她爸这样子说如月，我不知道为什么梦和一直沉默，曾经的好友被这样子说不应该感到愤怒吗？</p>
        <p>而且当时如月成绩并不差，我的成绩反而是最差的，为什么她爸会这样想如月？</p>
        <p>我突然回忆起，当时如月要走了，说是爸妈不知道为什么突然被调走了，我感觉其中肯定有什么问题……</p>
        <p>虽然我跟如月的感情没有之前深了，但我仍然想知道真相。</p>
        <p>想起我刚创的微信号还有我们俩的名字，我就觉得特别难受，还是改成<Keyword>名字加生日</Keyword>这种吧。</p>
      </div>
    </div>
  )
}

function Journal({ isOwner }) {
  const { diaryUnlocked, setFlag } = useStore()

  if (!isOwner) {
    return (
      <div className="bg-neutral-800 rounded-lg p-4 space-y-3">
        <div className="text-center text-neutral-500 py-12 text-sm">
          无日志，可能<Keyword>设置了私密</Keyword>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-neutral-800 rounded-lg p-4 space-y-3">
      {!diaryUnlocked ? (
        <PasswordLock
          bare
          prompt={
            <div className="text-neutral-300">
              <p className="text-lg mb-2">私密日志</p>
              <p className="text-sm text-neutral-500">迷失之蝶</p>
            </div>
          }
          errorHint="迷宫"
          answer="2575"
          onUnlock={() => setFlag('diaryUnlocked', true)}
        />
      ) : (
        <DiaryEntry />
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
  return (
    <QZoneShell
      profile={{
        name: '雨季',
        bio: <Keyword>曾沿着雪路浪游 为何为好事泪流</Keyword>,
        avatarSprite: spriteForUser('雨季'),
        albumVisits: 928,
      }}
      tabs={[
        { key: 'timeline', label: '主页', render: ({ isOwner }) => <Timeline isOwner={isOwner} /> },
        { key: 'journal', label: '日志', render: ({ isOwner }) => <Journal isOwner={isOwner} /> },
        { key: 'album', label: '相册', render: () => <Album /> },
        { key: 'guestbook', label: '留言板', render: () => <Guestbook /> },
      ]}
      leftSidebarProps={{ recentVisitors: RECENT_VISITORS, sidebarAlbum: SIDEBAR_ALBUM }}
    />
  )
}

export function CaiqingQZone() {
  const { caiqingSpaceUnlocked, setFlag } = useStore()

  return (
    <BrowserFrame>
      {!caiqingSpaceUnlocked ? (
        <QZonePasswordGate
          name="雨季"
          prompt="我叫什么名字？"
          errorHint="搜索小学所在的城市"
          answer="胡采晴"
          onUnlock={() => setFlag('caiqingSpaceUnlocked', true)}
        />
      ) : (
        <QZoneContent />
      )}
    </BrowserFrame>
  )
}
