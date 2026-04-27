import { BrowserFrame } from '../../browser/BrowserFrame'
import { ImagePlaceholder, Keyword } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { useStore } from '../../store'
import { QZoneShell, QZonePasswordGate } from './QZoneShell'

function Comment({ author, children, highlight }) {
  return (
    <div className="flex gap-2 py-1.5 text-xs">
      <span className={`font-medium shrink-0 ${highlight ? 'text-emerald-300' : 'text-amber-400'}`}>{author}：</span>
      <span className="text-neutral-400">{children}</span>
    </div>
  )
}

const POSTS = [
  {
    time: '2013.5.17',
    content: <>嫉妒使我面目全非</>,
  },
  {
    time: '2013.5.12',
    content: <>如果你从没来过就好了，对不起</>,
  },
  {
    time: '2013.5.12',
    content: <>采晴再也不想跟我一起创作了。</>,
  },
  {
    time: '2013.4.29',
    content: <>好想断绝父女关系</>,
  },
  {
    time: '2013.4.29',
    content: <>我真的很恶心，对不起</>,
  },
  {
    time: '2013.4.29',
    content: <>不应该是这样的。。。。。。。。我真的很对不起，我不应该不说话。。。。。。我真的没想到爸爸会直接调走她家</>,
  },
  {
    time: '2012.12.23',
    content: <>爸爸说他会帮忙的，难道我终于自由了吗！！！！</>,
  },
  {
    time: '2012.12.14',
    content: (
      <>
        爸爸打电话来，又骂了我一顿，还问我"是不是姚如月走了你就不闹了？"。
        <div className="mt-1.5">
          我……我没说话。明明应该替她解释的，一个字都说不出口。挂了电话我就吐了，胃酸一直烧到嗓子。是我太坏。
        </div>
      </>
    ),
  },
  {
    time: '2012.12.3',
    content: (
      <>
        听妈妈说我最近会讲梦话，感觉好吓人，我怎么会讲梦话。妈妈昨晚问我的时候眼睛红红的，还说了些我不记得的话……我是不是说了什么不该说的？
      </>
    ),
  },
  {
    time: '2012.10.20',
    content: (
      <>
        又做了同一个梦。她们两个站在一起，怎么喊都不回头。第十七次了。
      </>
    ),
  },
  {
    time: '2012.5.2',
    content: (
      <>
        我好像第三者
      </>
    ),
  },
  {
    time: '2012.4.30',
    content: (
      <>
        最开始只有我们两个的时候不是这样的
      </>
    ),
  },
  {
    time: '2012.4.30',
    content: (
      <>
        可以不要说只有你们俩才知道的事情吗？
      </>
    ),
  },
  {
    time: '2011.9.10',
    content: (
      <>
       妈妈怎么每天都这么忙啊，她们俩又去玩了，为什么我要被关在家里面。晚上睡不着，手好痒，好奇怪……我是不是要死了
      </>
    ),
  },
  {
    time: '2011.3.27',
    content: (
      <>
        你们聊天的时候为什么看到我都会转移话题呢，好尴尬，我不喜欢这样
      </>
    ),
  },
  {
    time: '2010.12.15',
    content: (
      <>
        爸爸明天出发。妈妈说这次至少两年不回来。
        <div className="mt-1.5">
          我其实很开心，终于可以跟她们到处玩不被骂了。这样想会不会很不孝……
        </div>
      </>
    ),
  },
  {
    time: '2010.10.30',
    content: (
      <>
        司机太坏了，我只是偷吃了一点，为什么要告发我，所有人都是爸爸的狗腿子吗。
        在朋友的面前掉眼泪，好丢脸
      </>
    ),
  },
  {
    time: '2010.9.2',
    content: (
      <>
        新同学画画也太好看了，我就不行，我只能画简笔画
      </>
    ),
  },
  {
    time: '2010.8.26',
    content: (
      <>
        超级开心的生日趴体~采晴的妈妈做饭太好吃啦，好幸福的家庭
      </>
    ),
  },
  {
    time: '2010.5.20',
    content: (
      <>
        今天老师给我们看了贫困山区纪录片，真的非常感动和心疼。跟爸爸妈妈分享后，他们准备设立一个<Keyword>基金</Keyword>来资助贫困学生读书，<Keyword>用我的名字命名</Keyword>，希望能够帮到大家
      </>
    ),
  },
  {
    time: '2010.5.18',
    content: (
      <>
        今天路过家附近的琴行，听到里面的女生被老师吼了一句。我真的很想替她哭。
      </>
    ),
  },
  {
    time: '2010.2.3',
    content: (
      <>
        回到了熟悉的校园，休学两年，医生说我好多了。但愿如此。新的班级里有个女孩叫采晴，好美的名字
      </>
    ),
  },
]

function Timeline() {
  return (
    <div className="bg-neutral-800 rounded-lg p-4">
      <div className="text-neutral-500 text-xs mb-3 border-b border-neutral-700 pb-2">全部动态 · {POSTS.length} 条</div>
      {POSTS.map((p, i) => (
        <div key={i} className="border-b border-neutral-700/30 py-4 flex gap-3 last:border-b-0">
          <ImagePlaceholder sprite={spriteForUser('如梦令')} width={40} height={40} round label={false} />
          <div className="flex-1">
            <div className="text-emerald-300 text-xs font-bold mb-1">如梦令</div>
            <div className="text-sm leading-relaxed text-neutral-300">{p.content}</div>
            <div className="text-neutral-500 text-[11px] mt-1.5">{p.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function EmptyTab({ label }) {
  return (
    <div className="bg-neutral-800 rounded-lg p-4 text-center text-neutral-500 text-sm py-12">
      {label}空空如也
    </div>
  )
}

export function RumenglingQZone() {
  const { rumenglingSpaceVisited, setFlag } = useStore()

  if (!rumenglingSpaceVisited) {
    return (
      <BrowserFrame>
        <QZonePasswordGate
          name="如梦令"
          prompt={
            <div className="space-y-1">
              <div>我给自己取的名字是什么？</div>
            </div>
          }
          errorHint="「永远的姐妹」"
          answer="慕容梦和"
          onUnlock={() => setFlag('rumenglingSpaceVisited', true)}
        />
      </BrowserFrame>
    )
  }

  return (
    <BrowserFrame>
      <QZoneShell
        profile={{
          name: '如梦令',
          bio: '',
          avatarSprite: spriteForUser('如梦令'),
          headerBg: 'bg-linear-to-br from-emerald-900/40 via-neutral-800 to-neutral-900',
          todayVisitors: 0,
          albumVisits: 0,
        }}
        tabs={[
          { key: 'timeline', label: '主页', render: () => <Timeline /> },
          { key: 'album', label: '相册', render: () => <EmptyTab label="相册" /> },
          { key: 'guestbook', label: '留言板', render: () => <EmptyTab label="留言板" /> },
        ]}
      />
    </BrowserFrame>
  )
}
