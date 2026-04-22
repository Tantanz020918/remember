import { useState, useCallback } from 'react'
import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, PasswordLock, Toast, useToast, Modal, ImagePlaceholder } from '../../components/ui'
import { MazeGame } from '../../components/MazeGame'
import { useIsMobile } from '../../hooks/useIsMobile'

// ===================== 九宫格心形密码 =====================
// Heart shape edges (unordered pairs) — order of drawing doesn't matter
const HEART_EDGES = [[1,5],[1,4],[4,8],[6,8],[3,6],[3,5]]
const edgeKey = (a, b) => `${Math.min(a, b)}-${Math.max(a, b)}`
const HEART_EDGE_SET = new Set(HEART_EDGES.map(([a, b]) => edgeKey(a, b)))

function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

const HEART_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: seededRandom(i) * 100,
  delay: seededRandom(i + 100) * 2,
  duration: 2 + seededRandom(i + 200) * 2,
  size: 12 + seededRandom(i + 300) * 16,
}))

function HeartParticles() {
  const hearts = HEART_PARTICLES
  return (
    <div className="fixed inset-0 pointer-events-none z-[3000] overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-pink-400"
          style={{
            left: `${h.left}%`,
            top: '-30px',
            fontSize: h.size,
            animation: `heartFall ${h.duration}s ${h.delay}s ease-in forwards`,
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes heartFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

const GRID_SIZE = 200
const DOT_SIZE = 40
const GAP = (GRID_SIZE - DOT_SIZE) / 2

function dotCenter(num) {
  const col = (num - 1) % 3
  const row = Math.floor((num - 1) / 3)
  return { x: col * GAP + DOT_SIZE / 2, y: row * GAP + DOT_SIZE / 2 }
}

function HeartGridLock({ onUnlock }) {
  const [edges, setEdges] = useState([]) // [{a, b}]
  const [lastDot, setLastDot] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const drawnEdgeSet = new Set(edges.map((e) => edgeKey(e.a, e.b)))
  const activeDots = new Set(edges.flatMap((e) => [e.a, e.b]))

  const handleDotClick = (num) => {
    if (success) return
    if (lastDot === null) {
      setLastDot(num)
      setError('')
      return
    }
    if (num === lastDot) return
    const ek = edgeKey(lastDot, num)
    if (drawnEdgeSet.has(ek)) {
      setError('这条线已经画过了。')
      return
    }
    const nextEdges = [...edges, { a: lastDot, b: num }]
    setEdges(nextEdges)
    setLastDot(num)
    setError('')

    const nextEdgeSet = new Set(nextEdges.map((e) => edgeKey(e.a, e.b)))
    if (nextEdgeSet.size === HEART_EDGE_SET.size) {
      let match = true
      for (const ek of HEART_EDGE_SET) { if (!nextEdgeSet.has(ek)) { match = false; break } }
      for (const ek of nextEdgeSet) { if (!HEART_EDGE_SET.has(ek)) { match = false; break } }
      if (match) {
        setSuccess(true)
        onUnlock()
      }
    }
  }

  const reset = () => { setEdges([]); setLastDot(null); setError(''); setSuccess(false) }

  return (
    <div className="p-4 md:p-10">
      <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 max-w-sm w-full text-center">
        <div className="text-lg font-bold text-sky-700 mb-2">富士山下埋葬的の❤</div>
        <div className="text-neutral-500 text-sm mb-6">请点击画出访问密码</div>
        <div className="text-neutral-400 text-xs mb-4">提示：看网站名</div>
        <div className="relative mx-auto mb-4" style={{ width: GRID_SIZE, height: GRID_SIZE }}>
          <svg className="absolute inset-0" width={GRID_SIZE} height={GRID_SIZE}>
            {edges.map((e, i) => {
              const from = dotCenter(e.a)
              const to = dotCenter(e.b)
              return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
            })}
          </svg>
          {[1,2,3,4,5,6,7,8,9].map((num) => {
            const col = (num - 1) % 3
            const row = Math.floor((num - 1) / 3)
            const isActive = activeDots.has(num) || lastDot === num
            return (
              <div
                key={num}
                onClick={() => handleDotClick(num)}
                className={`absolute rounded-full cursor-pointer flex items-center justify-center text-sm font-bold transition-colors ${
                  isActive ? 'bg-pink-400 text-white shadow-md' : 'bg-neutral-200 text-neutral-500 hover:bg-pink-100'
                }`}
                style={{ width: DOT_SIZE, height: DOT_SIZE, left: col * GAP, top: row * GAP }}
              >
                {num}
              </div>
            )
          })}
        </div>
        <div className="text-xs text-neutral-400 mb-3">
          已画 {edges.length} 条线{lastDot !== null ? ` · 当前起点: ${lastDot}` : ''}
        </div>
        <button onClick={reset} className="px-4 py-1.5 bg-neutral-200 rounded text-sm cursor-pointer">
          重置
        </button>
        {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
      </div>
    </div>
  )
}

// ===================== 诗歌 =====================
const POEM_LINES = [
  '就这样地俯首道别吧',
  '世间哪有什麽真能回头的',
  '河流呢',
  '',
  '就如那秋日的草原 相约著',
  '一起枯黄萎去',
  '我们也来相约吧',
  '相约著要把彼此忘记',
  '',
  '只有那野风总是不肯停止',
  '总是惶急地在林中',
  '在山道旁 在陌生的街角',
  '在我斑驳的心中扫过',
  '',
  '扫过啊 那些纷纷飘落的',
  '如秋叶般的记忆',
]

function Poem() {
  return (
    <div className="text-center">
      {POEM_LINES.map((line, i) =>
        line === '' ? (
          <div key={i} className="h-4" />
        ) : (
          <div key={i} className="text-neutral-600 leading-loose text-sm">
            {line}
          </div>
        )
      )}
      <div className="mt-6 text-neutral-400 text-sm">——席慕蓉</div>
    </div>
  )
}

// ===================== 日记本 tab =====================
function MengqingSheetPreview({ onClick }) {
  return (
    <div onClick={onClick} className="mt-2 rounded-lg overflow-hidden border border-amber-200 shadow-sm cursor-pointer">
      <ImagePlaceholder
        name={<span className="text-amber-700 text-xs">《梦晴》谱子 · 点击查看大图</span>}
        width="100%"
        height={140}
        from="#fff3b0"
        to="#ffd6a5"
        style={{ width: '100%' }}
      />
    </div>
  )
}

function DiaryTab() {
  const [showSheet, setShowSheet] = useState(false)
  return (
    <div className="py-5 px-4 md:py-6 md:px-8 max-w-lg mx-auto space-y-5 md:space-y-6">
      <div>
        <div className="text-neutral-400 text-xs mb-1">2020.11</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          现在时曾想起，还是会感到后悔。我再次发出好友申请时，不再有任何回音，你究竟去哪了呢，为什么世界上再未见过你的痕迹。
        </div>
      </div>
      <div>
        <div className="text-neutral-400 text-xs mb-1">2018.3</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          不解。为什么我对你掏心掏肺，你却在背后捅我一刀？
        </div>
      </div>
      <div>
        <div className="text-neutral-400 text-xs mb-1">2017.6</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          感觉有点长胖了，心累……蓝瘦香菇
        </div>
      </div>
      <div>
        <div className="text-neutral-400 text-xs mb-1">2017.1</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          好久没更新了~~~~不知道有没有陌生人进来看，感觉日记被别人看到有点羞耻
        </div>
      </div>
       <div>
        <div className="text-neutral-400 text-xs mb-1">2016.8</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          翻到了以前和如月、梦和一起写的小说，差点没给我笑死，我们每个人都给自己想了一个公主和精灵，而且画得特别丑。还翻到了梦和写给我的<Keyword>《梦晴》</Keyword>，她真的很有天赋。
        </div>
        <MengqingSheetPreview onClick={() => setShowSheet(true)} />
      </div>
       <div>
        <div className="text-neutral-400 text-xs mb-1">2016.7</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          重庆真的太热了！！！！根本出不了门
        </div>
      </div>
      <div>
        <div className="text-neutral-400 text-xs mb-1">2016.1</div>
        <div className="text-sm text-neutral-700 leading-relaxed">
          姐姐教我新建了一个网站，感觉好酷。
        </div>
      </div>

      {showSheet && (
        <Modal onClose={() => setShowSheet(false)}>
          <MengqingSheet />
        </Modal>
      )}
    </div>
  )
}

// ===================== 密码本 tab =====================
function PasswordList() {
  return (
    <div className="w-full">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
        <div className="text-amber-700 text-xs">⚠️ 玩家不要模仿这种行为，妥善保管自己的密码。</div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between py-2 border-b border-neutral-100">
          <span>QQ 密码</span>
          <span className="font-mono"><Keyword>HcqLOVE0826</Keyword></span>
        </div>
        <div className="flex justify-between py-2 border-b border-neutral-100">
          <span>邮箱密码</span>
          <span className="font-mono text-neutral-400">123456</span>
        </div>
        <div className="flex justify-between py-2 border-b border-neutral-100">
          <span>百度贴吧</span>
          <span className="font-mono text-neutral-400">123456</span>
        </div>
        <div className="flex justify-between py-2 border-b border-neutral-100">
          <span>学校系统</span>
          <span className="font-mono text-neutral-400">123456</span>
        </div>
      </div>
    </div>
  )
}

function PasswordBookTab() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className="py-5 px-4 md:py-8 md:px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
      <Poem />
      <div className="w-full">
        {!unlocked ? (
          <PasswordLock
            prompt={
              <div>
                <p className="mb-1">🔑 密码本</p>
                <p className="text-sm text-neutral-500">（1,8）（7,8）（7,9）（11,2）</p>
              </div>
            }
            errorHint="看左边"
            answer="别忘记我"
            onUnlock={() => setUnlocked(true)}
            className="min-h-[300px]"
          />
        ) : (
          <PasswordList />
        )}
      </div>
    </div>
  )
}

// ===================== 迷宫 tab =====================
function MazeTab() {
  const { setFlag } = useStore()
  const toast = useToast()

  const handleComplete = useCallback(() => {
    setFlag('mazeCompleted', true)
    toast.show(<>恭喜你成功了！</>)
  }, [setFlag, toast])

  return (
    <div className="py-6 px-4 relative">
      <MazeGame onComplete={handleComplete} />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}

// ===================== 《梦晴》简谱 =====================
// 每个 note = { n: 1-7, oct: -1(低音) | 0(中音) | 1(高音) }
const MENGQING_SHEET_LINES = [
  {
    notes: [
      { n: 7, oct: -1 }, { n: 1, oct: 0 }, { n: 3, oct: 0 }, { n: 5, oct: 0 },
      { n: 1, oct: 1 },  { n: 6, oct: 0 }, { n: 5, oct: 0 }, { n: 3, oct: 0 },
    ],
    lyrics: ['夜', '色', '轻', '轻', '落', '你', '窗', '前'],
    isKeyword:true,
  },
  {
    notes: [
      { n: 3, oct: 0 }, { n: 2, oct: 0 }, { n: 1, oct: 0 }, { n: 2, oct: 0 },
      { n: 3, oct: 0 }, { n: 5, oct: 0 }, { n: 1, oct: 1 },
    ],
    lyrics: ['偷', '偷', '藏', '进', '你', '梦', '里'],
  },
  {
    notes: [
      { n: 5, oct: 0 }, { n: 6, oct: 0 }, { n: 1, oct: 1 }, { n: 6, oct: 0 },
      { n: 5, oct: 0 }, { n: 3, oct: 0 }, { n: 7, oct: -1 },
    ],
    lyrics: ['守', '你', '到', '时', '间', '尽', '头'],
  },
]

function Note({ note }) {
  return (
    <div className="w-6 flex flex-col items-center leading-none">
      <span className={`text-[6px] ${note.oct === 1 ? 'text-amber-700' : 'text-transparent'}`}>●</span>
      <span className="text-lg font-bold text-amber-700">{note.n}</span>
      <span className={`text-[6px] ${note.oct === -1 ? 'text-amber-700' : 'text-transparent'}`}>●</span>
    </div>
  )
}

function MengqingSheet() {
  return (
    <div className="bg-[#fffaf0] border-2 border-amber-200 rounded-lg p-6 w-[min(560px,calc(100vw-3rem))]">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-amber-800">《梦晴》</div>
        <div className="text-xs text-neutral-500 mt-1">词 / 曲：梦和 · 写给采晴</div>
      </div>
      <div className="bg-amber-100/60 border border-amber-200 rounded px-3 py-1.5 text-xs text-amber-800 mb-5 text-center leading-relaxed">
        简谱记音 —— 数字上有点是高音，下有点是低音 🎵
      </div>
      <div className="space-y-5">
        {MENGQING_SHEET_LINES.map((line, i) => (
          <div key={i}>
            <div className="flex gap-3 border-b-2 border-dashed border-amber-300 pb-1 font-mono">
              {line.notes.map((note, j) => (
                <Note key={j} note={note} />
              ))}
            </div>
            <div className="flex gap-3 text-sm text-neutral-700 mt-1.5">
              {line.lyrics.map((ch, j) => line.isKeyword?(
                <span key={j} className="w-6 text-center"><Keyword>{ch}</Keyword></span>
              ):(
                <span key={j} className="w-6 text-center">{ch}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-right text-xs text-neutral-400 italic">PS: 这个谱子是 AI 生成的</div>
    </div>
  )
}

// ===================== 主组件 =====================
const TABS = [
  { key: 'passwords', label: '密码本' },
  { key: 'diary', label: '日记本' },
  { key: 'maze', label: '迷宫' },
]

export function PersonalSite() {
  const { personalSiteUnlocked, setFlag } = useStore()
  const [fading, setFading] = useState(false)
  const [hidden, setHidden] = useState(personalSiteUnlocked)
  const [showHearts, setShowHearts] = useState(false)
  const [tab, setTab] = useState('passwords')
  const isMobile = useIsMobile()
  const showContent = hidden || !isMobile

  const handleUnlock = () => {
    setFlag('personalSiteUnlocked', true)
    setShowHearts(true)
    setFading(true)
    setTimeout(() => setHidden(true), 1200)
    setTimeout(() => setShowHearts(false), 6000)
  }

  return (
    <BrowserFrame>
      {showHearts && <HeartParticles />}
      <div className="relative min-h-full bg-linear-to-b from-sky-50 to-pink-50">
        {/* Password overlay — absolute on top of content */}
        {!hidden && (
          <div className={`absolute inset-0 z-10 flex items-center justify-center bg-linear-to-b from-sky-50 to-pink-50 transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'}`}>
            <HeartGridLock onUnlock={handleUnlock} />
          </div>
        )}
        {/* Content rendered underneath (skip on mobile while lock overlay is active,
            otherwise long content would stretch the overlay container). */}
        {showContent && (
          <div className="min-h-full ">
            <div className="text-center pt-6 pb-2">
              <div className="text-2xl font-bold text-sky-600">富士山下埋葬的の❤</div>
              <div className="text-neutral-400 text-xs mt-1">采晴的秘密花园</div>
            </div>
            <div className="flex justify-center gap-6 py-3 border-b border-sky-200/50 text-sm">
              {TABS.map((t) => (
                <span
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`cursor-pointer px-3 py-1 rounded-full ${
                    tab === t.key ? 'bg-sky-500 text-white' : 'text-neutral-500 hover:bg-sky-100'
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>
            {tab === 'diary' && <DiaryTab />}
            {tab === 'passwords' && <PasswordBookTab />}
            {tab === 'maze' && <MazeTab />}
          </div>
        )}
      </div>
    </BrowserFrame>
  )
}
