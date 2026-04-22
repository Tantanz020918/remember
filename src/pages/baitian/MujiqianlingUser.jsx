import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { ImagePlaceholder } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { DRAMA_POSTS } from '../../data/mujiqianlingDramaData'

function PlainLink({ to, children }) {
  const navigate = useGameNavigate()
  return (
    <a
      className="text-sky-700 cursor-pointer hover:underline"
      onClick={(e) => {
        e.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}

export function MujiqianlingUser() {
  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg px-4 md:px-6 py-4 md:py-5 flex gap-3 md:gap-5 mb-3.5 border border-pink-200 items-center">
          <div className="shrink-0">
            <ImagePlaceholder
              sprite={spriteForUser('沐季千柠')}
              width={72}
              height={72}
              round
              label={false}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[#d16b8a] mb-1.5 font-bold text-lg md:text-xl">沐季千柠</h2>
            <div className="text-neutral-400 text-xs mb-2">
              Lv.15 · 粉丝 2,384 · 关注 47 · 注册于 2010-5-12
            </div>
            <div className="text-neutral-700 text-[13px]">
              个性签名：这真的是我的童年
            </div>
          </div>
        </div>

        <div className="bg-[#e891b0] text-white px-4 py-2 rounded-t-md font-bold text-[13px]">
          🎬 待你回眸一笑 · 剧本合集
        </div>
        <ul className="list-none bg-white border border-pink-200 rounded-b-md overflow-hidden">
          {DRAMA_POSTS.map((p) => (
            <li
              key={p.key}
              className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 last:border-b-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]"
            >
              <span className="flex-1 min-w-0">
                <PlainLink to={p.pageId}>{p.title}</PlainLink>
              </span>
              <span className="md:ml-auto text-neutral-400 text-[11px] shrink-0">{p.meta}</span>
            </li>
          ))}
        </ul>
      </BaitianFrame>
    </BrowserFrame>
  )
}
