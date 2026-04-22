import { BrowserFrame } from '../../browser/BrowserFrame'
import { ImagePlaceholder, Keyword } from '../../components/ui'
import { QZoneShell } from './QZoneShell'

const COMMENTS = [
  { author: '八班路人', text: '大小姐还敢表白？人家估计连 QQ 都不用吧，你去 ins 上面找还差不多' },
  { author: '吃瓜群众', text: '她应该没有 QQ 吧，反正我们班同学都没加到' },
  { author: '朵朵', text: <>她<Keyword>以前有用 QQ</Keyword>，现在没用了，以前她还评论过我发的东西</> },
  { author: '匿名', text: '醒醒，这种家庭的女儿是看不到你的👻' },
]

function Timeline() {
  return (
    <div className="bg-neutral-800 rounded-lg p-4">
      <div className="text-neutral-500 text-xs mb-3 border-b border-neutral-700 pb-2">全部动态 · 仅 1 条</div>
      <div className="py-4 flex gap-3">
        <ImagePlaceholder width={40} height={40} round from="#ffb3c1" to="#ff4d6d" label={false} />
        <div className="flex-1">
          <div className="text-amber-300 text-xs font-bold mb-1">璧山中学表白墙</div>
          <div className="text-sm leading-relaxed text-neutral-300">
            <p>#墙墙匿名表白# 表白高一(1)班李梦和，谁有她的 QQ 啊在线等。</p>
          </div>
          <div className="text-neutral-500 text-[11px] mt-2">2018.1.2 22:47</div>
          <div className="mt-3 bg-neutral-900/50 rounded p-3 space-y-1.5">
            <div className="text-neutral-500 text-[11px] mb-1.5">全部评论 · {COMMENTS.length}</div>
            {COMMENTS.map((c, i) => (
              <div key={i} className="flex gap-2 py-1 text-xs">
                <span className={`font-medium shrink-0 ${c.highlight ? 'text-sky-400' : 'text-amber-400'}`}>{c.author}：</span>
                <span className="text-neutral-400">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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

export function BishanConfessionWall() {
  return (
    <BrowserFrame>
      <QZoneShell
        profile={{
          name: '璧山中学表白墙',
          bio: '投稿请私信本号',
          avatarFrom: '#ffb3c1',
          avatarTo: '#ff4d6d',
          headerBg: 'bg-linear-to-br from-rose-900/40 via-neutral-800 to-neutral-900',
          todayVisitors: 12,
          albumVisits: 48392,
        }}
        tabs={[
          { key: 'timeline', label: '主页', render: () => <Timeline /> },
          { key: 'album', label: '相册', render: () => <EmptyTab label="相册" /> },
          { key: 'guestbook', label: '留言板', render: () => <EmptyTab label="留言板" /> },
        ]}
        rightSidebarProps={{ weeklyVisits: 147 }}
      />
    </BrowserFrame>
  )
}
