import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'
import { NAV_ITEMS, NEWS_CARDS, NOTICES, TEAM_MEMBERS, QUICK_LINKS } from '../../data/jinhuaHomeData'
import { PageId } from '../pageIds'

function NewsCard({ imageFrom, imageTo, imageName, title, date }) {
  return (
    <div className="bg-white border border-neutral-200 rounded overflow-hidden cursor-pointer hover:shadow-md">
      <ImagePlaceholder
        name={imageName}
        width="100%"
        height={100}
        from={imageFrom}
        to={imageTo}
        style={{ width: '100%', borderRadius: 0 }}
      />
      <div className="px-2.5 py-2 text-xs font-semibold leading-snug">{title}</div>
      <div className="px-2.5 pb-2 text-neutral-400 text-[11px]">{date}</div>
    </div>
  )
}

function SectionHeader({ title }) {
  return (
    <div className="flex justify-between items-center pb-2 border-b-2 border-[#c43f1f] mb-3">
      <h3 className="text-[15px] text-[#c43f1f] font-bold">{title}</h3>
      <span className="text-neutral-400 text-xs">更多 &gt;</span>
    </div>
  )
}

function SidebarCard({ title, children }) {
  return (
    <div className="bg-amber-50/60 border border-amber-200 rounded p-3.5 mb-4 last:mb-0">
      <h3 className="text-sm text-[#c43f1f] mb-2.5 pb-1.5 border-b border-amber-200 font-bold">{title}</h3>
      {children}
    </div>
  )
}

export function JinhuaHome() {
  return (
    <BrowserFrame>
      <div className="bg-white text-[13px]">
        <div className="flex items-center gap-3.5 px-7 py-3.5 bg-linear-to-br from-[#fff3cd] to-[#ffe0a3] border-b-4 border-[#f5a8a0]">
          <ImagePlaceholder name="校徽" width={56} height={56} from="#ff9800" to="#ffc107" round label={false} />
          <div>
            <h1 className="text-[22px] text-[#c43f1f] tracking-wider font-semibold">璧山区金花小学</h1>
            <div className="text-[11px] text-[#a0633e]">Jinhua Primary School · 求真 · 向善 · 尚美</div>
          </div>
          <div className="flex-1" />
        </div>
        <div className="flex gap-6 px-7 py-3 bg-[#c43f1f] text-white text-[13px]">
          {NAV_ITEMS.map((n) => (
            <a key={n.label} className={`cursor-pointer ${n.active ? 'font-bold underline' : 'hover:opacity-80'}`}>{n.label}</a>
          ))}
          <StoryLink to={PageId.JINHUA_ALUMNI} className="text-white!">校友档案</StoryLink>
        </div>
        <ImagePlaceholder name="校园全景" width="100%" height={220} from="#4fc3f7" to="#66bb6a" style={{ width: '100%', borderRadius: 0 }} />
        <div className="grid grid-cols-[2fr_1fr] gap-5 px-7 py-5">
          <div>
            <div className="mb-6">
              <SectionHeader title="学校新闻" />
              <div className="grid grid-cols-3 gap-3">
                {NEWS_CARDS.map((c, i) => <NewsCard key={i} {...c} />)}
              </div>
            </div>
            <div>
              <SectionHeader title="通知公告" />
              <ul className="list-none">
                {NOTICES.map((n) => (
                  <li key={n.title} className="flex justify-between py-2 border-b border-dashed border-neutral-200 text-[13px]">
                    <DeadLink>{n.title}</DeadLink>
                    <span className="text-neutral-400 text-[11px]">{n.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <SidebarCard title="管理团队">
              {TEAM_MEMBERS.map((m) => (
                <div key={m.name} className="flex justify-between py-1 text-xs">
                  <b className="text-neutral-500 font-normal">{m.role}</b>
                  <span>{m.name}</span>
                </div>
              ))}
            </SidebarCard>
            <SidebarCard title="校友档案">
              <p className="text-xs text-neutral-600">
                金花小学建校 70 余年，校友遍布各行各业。欢迎校友{' '}
                <StoryLink to={PageId.JINHUA_ALUMNI}>登记查询</StoryLink>。
              </p>
            </SidebarCard>
            <SidebarCard title="快捷入口">
              <div className="flex flex-col gap-1.5 text-xs">
                {QUICK_LINKS.map((label) => <DeadLink key={label}>{label}</DeadLink>)}
              </div>
            </SidebarCard>
          </div>
        </div>
        <div className="px-7 py-4 bg-[#c43f1f] text-white text-center text-[11px]">
          © 2026 璧山区金花小学 · 渝 ICP 备 xxxxxxxx 号 · 地址：重庆市璧山区金花路 88 号
        </div>
      </div>
    </BrowserFrame>
  )
}
