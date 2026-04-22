import { useState } from 'react'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { Keyword, StoryLink, DeadLink } from '../../components/ui'
import { PageId } from '../pageIds'

const POSTS = [
  {
    title: <DeadLink>【攻略】稀有衣服「星空长裙」获取全收录</DeadLink>,
    meta: '糖糖不吃糖 · 2013-07-12 · 回复 234',
  },
  {
    title: <DeadLink>【闲聊】你们还记得在奥比岛养的第一只宠物吗？</DeadLink>,
    meta: '云朵软糖 · 2013-06-28 · 回复 598',
  },
  {
    title: (
      <StoryLink to={PageId.POST_CASTING}>
        【招募】奥比岛短剧招人啦～
      </StoryLink>
    ),
    meta: (
      <>
        <StoryLink to={PageId.EXTRA_MUJIQIANLING_USER}>沐季千柠</StoryLink>
        {' · 2012-08-20 · 回复 89'}
      </>
    ),
  },
  {
    title: <DeadLink>【活动】夏日派对签到帖</DeadLink>,
    meta: '奥比岛官方 · 2013-07-01 · 回复 1024',
  },
  {
    title: <DeadLink>【求助】账号找回流程求教</DeadLink>,
    meta: '小鱼干 · 2013-05-14 · 回复 46',
  },
  {
    title: <DeadLink>【同人】给梦幻的一封信</DeadLink>,
    meta: '星星点灯 · 2013-04-03 · 回复 128',
  },
  {
    title: (
      <StoryLink to={PageId.POST_DECODE}>为什么我打开游戏一堆乱码？</StoryLink>
    ),
    meta: '小糊涂 · 2013-04-22 · 回复 156',
  },
  {
    title: <DeadLink>【图片】我家奥比的超可爱变装秀</DeadLink>,
    meta: '奥比小王子 · 2013-03-17 · 回复 312',
  },
  {
    title: <DeadLink>有人喜欢看查理九世吗~~~~</DeadLink>,
    meta: '小侦探 · 2013-04-12 · 回复 24',
  },
]

export function BaitianHome() {
  const [query, setQuery] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useGameNavigate()

  const submit = () => {
    const value = query.trim()
    if (value === '采晴0826') {
      navigate(PageId.AOBI_USER_CAIQING)
    } else if (value === '沐季千柠' || value === '待你回眸一笑') {
      navigate(PageId.EXTRA_MUJIQIANLING_USER)
    } else {
      setErrorMsg('无搜索结果，用户可能隐藏了个人信息。')
    }
  }

  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg px-4 md:px-5 py-3 mb-3 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-3 border border-pink-200">
          <div className="flex items-center gap-1.5">
            <input
              className="flex-1 md:flex-none px-3.5 py-1.5 border border-pink-200 rounded-full text-xs outline-none md:w-[180px] min-w-0"
              placeholder="搜索用户 ID"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
            />
            <button
              onClick={submit}
              className="px-3.5 py-1.5 bg-[#e891b0] text-white border-none rounded-full cursor-pointer text-xs shrink-0"
            >
              搜索
            </button>
          </div>
          <div className="text-neutral-400 text-[11px]">
            今日：123 | 昨日：456 | 帖子：12.3w | 会员：8.9k
          </div>
        </div>
        {errorMsg && <div className="text-red-600 my-2 text-[13px]">{errorMsg}</div>}
        <div className="bg-[#e891b0] text-white px-4 py-2 rounded-t-md font-bold text-[13px]">
          🔥 热门帖子
        </div>
        <ul className="list-none bg-white border border-pink-200 rounded-b-md overflow-hidden">
          {POSTS.map((post, idx) => (
            <li
              key={idx}
              className="px-3 md:px-4 py-2.5 border-b border-dashed border-pink-100 last:border-b-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-2.5 text-[13px]"
            >
              <span className="flex-1 min-w-0">{post.title}</span>
              <span className="md:ml-auto text-neutral-400 text-[11px]">{post.meta}</span>
            </li>
          ))}
        </ul>
      </BaitianFrame>
    </BrowserFrame>
  )
}
