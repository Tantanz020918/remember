import { useState } from 'react'
import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, ImagePlaceholder, PasswordLock, StoryLink } from '../../components/ui'
import { GAME, THEME_PARK, HANDMADE, HAMSTER, spriteForUser } from '../../assets/imageUrls'

function QZonePost({ time, avatar, name, children }) {
  return (
    <div className="border-b border-neutral-700/30 py-4 flex gap-3">
      {avatar && <ImagePlaceholder sprite={spriteForUser('雨季')} width={40} height={40} round label={false} />}
      <div className="flex-1">
        {name && <div className="text-amber-300 text-xs font-bold mb-1">{name}</div>}
        <div className="text-sm leading-relaxed text-neutral-300">{children}</div>
        <div className="text-neutral-500 text-[11px] mt-1.5">{time}</div>
      </div>
    </div>
  )
}

function QZoneComment({ author, children }) {
  return (
    <div className="flex gap-2 py-1.5 text-xs">
      <span className="text-amber-400 font-medium shrink-0">{author}：</span>
      <span className="text-neutral-400">{children}</span>
    </div>
  )
}

function QZoneContent() {
  const [tab, setTab] = useState('timeline')
  const { qqAccountSwitched } = useStore()

  const tabs = [
    { key: 'timeline', label: '主页' },
    { key: 'journal', label: '日志' },
    { key: 'album', label: '相册' },
    { key: 'guestbook', label: '留言板' },
  ]

  return (
    <div className="min-h-full bg-neutral-900 text-neutral-200">
      {/* Top bar mimicking QQ空间 */}
      <div className="bg-neutral-800 border-b border-neutral-700 px-6 py-2 flex items-center gap-4 text-xs">
        <span className="text-amber-400 font-bold">QQ空间</span>
        <span className="text-neutral-500">个人中心</span>
        <span className="text-neutral-500">好友动态</span>
        <span className="text-neutral-500">消息</span>
        <div className="flex-1" />
        <span className="text-neutral-500">设置</span>
      </div>

      {/* Banner + avatar */}
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

      {/* Tabs */}
      <div className="flex gap-1 px-6 pt-3 bg-neutral-800/50">
        {tabs.map((t) => (
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

      {/* Content */}
      <div className="flex gap-4 px-6 py-4">
        {/* Left sidebar */}
        <div className="w-48 shrink-0 space-y-3">
          <div className="bg-neutral-800 rounded-lg p-3 text-xs">
            <div className="text-neutral-500 mb-2">好友动态</div>
            <div className="text-neutral-400">暂无最新动态</div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-3 text-xs">
            <div className="text-neutral-500 mb-2">最近访客</div>
            <div className="flex gap-1.5">
              <ImagePlaceholder width={28} height={28} round from="#c1e8ff" to="#6ec4f7" label={false} />
              <ImagePlaceholder width={28} height={28} round from="#ffe7b3" to="#ffb86b" label={false} />
              <ImagePlaceholder width={28} height={28} round from="#d4f0c2" to="#8cd07d" label={false} />
            </div>
          </div>
          <div className="bg-neutral-800 rounded-lg p-3 text-xs">
            <div className="text-neutral-500 mb-2">相册</div>
            <div className="grid grid-cols-3 gap-1">
              <ImagePlaceholder width="100%" height={32} from="#ffd1dc" to="#ff9aa2" label={false} style={{ width: '100%', borderRadius: 4 }} />
              <ImagePlaceholder width="100%" height={32} from="#c1e8ff" to="#6ec4f7" label={false} style={{ width: '100%', borderRadius: 4 }} />
              <ImagePlaceholder width="100%" height={32} from="#d4f0c2" to="#8cd07d" label={false} style={{ width: '100%', borderRadius: 4 }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {tab === 'timeline' && (
            <div className="bg-neutral-800 rounded-lg p-4">
              <div className="text-neutral-500 text-xs mb-3 border-b border-neutral-700 pb-2">全部动态</div>
              <QZonePost time="2018.3.15" avatar name="雨季">
                七年前的一箭，终于一箭穿心。
                <div className="mt-2 bg-neutral-900/50 rounded p-2">
                  <QZoneComment author="小花">怎么了？</QZoneComment>
                  <QZoneComment author="阳光">发生什么事了？</QZoneComment>
                </div>
              </QZonePost>
              <QZonePost time="2017.11.2" avatar name="雨季">
                最近学了一些新东西，给自己建了一个小网站，就用<Keyword>我最喜欢的那首歌</Keyword>当网站名吧~~
                
                <div className="mt-2 bg-neutral-900/50 rounded p-2">
                  <QZoneComment author="路人">是什么东东？</QZoneComment>
                  <QZoneComment author="雨季">看来你还不够了解我~我都写着呢</QZoneComment>
                </div>
              </QZonePost>
              <QZonePost time="2015.9.1" avatar name="雨季">开学了，新学期加油💪</QZonePost>
              <QZonePost time="2014.6.18" avatar name="雨季">
                今天和梦和出去玩，好开心！
                <div className="mt-2">
                  <ImagePlaceholder name="游乐园" src={THEME_PARK.src} fallbackSrc={THEME_PARK.fallbackSrc} width={240} height={160} />
                </div>
              </QZonePost>
              <QZonePost time="2013.8.20" avatar name="雨季">
                暑假快结束了，不想开学不想开学
              </QZonePost>
              <QZonePost time="2012.6.20" avatar name="雨季">毕业了。我会很想你的，如月。</QZonePost>
              <QZonePost time="2011.7.5" avatar name="雨季">
                如月走了以后，放学回家的路好安静。一个人买辣条都不香了。在家打奥比岛。
              </QZonePost>
            </div>
          )}

          {tab === 'journal' && (
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
          )}

          {tab === 'album' && (
            <div className="bg-neutral-800 rounded-lg p-4">
              <div className="grid grid-cols-4 gap-3">
                <ImagePlaceholder width="100%" height={120} from="#ffd1dc" to="#ff9aa2" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#c1e8ff" to="#6ec4f7" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#d4f0c2" to="#8cd07d" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#ffe7b3" to="#ffb86b" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#e4d4ff" to="#a97bf5" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#fff4b3" to="#f5c542" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#ffd6e7" to="#f58ec2" label={false} style={{ width: '100%', borderRadius: 6 }} />
                <ImagePlaceholder width="100%" height={120} from="#b3e5fc" to="#4fc3f7" label={false} style={{ width: '100%', borderRadius: 6 }} />
              </div>
            </div>
          )}

          {tab === 'guestbook' && (
            <div className="bg-neutral-800 rounded-lg p-4 space-y-3">
              <div className="text-neutral-500 text-xs mb-2">留言板</div>
              <div className="border-b border-neutral-700/30 pb-3 flex gap-3">
                <ImagePlaceholder width={32} height={32} round from="#c1e8ff" to="#6ec4f7" label={false} />
                <div>
                  <div className="text-amber-400 text-xs font-medium">小花</div>
                  <div className="text-neutral-400 text-sm mt-0.5">采晴生日快乐呀～🎂</div>
                  <div className="text-neutral-600 text-[11px] mt-1">2017.8.26</div>
                </div>
              </div>
              <div className="border-b border-neutral-700/30 pb-3 flex gap-3">
                <ImagePlaceholder width={32} height={32} round from="#ffe7b3" to="#ffb86b" label={false} />
                <div>
                  <div className="text-amber-400 text-xs font-medium">阳光</div>
                  <div className="text-neutral-400 text-sm mt-0.5">踩踩你的空间~~</div>
                  <div className="text-neutral-600 text-[11px] mt-1">2016.5.12</div>
                </div>
              </div>
              <div className="border-b border-neutral-700/30 pb-3 flex gap-3">
                <ImagePlaceholder width={32} height={32} round from="#e4d4ff" to="#a97bf5" label={false} />
                <div>
                  <div className="text-amber-400 text-xs font-medium">梦幻泡泡</div>
                  <div className="text-neutral-400 text-sm mt-0.5">来交换空间啦，互踩互踩！</div>
                  <div className="text-neutral-600 text-[11px] mt-1">2015.3.8</div>
                </div>
              </div>
              <div className="pb-3 flex gap-3">
                <ImagePlaceholder width={32} height={32} round from="#d4f0c2" to="#8cd07d" label={false} />
                <div>
                  <div className="text-amber-400 text-xs font-medium">路人甲</div>
                  <div className="text-neutral-400 text-sm mt-0.5">你空间好好看！背景音乐是什么歌呀</div>
                  <div className="text-neutral-600 text-[11px] mt-1">2014.11.20</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar */}
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
