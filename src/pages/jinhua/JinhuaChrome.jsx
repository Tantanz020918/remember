import { StoryLink, ImagePlaceholder } from '../../components/ui'
import { PageId } from '../pageIds'

const NAV = [
  { key: 'home', label: '首页', pageId: PageId.JINHUA_HOME },
  { key: 'overview', label: '学校概况' },
  { key: 'teachers', label: '师资风采' },
  { key: 'news', label: '新闻动态' },
  { key: 'research', label: '教学科研' },
  { key: 'morals', label: '德育天地' },
  { key: 'alumni', label: '校友档案', pageId: PageId.JINHUA_ALUMNI },
  { key: 'contact', label: '联系我们' },
]

// Items kept visible on mobile. The others collapse to `hidden md:inline`.
const MOBILE_KEYS = new Set(['home', 'overview', 'alumni'])

export function JinhuaChrome({ active, subtitleZh, subtitleEn, children }) {
  return (
    <>
      <div className="flex items-center gap-3 md:gap-3.5 px-4 md:px-7 py-3 md:py-3.5 bg-linear-to-br from-[#fff3cd] to-[#ffe0a3] border-b-4 border-[#f5a8a0]">
        <ImagePlaceholder name="校徽" width={56} height={56} from="#ff9800" to="#ffc107" round label={false} />
        <div className="min-w-0">
          <h1 className="text-[18px] md:text-[22px] text-[#c43f1f] tracking-wider font-semibold truncate">
            {subtitleZh || '璧山区金花小学'}
          </h1>
          <div className="text-[11px] text-[#a0633e]">{subtitleEn || 'Jinhua Primary School · 求真 · 向善 · 尚美'}</div>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6 px-4 md:px-7 py-3 bg-[#c43f1f] text-white text-[13px]">
        {NAV.map((n) => {
          const isActive = n.key === active
          const activeCls = isActive ? 'font-bold underline' : 'hover:opacity-80'
          const mobileCls = MOBILE_KEYS.has(n.key) ? '' : 'hidden md:inline'

          if (isActive || !n.pageId) {
            return (
              <a key={n.key} className={`cursor-pointer ${activeCls} ${mobileCls}`}>
                {n.label}
              </a>
            )
          }
          return (
            <StoryLink
              key={n.key}
              to={n.pageId}
              className={`text-white! ${mobileCls}`}
            >
              {n.label}
            </StoryLink>
          )
        })}
      </div>
      {children}
    </>
  )
}
