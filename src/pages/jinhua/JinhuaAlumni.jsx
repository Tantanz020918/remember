import { useState } from 'react'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, StoryLink, ImagePlaceholder } from '../../components/ui'
import { PageId } from '../pageIds'

export function JinhuaAlumni() {
  const [year, setYear] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const submit = () => {
    if (year.trim() === '2014') {
      setShowResult(true)
      setErrorMsg('')
    } else {
      setShowResult(false)
      setErrorMsg('暂无相关档案，请确认届别。')
    }
  }

  return (
    <BrowserFrame>
      <div className="bg-white text-[13px]">
        <div className="flex items-center gap-3.5 px-7 py-3.5 bg-linear-to-br from-[#fff3cd] to-[#ffe0a3] border-b-4 border-[#f5a8a0]">
          <ImagePlaceholder
            name="校徽"
            width={56}
            height={56}
            from="#ff9800"
            to="#ffc107"
            round
            label={false}
          />
          <div>
            <h1 className="text-[22px] text-[#c43f1f] tracking-wider font-semibold">
              璧山区金花小学 · 校友档案
            </h1>
            <div className="text-[11px] text-[#a0633e]">Alumni Archive</div>
          </div>
        </div>
        <div className="flex gap-6 px-7 py-3 bg-[#c43f1f] text-white text-[13px]">
          <StoryLink to={PageId.JINHUA_HOME} className="text-white!">
            首页
          </StoryLink>
          <a className="cursor-pointer hover:opacity-80">学校概况</a>
          <a className="cursor-pointer hover:opacity-80">师资风采</a>
          <a className="cursor-pointer hover:opacity-80">新闻动态</a>
          <a className="cursor-pointer hover:opacity-80">教学科研</a>
          <a className="cursor-pointer hover:opacity-80">德育天地</a>
          <a className="font-bold underline cursor-pointer">校友档案</a>
          <a className="cursor-pointer hover:opacity-80">联系我们</a>
        </div>
        <div className="px-10 pt-5 pb-10 max-w-[820px]">
          <h3 className="font-bold mb-2.5">毕业照查询</h3>
          <p className="text-neutral-600 text-[13px]">请输入届别（4 位年份），例如：2001</p>
          <div className="flex gap-2.5 my-3.5">
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="届别"
              className="px-3 py-2 border border-neutral-300 rounded text-[13px] outline-none"
            />
            <button
              onClick={submit}
              className="px-5 py-2 bg-[#c43f1f] text-white border-none rounded cursor-pointer"
            >
              查询
            </button>
          </div>
          {errorMsg && <div className="text-red-600 text-[13px]">{errorMsg}</div>}
          {showResult && (
            <div className="mt-5">
              <div className="mb-2.5 text-[13px] text-neutral-600">
                2014 届毕业合影 · 六年级 (2) 班
              </div>
              <ImagePlaceholder
                name="2014 届毕业合影"
                width="100%"
                height={260}
                from="#a8d0e6"
                to="#ffd1a4"
                style={{ width: '100%' }}
              />
              <div className="mt-3 leading-loose font-mono bg-neutral-50 px-3.5 py-2.5 rounded">
                <div>第一排：王思琪 张浩然 刘雅婷 陈子涵 赵小雨 周明辉 吴佳怡</div>
                <div>
                  第二排：孙伟杰 黄诗涵 林志豪 <Keyword>胡采晴</Keyword> <Keyword>李梦和</Keyword> 杨雨萱 郑凯文
                </div>
                <div>第三排：何思远 马欣怡 罗天宇 谢语嫣 唐浩宇 韩雪莹 曾一凡</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserFrame>
  )
}
