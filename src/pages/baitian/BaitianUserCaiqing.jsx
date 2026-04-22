import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { Keyword, StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'
import { PageId } from '../pageIds'

export function BaitianUserCaiqing() {
  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg px-4 md:px-6 py-4 md:py-5 flex gap-3 md:gap-5 mb-3.5 border border-pink-200 items-center">
          <div className="shrink-0">
            <ImagePlaceholder
              name="闺蜜头像 1"
              width={72}
              height={72}
              round
              from="#ffccee"
              to="#ff99cc"
              label={false}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[#d16b8a] mb-1.5 font-bold text-lg md:text-xl">采晴0826</h2>
            <div className="text-neutral-400 text-xs mb-2">
              Lv.12 · 粉丝 38 · 关注 26 · 注册于 2010-7-19
            </div>
            <div className="text-neutral-700 text-[13px]">
              个性签名：hello 大家好呀~~
            </div>
          </div>
        </div>
        <div className="bg-[#e891b0] text-white px-4 py-2 rounded-t-md font-bold text-[13px]">
          📝 TA 发过的帖子
        </div>
        <ul className="list-none bg-white border border-pink-200 rounded-b-md overflow-hidden">
          <li className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]">
            <DeadLink>【求助】求稀有衣服「星空长裙」能和谁换</DeadLink>
            <span className="md:ml-auto text-neutral-400 text-[11px]">2014-02-14 · 回复 12</span>
          </li>
          <li className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]">
            <StoryLink to={PageId.POST_TRANSFER}>
              <Keyword>【日记】朋友转学了好伤心</Keyword>
            </StoryLink>
            <span className="md:ml-auto text-neutral-400 text-[11px]">2013-05-30 · 回复 27</span>
          </li>
          <li className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]">
            <DeadLink>
              【帮转】奥比岛言情大戏「<Keyword>待你回眸一笑</Keyword>」开播啦！
            </DeadLink>
            <span className="md:ml-auto text-neutral-400 text-[11px]">2014-03-08 · 回复 8</span>
          </li>
          <li className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]">
            <StoryLink to={PageId.POST_PRINCESS}>【原创】⭐️偶像公主设定⭐️</StoryLink>
            <span className="md:ml-auto text-neutral-400 text-[11px]">2010-07-19 · 回复 1</span>
          </li>
          <li className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]">
            <DeadLink>【晒图】今天换的新衣服，好看嘛？</DeadLink>
            <span className="md:ml-auto text-neutral-400 text-[11px]">2013-12-01 · 回复 18</span>
          </li>
          <li className="px-3 md:px-4 py-2.5 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]">
            <DeadLink>【辟谣】「梦の伤」的绝版全是自己充的，造谣的人出来道歉！</DeadLink>
            <span className="md:ml-auto text-neutral-400 text-[11px]">2012-10-04 · 回复 53</span>
          </li>
        </ul>
      </BaitianFrame>
    </BrowserFrame>
  )
}
